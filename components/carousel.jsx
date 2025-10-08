"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";

export default function Carousel({
  images,
  sizeClass,
  height = 1920,
  width = 1080,
}) {
  return (
    <section className="relative">
      <Swiper
        effect={"fade"}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className={sizeClass}
      >
        {images.map(({ src, caption }, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={caption}
              loading="eager"
              className={clsx("object-cover object-bottom", sizeClass)}
              height={height}
              width={width}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
