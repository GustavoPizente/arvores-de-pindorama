
import React, { useState } from "react";
import jogarclique from "./jogar.png"
import Cartao from "./Cartao";

const Jogos = ({ isOpen, closeJogos }) => {

  const [CartaoOpen, setCartaoOpen] = useState(false);

  const OpenCartao = () => {
    setCartaoOpen(true);
    document.querySelector('.bemvindofundo').style.display = 'none';
  };

  const closeCartao = () => {
    setCartaoOpen(false);
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.bemvindofundo').style.display = 'block';
  };


  return (
    <div className="jogos" style={{ display: isOpen ? "block" : "none" }}>
      <h1>Sabe dizer quais são esssas madeiras?</h1>


      <p>A cada acerto você soma pontos e participa do nosso ranking</p>
      <div className="jogo">

      <p>Clique em <b>Iniciar</b> e teste seus conhecimentos</p>

      <button onClick={OpenCartao} className="botaoabrircartao"><img  id="imgjogar" src={jogarclique}/></button>

        </div>
      <button onClick={closeJogos} className="botaofecharjogos">X</button>
      <Cartao isOpen={CartaoOpen} closeCartao={closeCartao} ></Cartao>
    </div>
  );
};

export default Jogos;
