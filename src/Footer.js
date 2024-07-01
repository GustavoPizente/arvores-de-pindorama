import SvgBtnWhatsapp from "./SvgBtnWhatsapp";
import SvgGitHub from "./SvgGitHub";
import SvgLogo from "./SvgLogo";

function Footer() {
  return (
    <footer className="footer">
      <div className="conteudofooter">
      
        <a className="linkcontato" href="https://www.linkedin.com/in/gustavo-pizente-nazarine-69b6812b7/">
          <h2>Contato</h2>
        </a>
        <a className="sobrelink" href="https://github.com/GustavoPizente/arvores-de-pindorama">
          <h2>Sobre</h2>
        </a>
        <a className="sobrelink" href="https://github.com/GustavoPizente/arvores-de-pindorama">
          <h2>@copy</h2>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
