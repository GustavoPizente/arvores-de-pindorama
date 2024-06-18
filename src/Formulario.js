import React, { useState } from "react";
import Resultado from "./Resultado";
import SvgPesquisar from "./SvgPesquisar";

function Formulario() {
  // Defina os estados para os campos do formulário
  const [madeira, setMadeira] = useState("");
  const [cor, setCor] = useState("");
  const [localidade, setLocalidade] = useState("");

  // Coloca esse resultado na props após o submit

  const [confirmedMadeira, setConfirmedMadeira] = useState("");
  const [confirmedCor, setConfirmedCor] = useState("");
  const [confirmedLocalidade, setConfirmedlocalidade] = useState("");

  // Define o estado do componente Resultado
  const [resultadoIsOpen, setResultadoIsOpen] = useState(false);

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setResultadoIsOpen(true);
    setConfirmedMadeira(madeira);
    setConfirmedCor(cor);
    setConfirmedlocalidade(localidade);

    // Aqui você pode fazer algo com os dados do formulário

    console.log(resultadoIsOpen);
    console.log("Madeira:", madeira);
    console.log("Cor:", cor);
    console.log("Localidade:", localidade);
  };

  return (
    <div className="conteudoformulario">
      <form onSubmit={handleSubmit} className="formulariopesquisar">
        <div className="entradaformulario">
          <label className="itensformulariopesquisar">
            Madeira:
            <input
              type="text"
              value={madeira}
              onChange={(e) => setMadeira(e.target.value)}
            />
          </label>
        </div>
        <div className="entradaformulario">
          <label className="itensformulariopesquisar">
            <p>Cor:</p>
            <input
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
          </label>
        </div>
        <div className="entradaformulario">
          <label className="itensformulariopesquisar">
            Localidade:
            <input
              type="text"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="submitpesquisar">
          <SvgPesquisar></SvgPesquisar>
        </button>
      </form>
      <Resultado
        isOpen={resultadoIsOpen}
        madeira={confirmedMadeira}
        cor={confirmedCor}
        localidade={confirmedLocalidade}
      ></Resultado>
    </div>
  );
}

export default Formulario;
