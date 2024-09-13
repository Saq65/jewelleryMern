import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export function JewellerysSlider() {
  return (
    <div>
      <div className="swiper">
        <Swiper
          pagination={true}
          navigation={false}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src="\Assests\Images\website_banner-03_1.webp"
                className="img-fluid h-100 w-100"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="\Assests\Images\8180054.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="\Assests\Images\website_banner-03_1.webp"
                className="img-fluid"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="\Assests\Images\8180054.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
