"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import { Card } from "@/components/card";
import { HOME } from "@/data";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";

export default function HomePage() {
  const { heroSection, brandSection, aboutSection, contactSection } = HOME;

  return (
    <>
      {/* Hero Section */}
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
          className="w-full md:h-[80vh] lg:h-[100vh]"
        >
          {heroSection.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.desktopSrc}
                alt={image.alt}
                loading="eager"
                className="object-cover object-bottom hidden w-screen h-[80vh] lg:h-[100vh] md:block"
                height={1920}
                width={1080}
              />
              <Image
                src={image.mobileSrc}
                alt={image.alt}
                loading="eager"
                className="object-cover object-bottom w-screen h-[80vh] lg:h-[100vh] md:hidden"
                height={1080}
                width={1920}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white">
                <div className="container mx-16 lg:mx-auto max-w-4xl space-y-4">
                  <div>
                    <p className="text-white text-lg lg:text-4xl">
                      {heroSection.subheading}
                    </p>
                    <h2 className="py-8 text-white text-4xl lg:text-[4rem] font-bold">
                      {heroSection.heading}
                    </h2>
                  </div>
                  <div className="space-y-2 text-sm lg:text-xl">
                    {heroSection.introduction}
                  </div>
                  {heroSection.callToAction}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Brands Section */}
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Companies we've worked with
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandSection.map(({ name, logo, href, description }, index) => (
              <Card
                key={index}
                link={href}
                image={logo.src}
                title={name}
                excerpt={description}
                contain
              />
            ))}
          </div>
          {brandSection.length > 3 ? (
            <div className="text-center mt-8">
              <Button
                as={Link}
                href="/brands"
                color="primary"
                variant="solid"
                size="lg"
              >
                View All Brands
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 py-12 flex justify-center gap-4 items-center flex-col-reverse bg-white text-center md:flex-row">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
          <div className="space-y-2 max-w-xl text-sm text-justify sm:text-md">
            {aboutSection.description}
          </div>
          <Button
            as={Link}
            className="mt-6"
            href={aboutSection.link}
            color="primary"
            variant="solid"
            size="lg"
          >
            {aboutSection.cta}
          </Button>
        </div>
        <Image
          src={aboutSection.image}
          alt={aboutSection.alt}
          height={400}
          width={400}
        />
      </section>

      {/* Contact Us Section */}
      <section className="px-6 py-12 flex justify-center gap-4 items-center flex-col bg-white text-center md:flex-row">
        <Image
          src={contactSection.image}
          alt={contactSection.alt}
          height={400}
          width={400}
        />
        <div className="mx-auto flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">{contactSection.title}</h2>
          <div className="space-y-2 max-w-xl text-sm sm:text-md">
            {contactSection.description}
          </div>
          <Button
            className="mt-6"
            as={Link}
            href={contactSection.link}
            color="primary"
            variant="solid"
            size="lg"
          >
            {contactSection.cta}
          </Button>
        </div>
      </section>
    </>
  );
}
