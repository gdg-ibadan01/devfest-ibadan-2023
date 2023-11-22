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

  const [selectedYear, setSelectedYear] = useState<string | null>("");
  useEffect(() => {
    let newYear = window.localStorage.getItem("year")
    setSelectedYear(newYear);
  }, []);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    window.localStorage.setItem("year", year)
  };

  const getImagesForYear = () => {
    switch (selectedYear) {
      case "2022":
        return [
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
        ];

      case "2021":
        return [
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
          { image: GalleryImage2 },
        ];
      case "2020":
        return [
          { image: GalleryImage3 },
          { image: GalleryImage3 },
          { image: GalleryImage3 },
          { image: GalleryImage3 },
          { image: GalleryImage3 },
        ];
      case "2019":
        return [
          { image: GalleryImage4 },
          { image: GalleryImage4 },
          { image: GalleryImage4 },
          { image: GalleryImage4 },
          { image: GalleryImage4 },
        ];
      case "2018":
        return [
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
        ];
      case "2017":
        return [
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
        ];
      case "2016":
        return [
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
          { image: GalleryImage },
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
              title={selectedYear || "2022"}
              menus={["2022", "2021", "2020", "2019", "2018", "2017", "2016"]}
              onYearSelect={handleYearSelect}
            />
          </div>
          <p>
            We don't just capture moments, we build stories transforming
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
            <h2>Get all photos here</h2>
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
