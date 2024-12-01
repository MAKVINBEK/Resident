import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Data from "../../Data"
import css from "./Reklama.module.css"

// Подключите стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reklama = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Подключаем модули
      spaceBetween={3}
      slidesPerView={3}
      navigation
      pagination={{ clickable: false }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
        <div className={css.swiper}>
            {Data.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={css.slide}>
            <img src={slide.image} alt={slide.title} />
          </div>
        </SwiperSlide>
      ))}
        </div>
        
    </Swiper>
  );
};

export default Reklama;