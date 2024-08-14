import styles from "./Photo.module.scss";
import img1 from "../../assets/img/Photo_img/9.jpg";
import img2 from "../../assets/img/Photo_img/10.jpg";
import img3 from "../../assets/img/Photo_img/11.jpg";
import img4 from "../../assets/img/Photo_img/12.jpg";
import img5 from "../../assets/img/Photo_img/13.jpg";
import img6 from "../../assets/img/Photo_img/14.jpg";
import img7 from "../../assets/img/Photo_img/15.jpg";
import img8 from "../../assets/img/Photo_img/16.jpg";
import img9 from "../../assets/img/Photo_img/17.jpg";
import img10 from "../../assets/img/Photo_img/18.jpg";
import img11 from "../../assets/img/Photo_img/19.jpg";
import img12 from "../../assets/img/Photo_img/20.jpg";

// import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className="title">Photograghs</div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="img8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="img1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
