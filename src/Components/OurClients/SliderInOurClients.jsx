import styles from "./SliderInOurClients.module.scss";
import okeanEmlak from "../../Images/OurClients/okeanEmlak.png";
import adressArch from "../../Images/OurClients/adressArch.png";
import wallit from "../../Images/OurClients/wallit.png";

const clientsData = [
  { logo: okeanEmlak, name: "Okean Əmlak" },
  { logo: adressArch, name: "AdressArch" },
  { logo: wallit, name: "Wall - IT" },
];
const repeatedClientsData = Array.from(
  { length: 20 },
  (_, index) => clientsData[index % clientsData.length]
);

export default function SliderInOurClients() {
  return (
    <section className={styles.container}>
      <div className={styles.upSideContainer}>
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className={styles.upSliderContainer}>
            {repeatedClientsData.map((client, clientIndex) => (
              <div key={clientIndex} className={styles.upSlider}>
                <img src={client.logo} alt="Logo" />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.upSideContainer}>
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className={styles.downSliderContainer}>
            {repeatedClientsData.map((client, clientIndex) => (
              <div key={clientIndex} className={styles.upSlider}>
                <img src={client.logo} alt="Logo" />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
