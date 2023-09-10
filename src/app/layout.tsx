import "./styles/global.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

const grotesk = localFont({
  src: [
    {
      path: "./../assets/fonts/cabinet/CabinetGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./../assets/fonts/cabinet/CabinetGrotesk-Medium.otf",
      style: "normal",
    },
    {
      path: "./../assets/fonts/cabinet/cabinet-grotesk-regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../assets/fonts/cabinet/CabinetGrotesk-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../assets/fonts/radio/radio-grotesk-regular.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../assets/fonts/cabinet/cabinet-grotesk-bold.otf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../assets/fonts/radio/PPRadioGrotesk-Ultralight.ttf",
      style: "normal",
    },
    {
      path: "./../assets/fonts/radio/PPRadioGrotesk-Regular.ttf",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "DevFest Ibadan 2023",
  description: "DevFest Ibadan is the largest Google Developer Group event happening in the City of Ibadan, where we host thousands of developers on a 1-day activity-packed event focused on technical learning, shared passion for Google products, and networking with like-minded minds. Join us for the annual developer festival in the city of Ibadan. This event promises to be bigger, better, and grander, featuring talks and sessions ranging from Technical discussions to Mental Health talks, as well as what has changed in us as techies. Most importantly, the event provides another avenue to network with people. This event will take place on Saturday, December 2, 2023. DevFest is an annual decentralized tech conference hosted by Google Developer Groups across the globe. Everything you've come to love about DevFest Ibadan is coming back this year, bigger and better 🔥 Here's what's in store for you: - Cutting-Edge Tech Talks. - Engaging Panel Sessions with industry experts. - Hands-On Workshops where you can dive deep into the latest tech trends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
