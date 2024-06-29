import React, { useState } from "react";
import Ficha from "./Ficha";

function Resultado({ isOpen, result }) {
  console.log(result);



  //Abrir e Fechar Ficha//
  const [FichaOpen, setFichaOpen] =  useState("");
  
  function onClose()  {

    setFichaOpen(false)
  
  }
  

  

  if (!isOpen || !result || result.length === 0) {
    return null; // Retorna null se não houver resultados ou não estiver aberto
  }

  // Verifica se há pelo menos um resultado na array
  if (result.length > 0) {
    return (
      <div className="resultados">
       <h1>Registros encontrados:</h1>
       <h2>clique para ver mais detalhes</h2>
      <ul className="resultado">
        {result.map((item, index) => (
          <li className="lista" key={index} onClick={  ()=> {setFichaOpen(true); } }>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <Ficha isOpen={FichaOpen} onClose={onClose} result={result}>  </Ficha>
      </div>
    );

    
  } else {
    return (
      <div className="resultados">
        <h2> Nenhum registro encontrado.</h2>
      </div>
    );
  }
}

export default Resultado;
