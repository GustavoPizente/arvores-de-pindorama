import React from "react";
import DestaquesFundo from "./DestaquesFundo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import destaques1 from "./destaques1.jpg"
import destaques2 from "./destaques2.jpg"
import destaques3 from "./destaques3.jpg"
import destaques4 from "./destaques4.jpg"
import destaques5 from "./destaques5.png"
import destaques6 from "./destaques6.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Destaques() {
  return (
    <div className="destaques">
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
        className="swiperdestaques"
      >
        <SwiperSlide><img className="imgdestaques" src={destaques1}></img></SwiperSlide>
        <SwiperSlide><img className="imgdestaques" src={destaques2}></img></SwiperSlide>
        <SwiperSlide><img className="imgdestaques" src={destaques3}></img></SwiperSlide>
        <SwiperSlide><img className="imgdestaques" src={destaques4}></img></SwiperSlide>
        <SwiperSlide><img className="imgdestaques" src={destaques5}></img></SwiperSlide>
        <SwiperSlide><img className="imgdestaques" src={destaques6}></img></SwiperSlide>
      </Swiper>


        <div className="caixatextodestaques">

            <h2 className="artigo"><img src={destaques1}/><div className="textodoartigo"><h2>Artigo 1</h2><h3>texto to artigo</h3></div></h2>
            <h2 className="artigo"><img src={destaques2}/><div className="textodoartigo"><h2>Artigo 1</h2><h3>texto to artigo</h3></div></h2>
            <h2 className="artigo"><img src={destaques3}/><div className="textodoartigo"><h2>Artigo 1</h2><h3>texto to artigo</h3></div></h2>
            <h2 className="artigo"><img src={destaques4}/><div className="textodoartigo"><h2>Artigo 1</h2><h3>texto to artigo</h3></div></h2>
            <h2 className="artigo"><img src={destaques5}/><div className="textodoartigo"><h2>Artigo 1</h2><h3>texto to artigo</h3></div></h2>
        </div>
    </div>
  );
}

export default Destaques;
