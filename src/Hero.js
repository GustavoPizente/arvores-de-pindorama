import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import fundomorro from "./fundomorro.png";
import floresta1 from "./floresta1.png";
import floresta2 from "./floresta2.png";

function Hero() {
  return (
    <div className="parallax">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer
          offset={0}
          speed={0.5}
          id="ceuazul"
          className="animation_layer parallax"
          factor={1}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={1.5}
          id="morro"
          className="animation_layer parallax"
          factor={1}
        >
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default Hero;
