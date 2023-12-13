import styles from "../AboutUs/VideoInAboutUs.module.scss";
import AllInformationsJS from "../../Informations";

export default function VideoInAboutUs() {
  return (
    <div className={styles.container}>
      <video
        autoPlay={true}
        muted
        playsInline
        loop
        src={AllInformationsJS.AboutUsPart.VideosInAboutUsX}
      ></video>
    </div>
  );
}
