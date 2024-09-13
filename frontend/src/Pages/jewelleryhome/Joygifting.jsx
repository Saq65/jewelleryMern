import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export function JoyGift() {
  return (
    <div>
      <div className="joy">
        <div className="joy-heading">
          <h4>The joy of gifting</h4>
        </div>
        <div className="gifting-slider">
          <Swiper
            navigation={false}
            modules={[Navigation, Autoplay]}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="card">
                <span className="sold">SOLD OUT</span>
                <img src="\Assests\Images\one.webp" alt="" />
              </div>
              <div>
                <p className="cardtext">Diamond Crescent Earrings</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="\Assests\Images\two.avif" alt="" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="cardtext">Jashankir Earrings</span>
                <span className="text-center text-secondary">
                  Sale price€840,00
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="\Assests\Images\six.avif" alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span className="cardtext">Beaded Crescent Necklace</span>
                <span className="text-secondary text-center">
                  Sale price€2.860,00
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <span className="sold">SOLD OUT</span>
                <img src="\Assests\Images\one.webp" alt="" />
              </div>
              <div>
                <p className="cardtext">Diamond Crescent Earrings</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="\Assests\Images\two.avif" alt="" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="cardtext">Jashankir Earrings</span>
                <span className="text-center text-secondary">
                  Sale price€840,00
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="\Assests\Images\six.avif" alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span className="cardtext">Beaded Crescent Necklace</span>
                <span className="text-secondary text-center">
                  Sale price€2.860,00
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
