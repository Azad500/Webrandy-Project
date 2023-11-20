import styles from "./OurClientsSlider.module.scss";
import AdressArch from "../../Images/OurClients/AdressArch.svg";
import OkeanEmlak from "../../Images/OurClients/okeanEmlak.png";
import WallIt from "../../Images/OurClients/wallIt.svg";

import AllInformationsJS from "../../Informations";

export default function OurClientsSlider() {
  return (
    <section className={styles.logoContainer}>
      <div className={styles.upSliderContainer}>
        {AllInformationsJS.OurClients.CompanyData?.map((company, index) => (
          <div key={index} className={styles.upSlider}>
            <img src={company.logoImg} alt="Logo" />
            <p>{company.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.downSliderContainer}>
        {AllInformationsJS.OurClients.CompanyData?.map((company, index) => (
          <div key={index} className={styles.downSlider}>
            <img src={company.logoImg} alt="Logo" />
            <p>{company.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
