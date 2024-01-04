import styles from "./LeftAside.module.scss";
import AllInformationsJS from "../../../Informations";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftAside() {
  const [pagesTexts, setPagesTexts] = useState("");
  const [informationsTexts, setInformationsTexts] = useState("");
  const [portfolioTexts, setPortfolioTexts] = useState("");
  const [servicesTexts, setServicesTexts] = useState("");
  const [partnersTexts, setPartnersTexts] = useState("");
  const [teamTexts, setTeamTexts] = useState("");

  const selectPagesTexts = () => {
    setPagesTexts(!pagesTexts);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectInformationsTexts = () => {
    setInformationsTexts(!informationsTexts);
    setPagesTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectPortfolioTexts = () => {
    setPortfolioTexts(!portfolioTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectServicesTexts = () => {
    setServicesTexts(!servicesTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectPartnersTexts = () => {
    setPartnersTexts(!partnersTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setTeamTexts(false);
  };

  const selectTeamTexts = () => {
    setTeamTexts(!teamTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.webrandyLogo}>
          <img
            src={AllInformationsJS.AdminPanel.Navbar.WebrandyLogo}
            alt="Webrandy Logo"
          />
          <h1>
            <a href="/">{AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}</a>
          </h1>
        </div>
        <div className={styles.headerText}>
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.MainPageText}</p>
        </div>
        <div
          onClick={selectInformationsTexts}
          className={`${styles.informationsText} ${
            informationsTexts ? styles.activeElement : ""
          }`}
        >
          <Link to="/adminPanel/">
            <p>{AllInformationsJS.AdminPanel.HamburgerBar.Informations}</p>
          </Link>
        </div>
        <div className={styles.pagesContainer}>
          <div
            onClick={selectPagesTexts}
            className={styles.pagesTextAndImgContainer}
          >
            <div className={styles.pagesTextAndImg}>
              <img
                src={AllInformationsJS.AdminPanel.HamburgerBar.PagesImg}
                alt="Page Image"
              />
              <p>{AllInformationsJS.AdminPanel.HamburgerBar.PagesText}</p>
            </div>
            <div className={styles.downArrowElement}>
              <img
                src={AllInformationsJS.AdminPanel.HamburgerBar.DownArrow}
                alt="Down Arrow"
              />
            </div>
          </div>
          {pagesTexts && (
            <ul>
              <li>{AllInformationsJS.AdminPanel.HamburgerBar.HomePage}</li>
              <li>{AllInformationsJS.AdminPanel.HamburgerBar.Portfolio}</li>
              <li>{AllInformationsJS.AdminPanel.HamburgerBar.Services}</li>
              <li>{AllInformationsJS.AdminPanel.HamburgerBar.Blog}</li>
              <li>{AllInformationsJS.AdminPanel.HamburgerBar.ContactWithUs}</li>
            </ul>
          )}
        </div>
        <div
          onClick={selectPortfolioTexts}
          className={`${styles.portfolioElement} ${
            portfolioTexts ? styles.activeElement : ""
          }`}
        >
          <Link to="/adminPanel/portfolio">
            <p>{AllInformationsJS.AdminPanel.HamburgerBar.Portfolio}</p>
          </Link>
        </div>
        <div
          onClick={selectServicesTexts}
          className={`${styles.servicesElement} ${
            servicesTexts ? styles.activeElement : ""
          }`}
        >
          <Link to="/adminPanel/services">
            <p>{AllInformationsJS.AdminPanel.HamburgerBar.Services}</p>
          </Link>
        </div>
        <div
          onClick={selectPartnersTexts}
          className={`${styles.partnersElement} ${
            partnersTexts ? styles.activeElement : ""
          }`}
        >
          <Link to="/adminPanel/partners">
            <p>{AllInformationsJS.AdminPanel.HamburgerBar.Partners}</p>
          </Link>
        </div>
        <div
          onClick={selectTeamTexts}
          className={`${styles.teamElement} ${
            teamTexts ? styles.activeElement : ""
          }`}
        >
          <Link to="/adminPanel/team">
            <p>{AllInformationsJS.AdminPanel.HamburgerBar.Team}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
