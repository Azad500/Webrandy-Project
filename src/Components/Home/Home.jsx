import React, { useEffect, useState } from "react";
import HomeStyle from "../Home/Home.module.scss";
import AllInformationsJS from "../../Informations";
import HomeImg from "../../Images/Home/HomePageImg.jpg";
import TabletHomePageImg from "../../Images/Home/TableHomePageImg.png";
import LaptopHomePageImg from "../../Images/Home/LaptopHomePageImg.png";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImg, setCurrentImg] = useState(HomeImg);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 992) {
      setCurrentImg(LaptopHomePageImg);
    } else if (windowWidth >= 728) {
      setCurrentImg(TabletHomePageImg);
    } else {
      setCurrentImg(HomeImg);
    }
  }, [windowWidth]);

  return (
    <div
      className={`${HomeStyle.home} ${
        windowWidth > 768 ? HomeStyle.imgLoaded : ""
      }`}
    >
      <img src={currentImg} alt="" />
      <div className={HomeStyle.homeDescription}>
        <p>{AllInformationsJS.HomePart.HomeDesc}</p>
        <a target="_blank" href="https://wa.me/994517775770">
          {AllInformationsJS.HomePart.ButtonDesc}
        </a>
      </div>
    </div>
  );
}
