import InputMain from "../../components/Inputs/InputMain/InputMain";
import styles from "./index.module.css";
import React, { useState } from "react";
import { useNotification } from "../../context/NotificationProvider.js";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader.js";
import { useLogin } from "../../hooks/useLogin.tsx";




export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { showNotification } = useNotification();

  const { login, isPending, errors, setErrors } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ////check empty fields before api call
    if (!username || !password) {
      setErrors({
        username: !username,
        password: !password,
      });
      showNotification({ status: "error", message: "Přihlašovací údaje nesmí být prázdné!" });
      return;
    }
    setErrors({});
    login({ username, password })
  }

  return (
    <div className={styles.loginPage}>

      {isPending && <FullScreenLoader />}
      <div className={styles.loginBox}>
        <img src="logo.png" width="100" />
        <h1>Log in</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <InputMain
              label="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}

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
              hasError={errors?.password}
            />
          </div>
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
    </div>
  );
}
