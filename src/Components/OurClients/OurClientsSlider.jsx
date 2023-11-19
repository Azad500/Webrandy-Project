import styles from "./OurClientsSlider.module.scss";
import Logo from "../../Images/OurClients/companyLogo.png";
import AllInformationsJS from "../../Informations";

export default function OurClientsSlider() {
  const companyLogos = [
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
  ];

  return (
    <section className={styles.logoContainer}>
      <div className={styles.upSliderContainer}>
        {companyLogos.map((companyLogo, index) => (
          <div key={index} className={styles.upSlider}>
            <img src={companyLogo} alt="Logo" />
            <p>{AllInformationsJS.SameParts.Webrandy}</p>
          </div>
        ))}
      </div>
      <div className={styles.downSliderContainer}>
        {companyLogos.map((companyLogo, index) => (
          <div key={index} className={styles.downSlider}>
            <img src={companyLogo} alt="Logo" />
            <p>{AllInformationsJS.SameParts.Webrandy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
