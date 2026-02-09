"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroCarousel({ heroSection }) {
  return (
    <Swiper
      effect={"fade"}
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="w-full md:h-[80vh] lg:h-[100vh]"
    >
      {heroSection.images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.desktopSrc}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover object-bottom hidden w-screen h-[80vh] lg:h-[100vh] md:block"
            height={3840}
            width={2048}
          />
          <Image
            src={image.mobileSrc}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover object-bottom w-screen h-[80vh] lg:h-[100vh] md:hidden"
            height={2048}
            width={3840}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white">
            <div className="container mx-16 lg:mx-auto max-w-4xl space-y-4">
              <div>
                <p className="text-white text-2xl font-bold">
                  {heroSection.subheading}
                </p>
                <h2 className="py-8 text-white font-myanmar text-5xl lg:text-[4rem] font-bold">
                  {heroSection.heading}
                </h2>
              </div>
              <div className="space-y-2 text-lg lg:text-xl">
                {heroSection.introduction}
              </div>
              <br />
              {heroSection.callToAction}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
