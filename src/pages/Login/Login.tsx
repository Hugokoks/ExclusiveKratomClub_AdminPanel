import InputMain from "../../components/Inputs/InputMain/InputMain";
import styles from "./index.module.css";
import { useState, useRef } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  /*
  async function apiCall() {

    try {


    }
    catch (err) {



    }



  }
 */
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-sm space-y-6 justify-center text-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold italic">Log in</h1>
        <form className="space-y-6 flex flex-col gap-10">
          <div className={styles.inputWrapper}>
            <InputMain
              label="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
            />
            {errors.username && (
              <span className={styles.errorMessage}>{errors.username}</span>
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
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
          </div>
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
    </div>
  );
}
