import ScrollAnimation from "react-animate-on-scroll";
import Category from "./Category";
import Background from "./images/back-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCoverflow
} from "swiper";
import Divider from "@mui/material/Divider";

import "../swiper.css";
import "animate.css/animate.min.css";

function Section2() {
  let categories = [
    { name: "salon 1" },
    { name: "salon 2" },
    { name: "salon 3" },
    { name: "salon 4" },
    { name: "salon 1" },
    { name: "salon 2" },
    { name: "salon 3" },
    { name: "salon 4" }
  ];

  return (
    <div className="section2-container">
      <img
        src={Background}
        alt="background"
        className="background-image-section2"
      />

      <div className="section2-header">
        Top Categories . . .
        <Divider sx={{ backgroundColor: "#f1f1f1" }} variant="fullWidth" />
      </div>

      <div className="categories">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            EffectCoverflow
          ]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          effect="coverflow"
          coverflowEffect={{ slideShadows: false, depth: 50 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categories.map((cat) => (
            <SwiperSlide>{<Category />}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Section2;
