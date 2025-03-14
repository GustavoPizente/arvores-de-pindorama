import React from "react";
import DestaquesFundo from "./DestaquesFundo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import destaques1 from "./destaques1.jpg";
import destaques2 from "./destaques2.jpg";
import destaques3 from "./destaques3.jpg";
import destaques4 from "./destaques4.jpg";
import destaques5 from "./destaques5.png";
import destaques6 from "./destaques6.jpg";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Destaques() {
  return (
    <div className="destaques">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true} // Ativa as setas de navegação
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Ativa a rotação automática
        modules={[Pagination, Navigation, Autoplay]}
        className="swiperdestaques"
      >
        <SwiperSlide>
          <img className="imgdestaques" src={destaques1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgdestaques" src={destaques2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgdestaques" src={destaques3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgdestaques" src={destaques4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgdestaques" src={destaques5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgdestaques" src={destaques6} />
        </SwiperSlide>
      </Swiper>

      <div className="caixatextodestaques">
        <h2 className="artigo">
          <img src={destaques1} />
          <div className="textodoartigo">
            <h2>Como Escolher o Melhor Alargador de Madeira</h2>
            <h3>Descubra os tipos de alargadores e suas vantagens.</h3>
          </div>
        </h2>
        <h2 className="artigo">
          <img src={destaques3} />
          <div className="textodoartigo">
            <h2>Passo a Passo para Construir uma Cadeira de Madeira</h2>
            <h3>Guia simples para montar sua própria cadeira.</h3>
          </div>
        </h2>
        <h2 className="artigo">
          <img src={destaques4} />
          <div className="textodoartigo">
            <h2>Brincos Artesanais de Madeira: Como Fazer e Vender</h2>
            <h3> Aprenda a criar acessórios únicos em madeira.</h3>
          </div>
        </h2>
        <h2 className="artigo">
          <img src={destaques5} />
          <div className="textodoartigo">
            <h2>Madeiras Vermelhas: Tipos e Aplicações na Marcenaria</h2>
            <h3>Conheça as principais madeiras avermelhadas e seus usos.</h3>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Destaques;
