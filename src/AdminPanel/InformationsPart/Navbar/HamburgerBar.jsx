import React, { useEffect, useState } from "react";
import styles from "./HamburgerBar.module.scss";
import AllInformationsJS from "../../../Informations";

export default function HamburgerBar() {
  const [activeHamburger, setActiveHamburger] = useState(false);
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

  const handleToggleMenu = () => {
    setActiveHamburger(!activeHamburger);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (activeHamburger) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [activeHamburger]);

  return (
    <section className={styles.navbarContainer}>
      <button
        className={`${styles.hamburger} ${
          activeHamburger ? styles.is_active : ""
        }`}
        onClick={handleToggleMenu}
      >
        <div className={styles.bar}></div>
      </button>
      <div
        className={`${styles.mobile_nav} ${
          activeHamburger ? styles.is_active : ""
        }`}
      >
        {/* -------------------headerText----------------- */}
        <div className={styles.headerText}>
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.MainPageText}</p>
        </div>
        <div
          onClick={selectInformationsTexts}
          className={`${styles.informationsText} ${
            informationsTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.Informations}</p>
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
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.Portfolio}</p>
        </div>
        <div
          onClick={selectServicesTexts}
          className={`${styles.servicesElement} ${
            servicesTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.Services}</p>
        </div>
        <div
          onClick={selectPartnersTexts}
          className={`${styles.partnersElement} ${
            partnersTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.Partners}</p>
        </div>
        <div
          onClick={selectTeamTexts}
          className={`${styles.teamElement} ${
            teamTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformationsJS.AdminPanel.HamburgerBar.Team}</p>
        </div>
      </div>
    </section>
  );
}
