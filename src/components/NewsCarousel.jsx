import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { newsItems } from "../data/newsMock";

const NewsCarousel = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Rahat, <span className="text-primary">təhlükəsiz</span> və sürətli bankçılıq
          </h2>

          <div className="hidden md:flex gap-2">
            <button className="news-prev rounded-lg border px-3 py-2 hover:bg-gray-100">
              ‹
            </button>
            <button className="news-next rounded-lg border px-3 py-2 hover:bg-gray-100">
              ›
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          grabCursor
          spaceBetween={16}
          navigation={{
            prevEl: ".news-prev",
            nextEl: ".news-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.15,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="bg-white rounded-xl border shadow-sm overflow-hidden h-full flex flex-col">

                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>

                  <a
                    href={item.link}
                    className="mt-auto text-sm font-medium text-primary hover:underline"
                  >
                    Daha ətraflı →
                  </a>
                </div>
              </article>
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

export default NewsCarousel;
