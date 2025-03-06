import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import fundomorro from "./fundomorro.png";
import floresta1 from "./floresta1.png";
import floresta2 from "./floresta2.png";
import ceuazul from "./ceuazul.jpg";
import morrosolo from "./morrosolo.png"
import heroh1 from "./Heroh1.png"
import heroh2 from "./heroh2.png"
import banqueta from "./banqueta.png"
import cadastrese from "./cadastre-se.png"

function Hero() {
  return (
    <div className="parallax">
      <img src={heroh1} className="heroh1"></img>
      <img src={heroh2} className="heroh2"></img>
      <img src={banqueta} className="banqueta"></img>
      <a href="#" className="cadastrese"><img src={cadastrese} ></img></a>
      <img src={ceuazul} className="ceuazul"></img>
      <img src={morrosolo} className="morrosolo"></img>
      <img src={floresta1} className="floresta1"></img>
      <img src={floresta2} className="floresta2"></img>
    </div>
  );
}

export default Hero;
