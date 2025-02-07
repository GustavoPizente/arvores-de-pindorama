
import React, { useState } from "react";
import jogarclique from "./jogar.png"
import Cartao1 from "./Cartao1";

const Jogos = ({ isOpen, closeJogos }) => {

  const [Cartao1Open, setCartao1Open] = useState(false);

  const OpenCartao1 = () => {
    setCartao1Open(true);
    document.querySelector('.bemvindofundo').style.display = 'none';
  };

  const closeCartao1 = () => {
    setCartao1Open(false);
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.bemvindofundo').style.display = 'block';
  };


  return (
    <div className="jogos" style={{ display: isOpen ? "block" : "none" }}>
      <h1>Sabe dizer quais são esssas madeiras?</h1>


      <p>A cada acerto você soma pontos e participa do nosso ranking</p>
      <div className="jogo">

      <p>Clique em <b>Iniciar</b> e teste seus conhecimentos</p>

      <button onClick={OpenCartao1} className="botaoabrircartao"><img  id="imgjogar" src={jogarclique}/></button>

        </div>
      <button onClick={closeJogos} className="botaofecharjogos">X</button>
      <Cartao1 isOpen={Cartao1Open} closeCartao1={closeCartao1} ></Cartao1>
    </div>
  );
};

export default Jogos;
