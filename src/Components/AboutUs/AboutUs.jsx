import AllInformationsJS from "../../Informations";
import rightButton from "../../Images/Services/rightButton.svg";
import AboutUsStyle from "../AboutUs/AboutUs.module.scss";
import { useEffect, useRef } from "react";
export default function AboutUs() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <section className={AboutUsStyle.AboutUsSection}>
      <div className={AboutUsStyle.headerBox}>
        <h2>{AllInformationsJS.AboutUsPart.partName}</h2>
        <p>
          {AllInformationsJS.SameParts.DetailedSearch}
          <img src={rightButton} />
        </p>
      </div>
      <div className={AboutUsStyle.imgBox}>
        <video
          loop
          ref={videoEl}
          autoPlay
          src={AllInformationsJS.AboutUsPart.img}
          alt=""
        />
      </div>
      <div className={AboutUsStyle.description}>
        <div className={AboutUsStyle.head}>
          <p className={AboutUsStyle.title}>
            {AllInformationsJS.AboutUsPart.FirstText}
          </p>
          <p className={AboutUsStyle.rightButton}>
            {AllInformationsJS.SameParts.DetailedSearch}{" "}
            <img src={rightButton} />
          </p>
        </div>
        <p className={AboutUsStyle.description}>
          {AllInformationsJS.AboutUsPart.SecondText}
        </p>
      </div>
    </section>
  );
}
