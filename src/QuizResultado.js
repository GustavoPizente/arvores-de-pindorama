import React from "react";

const QuizResultado = ({ isOpen, atual, fechar }) => {
  if (!isOpen) return null; 

  return (
    <div className="quizresultado">
      Você acertou {atual} de 10 perguntas!

      <button className="voltarresultadoquiz" onClick={fechar}>voltar</button>
    </div>
  );
};

export default QuizResultado;
