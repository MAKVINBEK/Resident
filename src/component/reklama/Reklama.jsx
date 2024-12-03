import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Data from "../../Data"
import css from "./Reklama.module.css"

// стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reklama = () => {
    return (
        <div className="container">
            <div className={css.logoText}>
                <h1>Предложения от компании</h1>
            </div>
            
            <div className={css.swiper}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // модули
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: false }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <div >
                        {Data.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className={css.slide}>
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Reklama;