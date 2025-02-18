import React, { useState } from "react";
import ConteudoPesquisa from "./ConteudoPesquisa";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "./banner1.png";
import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import Destaques from "./Destaques";
import Jogos from "./Jogos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Login from "./Login";
import Hero from "./Hero";

function Main() {
  const [conteudoOpen, setConteudoOpen] = useState(false);
  const [jogosOpen, setJogosOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const openConteudo = () => {
    setConteudoOpen(true);
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".bemvindofundo").style.display = "none";
  };

  const closePesquisar = () => {
    setConteudoOpen(false);
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".bemvindofundo").style.display = "block";
  };

  const openJogos = () => {
    setJogosOpen(true);
    document.querySelector(".bemvindofundo").style.display = "none";
  };

  const closeJogos = () => {
    setJogosOpen(false);
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".bemvindofundo").style.display = "block";
  };

  const openLogin = () => {
    setLoginOpen(true);
    document.querySelector(".bemvindofundo").style.display = "none";
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  return (
    <div className="principal">
      <div className="overlay"></div>
      <div className="bemvindofundo">
        <div className="bemvindo">
          <h2>
            {" "}
            Seja Bem Vindo, amante da serragem! Aqui nos encontramos para trocar
            experiências em projetos e artigos
          </h2>
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
          <button className="abrirpesquisar" onClick={() => openLogin()}>
            {" "}
            <img id="imgbanner1" src={banner1} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="abrirpesquisar" onClick={() => openJogos()}>
            {" "}
            <img id="imgbanner2" src={banner2} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="abrirpesquisar" onClick={() => openConteudo()}>
            {" "}
            <img id="imgbanner3" src={banner3} />
          </button>
        </SwiperSlide>
      </Swiper>

      <ConteudoPesquisa isOpen={conteudoOpen} closePesquisar={closePesquisar} />
      <Jogos isOpen={jogosOpen} closeJogos={closeJogos} />
      <Login isOpen={loginOpen} closeLogin={closeLogin}></Login>

      <Destaques></Destaques>

      <Hero></Hero>
    </div>
  );
}

export default Main;
