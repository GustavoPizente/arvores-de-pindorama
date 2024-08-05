import React, { useState } from "react";
import ConteudoPesquisa from "./ConteudoPesquisa";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "./banner1.png";
import banner1grande from "./banner1grande.png"
import banner2 from "./banner2.png";
import banner2grande from "./banner2grande.png"
import banner3 from "./banner3.png";
import banner3grande from "./banner3grande.png"
import Destaques from "./Destaques";
import morrosolo from "./morrosolo.png"
import fundomorro from "./fundomorro.png"
import floresta1 from "./floresta1.png"
import floresta2 from "./floresta2.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

function Main() {
  const [conteudoOpen, setConteudoOpen] = useState(false);

  const openConteudo = () => {
    setConteudoOpen(true);
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.bemvindofundo').style.display = 'none';
  };

  const closePesquisar = () => {
    setConteudoOpen(false);
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.bemvindofundo').style.display = 'block';
  };

  return (
    <div className="principal">
      <div className="overlay"></div>
      <div className="bemvindofundo">
        <div className="bemvindo">

          <h2> Seja Bem Vindo, amante da serragem! Aqui nos encontramos para trocar experiências em projetos e artigos</h2>
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiperprincipal"
      >
        <SwiperSlide>
        <button className="abrirpesquisar"  onClick={() => openConteudo()}>
        {" "}
          <img id="imgbanner1"  src={banner1} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
        <button className="abrirpesquisar"  onClick={() => openConteudo()}>
        {" "}
          <img id="imgbanner2" src={banner2}/>

          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="abrirpesquisar"  onClick={() => openConteudo()}>
            {" "}
            <img  id="imgbanner3" src={banner3}/>
          </button>
        </SwiperSlide>
      </Swiper>

      <ConteudoPesquisa isOpen={conteudoOpen} closePesquisar={closePesquisar} />

      <Destaques></Destaques>
      

      <div className="hero">

      <img className="imghero" id="fundomorro" src={fundomorro}/>
      <img className="imghero" id="morrosolo" src={morrosolo}/>
      <img className="imghero" id="floresta1" src={floresta1}/>
      <img className="imghero" id="floresta2" src={floresta2}/>
      </div>
    </div>
  );
}

export default Main;
