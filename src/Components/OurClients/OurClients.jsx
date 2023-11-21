import OurClientsStyle from "../OurClients/OurClients.module.scss";
import AllInformationsJS from "../../Informations";
import backgroundCirclePink from "../../Images/OurClients/OurClientBackgroundCircle.svg";
import backgroundCircleGray from "../../Images/OurClients/OurClientBackgroundCircleGray.svg";
import SliderInOurClients from "./SliderInOurClients";

export default function OurClients({ ourClientsRef }) {
  return (
    <section ref={ourClientsRef} className={OurClientsStyle.OurClientsSection}>
      <div className={OurClientsStyle.OurClientsDiv}>
        <div>
          <h2>{AllInformationsJS.OurClients.OurClientsTextInHeader}</h2>
          <div className={OurClientsStyle.cardContainer}>
            <img
              src={backgroundCircleGray}
              className={OurClientsStyle.backgroundCircle1}
              alt=""
            />
            <img
              src={backgroundCircleGray}
              className={OurClientsStyle.backgroundCircle2}
              alt=""
            />
            <img
              src={backgroundCircleGray}
              className={OurClientsStyle.backgroundCircle3}
              alt=""
            />
            <img
              src={backgroundCirclePink}
              className={OurClientsStyle.backgroundCircle4}
              alt=""
            />
            {AllInformationsJS?.OurClients?.ClientData?.map((client, index) => (
              <div key={index} className={OurClientsStyle.card}>
                <img src={client.img} alt="Kitten Image" />
                <div className={OurClientsStyle.companyAndCeo}>
                  <h3>{client.companyName}</h3>
                  <p>
                    {client.name} {client.surname}
                  </p>
                </div>
                <p className={OurClientsStyle.description}>{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SliderInOurClients />
    </section>
  );
}
