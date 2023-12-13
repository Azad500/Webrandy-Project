import styles from "../OurClients/OurClients.module.scss";
import AllInformationsJS from "../../Informations";
import SliderInOurClients from "./SliderInOurClients";

export default function OurClients({ ourClientsRef }) {
  return (
    <section ref={ourClientsRef} className={styles.OurClientsSection}>
      <div className={styles.OurClientsDiv}>
        <div>
          <h2>{AllInformationsJS.OurClients.OurClientsTextInHeader}</h2>
          <div className={styles.cardContainer}>
            <img
              src={AllInformationsJS.OurClients.backgroundCircleGray}
              className={styles.backgroundCircle1}
              alt=""
            />
            <img
              src={AllInformationsJS.OurClients.backgroundCircleGray}
              className={styles.backgroundCircle2}
              alt=""
            />
            <img
              src={AllInformationsJS.OurClients.backgroundCircleGray}
              className={styles.backgroundCircle3}
              alt=""
            />
            <img
              src={AllInformationsJS.OurClients.backgroundCirclePink}
              className={styles.backgroundCircle4}
              alt=""
            />
            {AllInformationsJS?.OurClients?.ClientData?.map((client, index) => (
              <div key={index} className={styles.card}>
                <img src={client.img} alt="Kitten Image" />
                <div className={styles.companyAndCeo}>
                  <h3>{client.companyName}</h3>
                  <p>
                    {client.name} {client.surname}
                  </p>
                </div>
                <div className={styles.description}>
                  <div className={styles.vectorElement}>
                    <img
                      src={AllInformationsJS.OurClients.vectorLeft}
                      alt="Vector Left"
                    />
                    <img
                      src={AllInformationsJS.OurClients.vectorRight}
                      alt="Vector Right"
                    />
                  </div>
                  <p>{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SliderInOurClients />
    </section>
  );
}
