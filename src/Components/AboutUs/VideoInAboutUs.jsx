import VideosInAboutUs from "../../Images/AboutUs/AboutUsVideo.mp4";
import styles from "../AboutUs/VideoInAboutUs.module.scss";

export default function VideoInAboutUs() {
  return (
    <div className={styles.container}>
      <video autoPlay={true} muted src={VideosInAboutUs}></video>
    </div>
  );
}
