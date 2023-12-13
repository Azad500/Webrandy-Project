import AllInformationsJS from "../../Informations";
import styles from "../AboutUs/AboutUs.module.scss";
import VideoInAboutUs from "../AboutUs/VideoInAboutUs";
export default function AboutUs({ aboutUsRef }) {
  return (
    <section ref={aboutUsRef} className={styles.AboutUsSection}>
      <div className={styles.headerBox}>
        <h2>{AllInformationsJS.AboutUsPart.partName}</h2>
        <p>
          {AllInformationsJS.SameParts.DetailedSearch}
          <img src={AllInformationsJS.AboutUsPart.rightButton} />
        </p>
      </div>
      <div className={styles.imgBox}>
        <VideoInAboutUs />
      </div>
      <div className={styles.description}>
        <div className={styles.head}>
          <p className={styles.title}>
            {AllInformationsJS.AboutUsPart.FirstText}
          </p>
          <p className={styles.rightButton}>
            {AllInformationsJS.SameParts.DetailedSearch}{" "}
            <img src={AllInformationsJS.AboutUsPart.rightButton} />
          </p>
        </div>
        <p className={styles.description}>
          {AllInformationsJS.AboutUsPart.SecondText}
        </p>
      </div>
    </section>
  );
}
