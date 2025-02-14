import React, { useState } from "react";
import { Perguntas } from "./Perguntas";

const Cartao = ({ isOpen, closeCartao }) => {
  const perguntas = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  function proximaPergunta() {
    const nextQuestion = perguntaAtual + 1;

    if (nextQuestion < perguntas.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      alert("Você chegou ao fim do quiz");
      setPerguntaAtual(0);
      closeCartao();
    }
  }

  function fecharEResetar()
  {
      closeCartao();
      setPerguntaAtual(0);



  }
  return (
    <div className="cartao" style={{ display: isOpen ? "block" : "none" }}>
      <div className="pergunta">
        <img src={perguntas[perguntaAtual].imagempergunta} alt="Pergunta" />
      </div>

      <div className="opcoesquiz">
        {perguntas[perguntaAtual].opcoesrespostas.map((opcoesrespostas) => (
          <div className="opcoescartao">
            <button
              onClick={() => {
                if (opcoesrespostas.correta) {
                  proximaPergunta();
                } else {

                  closeCartao();
                  alert("Resposta incorreta! Tente novamente.");
                  setPerguntaAtual(0);
                }
              }}
            >
              {opcoesrespostas.resposta}
            </button>
          </div>
        ))}
      </div>

      <button onClick={fecharEResetar} className="botaofecharcartao">
        X
      </button>
    </div>
  );
};

export default Cartao;
