import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="logo do sistema" />
        </div>
        <form action="">
          <h1>Nova conta</h1>
          <input
            type="text"
            placeholder="Guilherme Maciel"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já possui uma conta? Faça login!</Link>
      </div>
    </div>
  );
}
