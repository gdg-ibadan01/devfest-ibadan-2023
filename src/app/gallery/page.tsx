"use client";
import React, { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import Image from "next/image";
import TextCarousel from "../component/Carousel/TextCarousel";
import Footer from "../component/Footer";
import DropdownButton from "../component/DropdownButton";
import BackButton from "../component/BackButton";
import GalleryImage from "@/assets/imgs/gallery_image.png";
import Button from "../component/Button";
import GreenDevfest from "@/assets/gifs/green-devfest.gif";
import BlueDevfest from "@/assets/gifs/blue-devfest.gif";
import YellowDevfest from "@/assets/gifs/yellow-devfest.gif";
import RedDevfest from "@/assets/gifs/red-devfest.gif";
import GalleryImage2 from "@/assets/imgs/speakers/john.png";
import GalleryImage3 from "@/assets/imgs/speakers/peter.png";
import GalleryImage4 from "@/assets/imgs/speakers/speaker1.png";
import useLocalStorage from "use-local-storage";
import Devfest20211 from "@/assets/imgs/2021_image/DSC_0244.jpg"
import Devfest20212 from "@/assets/imgs/2021_image/DSC_0251.jpg"
import Devfest20213 from "@/assets/imgs/2021_image/DSC_0267.jpg"
import Devfest20214 from "@/assets/imgs/2021_image/DSC_0692.jpg"
import Devfest20215 from "@/assets/imgs/2021_image/DSC_0288.jpg"
import Devfest20216 from "@/assets/imgs/2021_image/DSC_0798.jpg"
import Devfest20217 from "@/assets/imgs/2021_image/DSC_0757.jpg"
import Devfest20218 from "@/assets/imgs/2021_image/DSC_0395.jpg"
import Devfest20219 from "@/assets/imgs/2021_image/DSC_0400.jpg"
import Devfest202110 from "@/assets/imgs/2021_image/DSC_0410.jpg"
import Devfest202111 from "@/assets/imgs/2021_image/DSC_0451.jpg"
import Devfest202112 from "@/assets/imgs/2021_image/DSC_0455.jpg"
import Devfest202113 from "@/assets/imgs/2021_image/DSC_0480.jpg"
import Devfest202114 from "@/assets/imgs/2021_image/DSC_0553.jpg"
import Devfest202115 from "@/assets/imgs/2021_image/DSC_0609.jpg"
import Devfest20221 from "@/assets/imgs/2022_image/IMG_0477.jpg"
import Devfest20222 from "@/assets/imgs/2022_image/IMG_0485.jpg"
import Devfest20223 from "@/assets/imgs/2022_image/IMG_0494.jpg"
import Devfest20224 from "@/assets/imgs/2022_image/IMG_0521.jpg"
import Devfest20225 from "@/assets/imgs/2022_image/IMG_0532.jpg"
import Devfest20226 from "@/assets/imgs/2022_image/IMG_0545.jpg"
import Devfest20227 from "@/assets/imgs/2022_image/IMG_0553.jpg"
import Devfest20228 from "@/assets/imgs/2022_image/IMG_0557.jpg"
import Devfest20229 from "@/assets/imgs/2022_image/IMG_0563.jpg"
import Devfest202210 from "@/assets/imgs/2022_image/IMG_0584.jpg"
import Devfest202211 from "@/assets/imgs/2022_image/IMG_0661.jpg"
import Devfest202212 from "@/assets/imgs/2022_image/IMG_0718.jpg"
import Devfest202213 from "@/assets/imgs/2022_image/IMG_0786.jpg"
import Devfest202214 from "@/assets/imgs/2022_image/IMG_1429.jpg"
import Devfest202215 from "@/assets/imgs/2022_image/IMG_1433.jpg"
import Link from "next/link";

const Gallery = () => {
  const devfestImages = [
    {
      image: BlueDevfest,
    },
    {
      image: RedDevfest,
    },
    {
      image: YellowDevfest,
    },
    {
      image: GreenDevfest,
    },
  ];

  const [selectedYear, setSelectedYear] = useState<string | null>("2022");
  useEffect(() => {
    let newYear = window.localStorage.getItem("year")
    setSelectedYear(newYear || "2022");
  }, []);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    window.localStorage.setItem("year", year)
  };

  const getImagesForYear = () => {
    switch (selectedYear) {
      case "2022":
        return [
          { image: Devfest20221 },
          { image: Devfest20222 },
          { image: Devfest20223 },
          { image: Devfest20224 },
          { image: Devfest20225 },
          { image: Devfest20226 },
          { image: Devfest20227 },
          { image: Devfest20228 },
          { image: Devfest20229 },
          { image: Devfest202210 },
          { image: Devfest202211 },
          { image: Devfest202212 },
          { image: Devfest202213 },
          { image: Devfest202214 },
          { image: Devfest202215 },
        ];

         case "2021":
        return [
          { image: Devfest20211 },
          { image: Devfest20212 },
          { image: Devfest20213 },
          { image: Devfest20214 },
          { image: Devfest20215 },
          { image: Devfest20216 },
          { image: Devfest20217 },
          { image: Devfest20218 },
          { image: Devfest20219 },
          { image: Devfest202110 },
          { image: Devfest202111 },
          { image: Devfest202112 },
          { image: Devfest202113 },
          { image: Devfest202114 },
          { image: Devfest202115 },
        ];
      default:
        return [];
    }
  };

  const images = getImagesForYear();

  return (
    <>
      <TextCarousel />

      <div className={Styles.galleryContainer}>
        <div className={Styles.container}>
          <BackButton />

          <div className={Styles.flexContainer}>
            <h2>Photo Booth</h2>
            <DropdownButton
              title={selectedYear || ""}
              menus={["2022", "2021",]}
              onYearSelect={handleYearSelect}
            />
          </div>
          <p>
            We don&apos;t just capture moments, we build stories transforming
            memories into timeless tales.
          </p>

          {selectedYear && (
            <div className={Styles.imageContainer}>
              <div className={Styles.flexImage}>
                {images.map((image, index) => (
                  <div key={index} className={Styles.image}>
                    <Image src={image.image} alt={""} />
                  </div>
                ))}
              </div>
            </div>
          )}

<div className={Styles.centerText}>
  {selectedYear === "2021" && (
    <Link href="https://photos.app.goo.gl/WxVDtz5Mk2M3j6HcA">
      <h2>Get all photos here</h2>
    </Link>
  )}
  {selectedYear === "2022" && (
    <Link href="https://photos.app.goo.gl/A9tJtbdvheaWRuVG7">
      <h2>Get all photos here</h2>
    </Link>
  )}
  {selectedYear === "2019" && (
    <Link href="">
      <h2>Get all photos here</h2>
    </Link>
  )}
  <div className={Styles.color}></div>
</div>
        </div>
      </div>
      <div className={Styles.dark__container}>
        <div className={Styles.reminder__container}>
          <div className={Styles.reminder__heading}>
            <h2>Don’t forget why you are here</h2>
            <p>
              DevFest values inclusivity and diversity in knowledge and
              learning, to move the Tech community forward.
            </p>
          </div>
          <div className={Styles.devfest__images__container}>
            {devfestImages.map((item, index) => (
              <div key={index} className={Styles.devfest__image}>
                <Image src={item.image} alt="devfest image" />
              </div>
            ))}
          </div>
          <div className={Styles.button__container}>
            <Button bgColor="#4285F4">
              <p>View photos from past event</p>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
