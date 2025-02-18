import React, { useState } from "react";
import { Perguntas } from "./Perguntas";
import QuizResultado from "./QuizResultado";
import QuizResultadoFinal from "./QuizResultadoFinal"


const Cartao = ({ isOpen, closeCartao }) => {
  const perguntas = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [quizResultadoOpen, setQuizResultadoOpen] = useState(false);
  const [quizResultadoFinalOpen, setQuizResultadoFinalOpen] = useState(false);
    


  

  function proximaPergunta() {
    const nextQuestion = perguntaAtual + 1;

    if (nextQuestion < perguntas.length) {
      setPerguntaAtual(nextQuestion);
    } else {


      
      
      abrirResultadoFinal();
      
      
    }
  }

  function abrirResultado () {
    setQuizResultadoOpen(true);}

  
  function abrirResultadoFinal (){

    setQuizResultadoFinalOpen(true);
  }



  function fecharEResetar()
  {
      closeCartao();
      setPerguntaAtual(0);
      setQuizResultadoOpen(false);
      setQuizResultadoFinalOpen(false);


  }
  return (
    <div className="cartao" style={{ display: isOpen ? "block" : "none" }}>

      <div className="contagem">{perguntaAtual +1}/10</div>
      <div className="pergunta">
        <img src={perguntas[perguntaAtual].imagempergunta} alt="Pergunta" />
      </div>

      <div className="qualamadeira">Qual a madeira da foto?</div>

      <div className="opcoesquiz">
        {perguntas[perguntaAtual].opcoesrespostas.map((opcoesrespostas) => (
          <div className="opcoescartao">
            <button
              onClick={() => {
                if (opcoesrespostas.correta) {
                  proximaPergunta();
                } else {

                  
                  abrirResultado();
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

        <QuizResultado isOpen={quizResultadoOpen} atual={perguntaAtual} fechar={fecharEResetar}></QuizResultado>
        <QuizResultadoFinal isOpen={quizResultadoFinalOpen} atual={perguntaAtual} fechar={fecharEResetar}></QuizResultadoFinal>

    </div>
  );
};

export default Cartao;
