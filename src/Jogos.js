import React from "react";

const Jogos = ({ isOpen, closeJogos }) => {
  return (
    <div className="jogos" style={{ display: isOpen ? "block" : "none" }}>
      <h1>Sabe dizer quais são esssas madeiras?</h1>
      <p>Este é um componente funcional.</p>
      <button onClick={closeJogos}>Fechar</button>
    </div>
  );
};

export default Jogos;
