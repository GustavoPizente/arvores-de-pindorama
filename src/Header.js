import "./App.css";
import SvgFolhaDireita from "./SvgFolhaDireita";
import SvgFolhaEsquerda from "./SvgFolhaEsquerda";
function Header() {
  return (
    <header className="header"> 
    <div className="todoheader">


      <div className="conteudoheader">
        <h1 className="title">
          <SvgFolhaDireita></SvgFolhaDireita><SvgFolhaEsquerda></SvgFolhaEsquerda>
          Árvores de <br></br> <span className="pindorama">PINDORAMA </span>
        </h1>
      </div>
    </div>
    </header>
  );
}

export default Header;
