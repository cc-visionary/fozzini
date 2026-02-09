// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/globals.css";
import clsx from "clsx";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

import { gothicA1, myanmar } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Fozzini Lifestyle Inc. | Premium Modular Cabinetry for Filipino Homes",
  description:
    "Fozzini Lifestyle Inc. curates the finest international modular cabinetry brands for Filipino homes. Explore premium kitchen, living room, bedroom, and bathroom designs built with style and function.",
  openGraph: {
    title:
      "Fozzini Lifestyle Inc. | Premium Modular Cabinetry for Filipino Homes",
    type: "website",
    url: "https://fozzini.com",
    siteName: "Fozzini Lifestyle Inc.",
    description:
      "Fozzini Lifestyle Inc. curates the finest international modular cabinetry brands for Filipino homes. Explore premium kitchen, living room, bedroom, and bathroom designs built with style and function.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`,
        width: 1200,
        height: 630,
        alt: "Fozzini Lifestyle Inc. Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fozzini Lifestyle Inc. | Premium Modular Cabinetry for Filipino Homes",
    description:
      "Fozzini Lifestyle Inc. curates the finest international modular cabinetry brands for Filipino homes. Explore premium kitchen, living room, bedroom, and bathroom designs built with style and function.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/About Us/AboutCover.jpg`,
        alt: "Fozzini Lifestyle Inc. Showroom",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-gothic antialiased",
          gothicA1.variable,
          myanmar.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>
              {children}
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
