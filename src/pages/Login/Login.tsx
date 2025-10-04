import InputMain from "../../components/Inputs/InputMain/InputMain";
import styles from "./index.module.css";
import React, { useState, useRef, useEffect } from "react";
import { api, isCancel } from "../../config.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

    setErrors({});
    // zruš případný starý request
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const payload = { username, password };
      setLoading(true);
      const res = await api.post("/admin/auth/login", payload, {
        signal: controller.signal,
      });

      // Handle successful login
    } catch (err) {
      if (isCancel(err)) return;

      // Handle error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginPage}>
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
            />
            {errors?.username && (
              <span className={styles.errorMessage}>{errors?.username}</span>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <InputMain
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
            />
            {errors?.password && (
              <span className={styles.errorMessage}>{errors?.password}</span>
            )}
          </div>
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
    </div>
  );
}
