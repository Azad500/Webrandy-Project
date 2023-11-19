import OurClientsStyle from "../OurClients/OurClients.module.scss";
import AllInformationsJS from "../../Informations";
import backgroundCirclePink from "../../Images/OurClients/OurClientBackgroundCircle.svg";
import backgroundCircleGray from "../../Images/OurClients/OurClientBackgroundCircleGray.svg";
import OurClientsSlider from "./OurClientsSlider";

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
              className={OurClientsStyle.backgroundCircle4}
              src={backgroundCirclePink}
              alt=""
            />
            {AllInformationsJS?.OurClients?.ClientData?.map((client, index) => (
              <div key={index} className={OurClientsStyle.card}>
                <img src={client.img} alt="Kitten Image" />
                <h3 className={OurClientsStyle.name}>
                  {client.name} {client.surname}
                </h3>
                <p className={OurClientsStyle.description}>{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
