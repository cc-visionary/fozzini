import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import HeroCarousel from "@/components/hero-carousel";
import { Card } from "@/components/card";
import { HOME } from "@/data";

export default function HomePage() {
  const { heroSection, productSection, aboutSection, contactSection } = HOME;

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel heroSection={heroSection} />
      </section>

      {/* Products Section */}
      <section className="max-w-3xl px-6 lg:px-0 py-12 mx-auto text-center mt-8">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold">Our Products</h2>
            <p className="text-md sm:text-lg">
              Browse through our selection of modular cabinetry and spark ideas
              to inspire your own home design, built with style for your
              comfort.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productSection.map(({ name, thumbnail, href, excerpt }, index) => (
              <Card
                key={index}
                link={href}
                image={thumbnail.src}
                title={name}
                excerpt={excerpt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 py-16 bg-primary text-white lg:px-0">
        <div className="max-w-3xl mx-auto flex justify-center gap-4 items-center flex-col md:flex-row">
          <Image
            src={aboutSection.image}
            alt={aboutSection.alt}
            height={400}
            width={400}
          />
          <div className="mx-auto flex flex-col items-center sm:items-start justify-center">
            <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
            <div className="space-y-2 max-w-xl text-md sm:text-lg">
              {aboutSection.description}
            </div>
            <Button
              as={Link}
              className="mt-6 text-white rounded-none"
              href={aboutSection.link}
              variant="bordered"
              size="lg"
            >
              {aboutSection.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative px-6 lg:px-0">
        <div className="absolute right-0 top-0 h-full w-1/4 hidden md:block z-0 pointer-events-none">
          <div
            className="h-full w-full bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/gallery/Background Square Pattern.png')",
            }}
          />
        </div>

        <div className="py-8 max-w-3xl mx-auto flex justify-center gap-4 items-center flex-col-reverse md:flex-row">
          <div className="mx-auto flex flex-col justify-center items-center text-center sm:items-end sm:text-right">
            <h2 className="text-3xl font-bold mb-4">{contactSection.title}</h2>
            <div className="space-y-2 max-w-xl text-md sm:text-lg">
              {contactSection.description}
            </div>
            <Button
              className="mt-6 rounded-none"
              as={Link}
              href={contactSection.link}
              color="primary"
              variant="solid"
              size="lg"
            >
              {contactSection.cta}
            </Button>
          </div>
          <Image
            src={contactSection.image}
            alt={contactSection.alt}
            height={400}
            width={400}
          />
        </div>
      </section>
    </>
  );
}
