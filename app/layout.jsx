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
  title: "Fozzini Lifestyle Inc.",
  description:
    "Discover how Fozzini Lifestyle Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
  openGraph: {
    title: "Fozzini Lifestyle Inc.",
    type: "website",
    description:
      "Discover how Fozzini Lifestyle Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/Home/Hero_HomePage1_Desktop.webp`,
        alt: "Fozzini Lifestyle Inc. Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fozzini Lifestyle Inc.",
    description:
      "Discover how Fozzini Lifestyle Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
    images: [
      {
        url: `${process.env.DOMAIN_URL}/gallery/Home/Hero_HomePage1_Desktop.webp`,
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
