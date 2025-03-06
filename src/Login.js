import React, { useState } from "react";

function Login({ isOpen, closeLogin}) {
 

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit =(event) => {
    
    event.preventDefault();
    alert(`Usuário: ${userName}\nSenha: ${userPassword}`);


  };
  if (!isOpen) return null;




  return (
    <div className="telalogin">
      <div className="closelogin"><button onClick={closeLogin}>X</button></div>

      <form onSubmit={handleSubmit} className="entradas">

        <input type="email" placeholder="E-mail" className="input-login" value={userName} onChange={(e) => setUserName(e.target.value)} />


        <input type="password" placeholder="Senha" className="input-login" value ={userPassword}  onChange={(e) => setUserPassword(e.target.value)}/>


        <button className="botao-login">Entrar</button>
        <h2 className="textologin"> Ainda não tem uma conta? </h2>
        <a className="logincadastrese" href="#"> Cadastre-se aqui </a>
      </form>
    </div>
  );
}

export default Login;
