import Image from "next/image";

import { title } from "@/components/primitives";
import { ABOUT } from "@/data";

export async function generateMetadata() {
  return {
    title: "About Us | Fozzini Lifestyle Concepts",
    description:
      "Discover Fozzini Lifestyle Concepts—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
    openGraph: {
      title: "About Us | Fozzini Lifestyle Concepts",
      description:
        "Discover Fozzini Lifestyle Concepts—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
      url: "https://fozzini.com/about",
      siteName: "Fozzini Lifestyle Concepts",
      images: [
        {
          url: "/gallery/About Us/AboutCover.jpg",
          width: 1200,
          height: 630,
          alt: "Fozzini Lifestyle Concepts About Us",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | Fozzini Lifestyle Concepts",
      description:
        "Discover Fozzini Lifestyle Concepts—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
      images: ["/gallery/About Us/AboutCover.jpg"],
    },
    alternates: {
      canonical: "https://fozzini.com/about",
    },
  };
}

export default function AboutPage() {
  const {
    coverImage,
    aboutSection,
    ourMissionSection,
    ourStorySection,
    ourPhilosophySection,
    ourLocationSection,
  } = ABOUT;

  return (
    <>
      <div className="relative h-[50vh]">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white">
          <Image
            width={400}
            height={150}
            src="/gallery/Fozzini Logo.png"
            alt="Fozzini Lifestyle Concepts Logo Mark"
            className="object-contain transform transition hover:scale-105"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="relative h-[40vh] px-6 py-12 flex justify-center gap-4 items-center lg:px-0">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden xl:block z-0 pointer-events-none">
          <div
            className="h-full w-full bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/gallery/Background Square Pattern.png')",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto xl:pr-64 flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
          <div className="space-y-2 max-w-xl text-md sm:text-lg">
            {aboutSection.description}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 py-16 bg-primary text-white lg:px-0">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 items-center flex-col md:flex-row">
          <Image
            src={ourMissionSection.image.src}
            alt={ourMissionSection.image.alt}
            height={600}
            width={600}
          />
          <div className="mx-auto flex flex-col items-center sm:items-start justify-center">
            <h2 className="text-3xl font-bold mb-4">
              {ourMissionSection.title}
            </h2>
            <div className="space-y-2 max-w-xl text-md sm:text-lg">
              {ourMissionSection.description}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            {ourStorySection.title}
          </h2>

          <div className="flex flex-col-reverse xl:flex-row xl:items-start xl:gap-8">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-justify text-md sm:text-lg">
              {ourStorySection.description}
            </div>

            {/* Image with Caption */}
            <div className="mb-8 xl:mt-0 xl:w-1/3 shrink-0">
              <Image
                src={ourStorySection.image.src}
                alt={ourStorySection.image.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="italic text-xs text-center mt-2">
                {ourStorySection.image.alt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="px-6 py-16 bg-primary text-white lg:px-0">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 items-center flex-col md:flex-row">
          <div className="mx-auto flex flex-col items-center sm:items-start justify-center">
            <h2 className="text-3xl font-bold mb-4">
              {ourPhilosophySection.title}
            </h2>
            <div className="space-y-2 max-w-xl text-md sm:text-lg">
              {ourPhilosophySection.description}
            </div>
          </div>
          <Image
            src={ourPhilosophySection.image.src}
            alt={ourPhilosophySection.image.alt}
            height={600}
            width={600}
          />
        </div>
      </section>

      {/* Our Location Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            {ourLocationSection.title}
          </h2>
          <iframe
            title="Google Map of Showroom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3359262947624!2d120.9597180758399!3d14.693585385803884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b474fc539e29%3A0x9299ac596b70063c!2sFozzini%20Lifestyle%20Concepts%2C%20Inc.!5e0!3m2!1sen!2sph!4v1744516658667!5m2!1sen!2sph"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
          <p>{ourLocationSection.description}</p>
        </div>
      </section>
    </>
  );
}
