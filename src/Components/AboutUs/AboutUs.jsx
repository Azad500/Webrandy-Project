import AllInformationsJS from "../../Informations";
import rightButton from "../../Images/Services/rightButton.svg";
import AboutUsStyle from "../AboutUs/AboutUs.module.scss";
import AboutUsImg from "../../Images/AboutUs/AboutUsImg.jpeg";
export default function AboutUs() {
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
        <img src={AboutUsImg} alt="" />
      </div>
      <div className={AboutUsStyle.description}>
        <div className={AboutUsStyle.head}>
          <p className={AboutUsStyle.title}>
            {AllInformationsJS.AboutUsPart.FirstText}
          </p>
          <p>
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
