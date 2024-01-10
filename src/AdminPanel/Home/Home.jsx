import styles from "./Home.module.scss";
import Informations from "../../AdminPanel/InformationsPart/Informations/Informations";
import LeftAside from "../InformationsPart/LeftAside/LeftAside";
import { Route, Routes } from "react-router-dom";
import Portfolio from "../PortfolioPart/Portfolio";
import Services from "../ServicesPart/Services";
import Partners from "../PartnersPart/Partners";
import Team from "../TeamPart/Team";

export default function Home({ handleAddInput, handleRemoveInput }) {
  return (
    <section className={styles.container}>
      <div className={styles.leftSideElement}>
        <LeftAside />
      </div>
      <div className={styles.informationsElement}>
        <Routes>
          <Route
            path="/"
            element={
              <Informations
                handleAddInput={handleAddInput}
                handleRemoveInput={handleRemoveInput}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </section>
  );
}
