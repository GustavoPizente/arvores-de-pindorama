import SvgBtnWhatsapp from "./SvgBtnWhatsapp";
import SvgGitHub from "./SvgGitHub";
import SvgLogo from "./SvgLogo";

function Footer() {
  return (
    <footer className="footer">
      <div className="conteudofooter">
      <a className="linklogo"  href="https://www.linkedin.com/in/gustavo-pizente-nazarine-69b6812b7/">
          <div className="logo"><SvgLogo></SvgLogo></div>
        </a>
        <a className="linkcontato" href="https://wa.me/5514997627237?text=Fala%20a%C3%AD%2C%20Pindoramo!">
          <div className="Contato"><SvgBtnWhatsapp></SvgBtnWhatsapp></div>
        </a>
        <a className="sobrelink" href="https://github.com/GustavoPizente/arvores-de-pindorama">
          <div className="Sobre"><SvgGitHub></SvgGitHub></div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
