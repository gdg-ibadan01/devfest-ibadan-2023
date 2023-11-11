"use client";
import React from "react";
import Styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import TextCarousel from "../component/Carousel/TextCarousel";
import Footer from "../component/Footer";
import DropdownButton from "../component/DropdownButton";
import BackButton from "../component/BackButton";
import GalleryImage from "@/assets/imgs/gallery_image.png";
import Button from "../component/Button";
import SaveDate from "@/assets/imgs/save_date.png";
import JoinUs from "@/assets/imgs/join_us.png";
import MakeFriends from "@/assets/imgs/make_friends.png";
import Devfest from "@/assets/imgs/devfest.png";

const Gallery = () => {
  return (
    <>
      <TextCarousel />

      <div className={Styles.galleryContainer}>
        <div className={Styles.container}>
          <BackButton />

          <div className={Styles.flexContainer}>
            <h2>Photo Booth</h2>
            <DropdownButton
              title={""}
              menus={["2021", "2020", "2019", "2018", "2017", "2016"]}
            />
          </div>
          <p>
            We don't just capture moments, we build stories transforming
            memories into timeless tales.
          </p>

          <div className={Styles.imageContainer}>
            <div className={Styles.flexImage}>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
            </div>
            <div className={Styles.flexImage}>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
            </div>
            <div className={Styles.flexImage}>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
            </div>
            <div className={Styles.flexImage}>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
              <div className={Styles.image}>
                <Image src={GalleryImage} alt={""} />
              </div>
            </div>
          </div>

          <div className={Styles.centerText}>
            <h2>Get all photos here</h2>
            <div className={Styles.color}></div>
          </div>

        </div>
      </div>
          <div className={Styles.darkContainer}>
            <div className={Styles.textInfo}>
            <h2>Don’t forget why you are here</h2>
            <p>
              DevFest values inclusivity and diversity in knowledge and
              learning, to move the Tech community forward.
            </p>
            </div>
            <div className={Styles.categoryImages}>
              <div className={Styles.flexCategory}>
                <div className={Styles.image}>
                  <Image src={SaveDate} alt={""} />
                </div>
                <div className={Styles.image}>
                  <Image src={JoinUs} alt={""} />
                </div>
              </div>
              <div className={Styles.flexCategory}>
                <div className={Styles.image}>
                  <Image src={MakeFriends} alt={""} />
                </div>
                <div className={Styles.image}>
                  <Image src={Devfest} alt={""} />
                </div>
              </div>
            </div>

            <div className={Styles.centerBtn}>
            <Button><p>View photos from past event</p></Button>
            </div>
          </div>

      <Footer />
    </>
  );
};

export default Gallery;
