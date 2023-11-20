import AllInformationsJS from "../../Informations";
import rightButton from "../../Images/Services/rightButton.svg";
import AboutUsStyle from "../AboutUs/AboutUs.module.scss";
import { useEffect, useRef } from "react";
export default function AboutUs({ aboutUsRef }) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    if (videoEl && videoEl.current) {
      const video = videoEl.current;
      if (video.play) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {})
            .catch((error) => {
              console.error("Error attempting to play", error);
            });
        }
      }
    }
  };

  const handleUserInteraction = () => {
    attemptPlay();
  };

  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);
    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);
  return (
    <section ref={aboutUsRef} className={AboutUsStyle.AboutUsSection}>
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
