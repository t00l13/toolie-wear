import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      console.log('loading')
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Вход</h2>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Вход
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Войти с помощью Google
        </button>
        <div>
          <Link to="/reset">Забыли пароль</Link>
        </div>
        <div>
          У вас нет аккаунта? <Link to="/register">Регистрируйтесь</Link> сейчас.
        </div>
      </div>
    </div>
  );
}
export default Login;