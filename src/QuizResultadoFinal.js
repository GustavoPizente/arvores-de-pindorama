import React from "react";

const QuizResultadoFinal = ({ isOpen, atual, fechar }) => {
  if (!isOpen) return null; 
  const final = (atual + 1)
   

  return (
    <div className="quizresultadofinal">
      Você acertou {final} de 10 perguntas!

      Sabe muito!

      <button className="voltarresultadoquiz" onClick={fechar}>voltar</button>
    </div>
  );
};

export default QuizResultadoFinal;
