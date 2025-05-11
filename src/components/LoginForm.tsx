import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className={styles.container}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
      </form>
      <button
        onClick={() => navigate("/signup")}
        className={styles.signupButton}
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginForm;
