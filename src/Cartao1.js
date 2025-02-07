import React from "react";
import jogarclique from "./jogar.png"

const Cartao1 = ({ isOpen, closeCartao1 }) => {



  return (
    <div className="cartao1" style={{ display: isOpen ? "block" : "none" }}>
      

      <img  id="cartao1img" src={jogarclique}/>

        <div className="opcoesquiz">
      <button  className="opcoescartao">Sucupira</button>
      <button  className="opcoescartao">Sucupira</button>
      <button  className="opcoescartao">Sucupira</button>
      <button  className="opcoescartao">Sucupira</button>
      </div>

      <button onClick={closeCartao1} className="botaofecharcartao">X</button>

    </div>
  );



}

export default Cartao1;
