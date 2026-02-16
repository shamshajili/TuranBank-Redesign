import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/images/adb.jpg";
import slide2 from "../assets/images/odenis.png";
import slide3 from "../assets/images/qizil.jpg";
import slide4 from "../assets/images/teserufat.jpg";

const slides = [
  { id: 1, image: slide1, link: "/campaign-1" },
  { id: 2, image: slide2, link: "/campaign-2" },
  { id: 3, image: slide3, link: "/campaign-3" },
  { id: 4, image: slide4, link: "/campaign-4" },
];

const HeroCarousel = () => {
  return (
<section className="w-full bg-[#F4F7FB] py-10">
  <div className="max-w-7xl mx-auto">

    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        el: ".custom-swiper-pagination",
      }}
      className="pb-10"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <a href={slide.link} className="block">
            
            {/* FRAME */}
            <div
              className="
                relative
                h-[300px]
                md:h-[420px]
                rounded-3xl
                overflow-hidden
                shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                transition
                hover:shadow-[0_40px_90px_rgba(0,0,0,0.25)]
              "
            >
              <img
                  src={slide.image}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-contain
                    md:object-cover
                    bg-[#1b75bb]
                  "
                />
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* PAGINATION */}
    <div className="custom-swiper-pagination flex justify-center mt-6" />
  </div>
</section>


  );
};

export default HeroCarousel;
