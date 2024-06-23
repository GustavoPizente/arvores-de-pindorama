import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import SvgBtnSalvar from "./SvgBtnSalvar";

function FormularioCadastro() {
  // Defina os estados para os campos do formulário

  const estadoinicial = " ";

  const [nomeMadeira, setNomeMadeira] = useState(" ");
  const [cor, setCor] = useState(" ");
  const [localidade, setLocalidade] = useState(" ");

  // Define o estado do componente Agradecimento
  const [AgradecimentoIsOpen, setAgradecimentoIsOpen] = useState(false);

  const closeAgradecimento = () => {
    setAgradecimentoIsOpen(false);
  };

  // Função para lidar com a submissão do formulário

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nomeMadeira === estadoinicial ||
      cor === estadoinicial ||
      localidade === estadoinicial
    ) {
      alert("Você precisa preencher todos os campos");

      return;
    } else {
      setAgradecimentoIsOpen(true);

      setNomeMadeira(" ");
      setCor(" ");
      setLocalidade(" ");
      const madeira = {
        name: nomeMadeira,
        cor: cor,
        localidade: localidade,
      };
      console.log(madeira);

      const baseUrl = "http://localhost:5000/madeiras"

      try {
        const response = await axios.post(
          baseUrl,
          { madeira },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Madeira:", nomeMadeira);
        console.log("Cor:", cor);
        console.log("Localidade:", localidade);

        console.log(response.data);
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    }
  };

  return (
    <div className="conteudoformulario">
      <form onSubmit={handleSubmit} className="formulariopesquisar">
        <div className="entradaformulario">
          <label className="itensformulariopesquisar">
            Nome:
            <input
              name="madeira"
              type="text"
              value={nomeMadeira}
              onChange={(e) => setNomeMadeira(e.target.value)}
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
          <SvgBtnSalvar></SvgBtnSalvar>
        </button>
      </form>

      <Modal
        className="modalagradecimento"
        isOpen={AgradecimentoIsOpen}
        onRequestClose={closeAgradecimento}
        contentLabel="ModalAgradecimento"
      >
        <div className="conteudomodalagradecimento">
          <h1>
            Obrigado por compartilhar seu conhecimento com outros marceneiros!
          </h1>

          <button
            className="botaofecharagradecimento"
            onClick={() => {
              closeAgradecimento();
            }}
          >
            Voltar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default FormularioCadastro;
