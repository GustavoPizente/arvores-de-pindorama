import React, { useState } from "react";
import Resultado from "./Resultado";
import SvgPesquisar from "./SvgPesquisar";
import axios from "axios";

function Formulario() {


  const estadoinicial = "";
  // Defina os estados para os campos do formulário
  const [nomeMadeira, setNomeMadeira] = useState("");
  const [cor, setCor] = useState("");
  const [localidade, setLocalidade] = useState("");

  // Define o estado do componente Resultado
  const [resultadoIsOpen, setResultadoIsOpen] = useState(false);

  // Define o Valor de Resultado//

  const [valorResultado, setValorResultado] =  useState(false)

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nomeMadeira === estadoinicial ||
      cor === estadoinicial ||
      localidade === estadoinicial
    ) {
      alert("Você precisa preencher todos os campos");

      return;}

      else {
    setResultadoIsOpen(true);
    const madeira = {
      name: nomeMadeira,
      cor: cor,
      localidade : localidade,
    };
    console.log(madeira);

    

    try {
      const response = await axios.get(
        "http://localhost:5000/madeiras",
        {
          params: {
            name: nomeMadeira, 
            cor: cor,  
            localidade: localidade 
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Madeira:", nomeMadeira);
      console.log("Cor:", cor);
      console.log("Localidade:", localidade);
      
      
      console.log(response.data);
      setValorResultado(response.data)
      
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  }
    // Aqui você pode fazer algo com os dados do formulário
  };

  

  return (
    <div className="conteudoformulario">
      <form onSubmit={handleSubmit} className="formulariopesquisar">
        <div className="entradaformulario">
          <label>
            <div  className="itensformulariopesquisar">
            Nome:
            <input
            className="input"
              name="madeira"
              type="text"
              value={nomeMadeira}
              onChange={(e) => setNomeMadeira(e.target.value)}
              
            />
            </div>
          </label>
        </div>
        <div className="entradaformulario">
          <label >
            <div className="itensformulariopesquisar">
            <p>Cor:</p>
            <input
            className="input"
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
            </div>
          </label>
        </div>
        <div className="entradaformulario">
          <label >
            <div className="itensformulariopesquisar">
            Localidade:
            <input
            className="input"
              type="text"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
            />
            </div>
          </label>
        </div>
        <button type="submit" className="submitpesquisar">
          <SvgPesquisar></SvgPesquisar>
        </button>
      </form>
      <Resultado isOpen={resultadoIsOpen}  nomeMadeira={nomeMadeira} cor={cor} localidade={localidade} result={valorResultado}></Resultado>
    </div>

    
  );
}

export default Formulario;
