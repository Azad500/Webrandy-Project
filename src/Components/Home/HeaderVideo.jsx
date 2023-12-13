import styles from "./HeaderVideo.module.scss";
import AllInformationsJS from "../../Informations";

export default function HeaderVideo() {
  return (
    <section className={styles.container}>
      <div className={styles.onlyVideo}>
        <video
          autoPlay={true}
          muted
          playsInline
          loop
          src={AllInformationsJS.HomePart.HeaderVideos}
        ></video>
      </div>
      <div className={styles.texts}>
        <p>{AllInformationsJS.HomePart.HomeDesc}</p>
        <div className={styles.otherTexts}>
          <p>{AllInformationsJS.HomePart.HomeDesc}</p>
          <p>{AllInformationsJS.HomePart.HomeDesc}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <a target="_blank" href="https://wa.me/994517775770">
              {AllInformationsJS.HomePart.ButtonDesc}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
