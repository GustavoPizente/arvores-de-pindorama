function Resultado({ isOpen, madeira, cor, localidade,nomeMadeira }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="resultados">

        <h2> Aqui estão os registros encontrados:</h2>
      <div className="resultado">
        <p>{nomeMadeira}</p>
        <p>{cor}</p>
        <p>{localidade}</p>
      </div>
      <div className="resultado">
        <p>{nomeMadeira}</p>
        <p>{cor}</p>
        <p>{localidade}</p>
      </div>
      <div className="resultado">
        <p>{nomeMadeira}</p>
        <p>{cor}</p>
        <p>{localidade}</p>
      </div>
    </div>
  );
}

export default Resultado;
