import VideosInAboutUsX from "../../Images/AboutUs/AboutUsVideo.mp4";
import styles from "../AboutUs/VideoInAboutUs.module.scss";

export default function VideoInAboutUs() {
  return (
    <div className={styles.container}>
      <video autoPlay={true} muted src={VideosInAboutUsX}></video>
    </div>
  );
}
