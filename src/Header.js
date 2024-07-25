import "./App.css";
import Hamburguer from "./Hamburguer";
import SvgFolhaDireita from "./SvgFolhaDireita";
import SvgFolhaEsquerda from "./SvgFolhaEsquerda";
import logo from "./logo.png";
function Header() {
  return (
    <header className="header">
      <div className="todoheader">
        <div className="conteudoheader">
          <img className="logo" src={logo}></img>
          <h1 className="title">
            <SvgFolhaDireita></SvgFolhaDireita>
            <SvgFolhaEsquerda></SvgFolhaEsquerda>
            <div className="textotitulo">
              Árvores de <br></br> <span className="pindorama">PINDORAMA </span>
            </div>
          </h1>
          <Hamburguer/>
        </div>
      </div>
    </header>
  );
}

export default Header;
