import { Swiper, SwiperSlide } from "swiper/react";
import Category2 from "./Category2";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import cat from "./dummy";

import "../swiper.css";

function Section3() {
  return (
    <div className="section3-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grid={{ rows: 2, fill: "column" }}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cat.map((c) => (
          <SwiperSlide>
            <Category2 />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section3;
