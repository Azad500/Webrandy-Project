import AllInformationsJS from "../../Informations";
import rightButton from "../../Images/Services/rightButton.svg";
import AboutUsStyle from "../AboutUs/AboutUs.module.scss";
import VideoInAboutUs from "../AboutUs/VideoInAboutUs";
export default function AboutUs({ aboutUsRef }) {
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
        <VideoInAboutUs />
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
