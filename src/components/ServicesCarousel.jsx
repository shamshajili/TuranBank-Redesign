import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { services } from "../data/servicesMock";

const ServicesCarousel = () => {
  return (
    <section className="w-full py-12 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            Xidmətlər
          </h2>

          <div className="hidden md:flex gap-2">
            <button className="services-prev w-9 h-9 border rounded-lg hover:bg-gray-100">
              ‹
            </button>
            <button className="services-next w-9 h-9 border rounded-lg hover:bg-gray-100">
              ›
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          grabCursor
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={item.link}
                className="
                  group
                  bg-white
                  rounded-xl
                  p-6
                  h-[160px]
                  flex
                  flex-col
                  items-center
                  justify-between
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 md:w-20 md:h-20 object-contain"
                 />

                <h3 className="text-base font-medium text-gray-900 group-hover:text-primary transition">
                  {item.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:hidden flex justify-center mt-4 text-sm text-gray-400">
          Barmağınızla sürüşdürün →
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
