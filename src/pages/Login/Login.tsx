import InputMain from "../../components/Inputs/InputMain/InputMain";
import styles from "./index.module.css";
import React, { useState, useRef, useEffect } from "react";
import { cliApi, isCancel } from "../../config.js";
import CardNotification from "../../components/CardNotification/CardNotification.js";
import { useNotification } from "../../context/NotificationProvider.js";
import type { AxiosError } from "axios";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader.js";
import { useNavigate } from "react-router-dom";

interface FormErrors {
  username?: boolean;
  password?: boolean;
}
interface ApiErrorData {
  message?: string;
  credentials_err?: boolean; // Tvá custom property z backendu
  status?: string;
  valid?: boolean;
  // ... další pole, které backend posílá
}
export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotification();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  // drzí aktuální běžící request
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // cleanup na unmount
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  async function apiCall(e?: React.FormEvent) {
    if (e) e.preventDefault();

    const newErrors: FormErrors = {};

    if (password.length === 0) newErrors.password = true;
    if (username.length === 0) newErrors.username = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showNotification({ status: "error", message: "Credentials cannot be empty!" });
      return;
    }

    // Nulování chyb
    setErrors({});

    // zruš případný starý request
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const payload = { username, password };
      setLoading(true);
      const res = await cliApi.post("/admin/auth/login", payload, {
        signal: controller.signal,
      });


      const { status } = res.data;
      if (status === "ok") navigate("/orders");

    } catch (err) {
      if (isCancel(err)) return;

      if (typeof err === 'object' && err !== null && 'response' in err) {

        const errResponse = (err as AxiosError<ApiErrorData>).response;
        // Zpracování dat z backendu
        const message = errResponse?.data?.message || "Wrong username or password!";
        const credentialsErr = errResponse?.data?.credentials_err;
        if (credentialsErr) {
          setErrors({ username: true, password: true });
          setPassword("");
        }
        showNotification({ status: "error", message: message, });
      } else {
        showNotification({ status: "error", message: "A network error occurred or server is unreachable.", });
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={styles.loginPage}>
      <CardNotification />

      {loading && <FullScreenLoader />}
      <div className={styles.loginBox}>
        <img src="logo.png" width="100" />
        <h1>Log in</h1>
        <form className={styles.form} onSubmit={apiCall}>
          <div className={styles.inputWrapper}>
            <InputMain
              label="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              hasError={errors?.username}
            />
          </div>
          <div className={styles.inputWrapper}>
            <InputMain
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              hasError={errors?.password}

            />
          </div>
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
    </div>
  );
}
