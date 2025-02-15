import React from "react";

function Login({ isOpen, closeLogin}) {
  if (!isOpen) return null;

  return (
    <div className="telalogin">
      <div className="closelogin"><button onClick={closeLogin}>X</button></div>

      <div className="entradas">
        <input type="email" placeholder="E-mail" className="input-login" />
        <input type="password" placeholder="Senha" className="input-login" />
        <button className="botao-login">Entrar</button>
      </div>
    </div>
  );
}

export default Login;
