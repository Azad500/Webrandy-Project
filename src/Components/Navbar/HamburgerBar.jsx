import React, { useEffect, useState } from "react";
import styles from "./HamburgerBar.module.scss";
import AllInformationsJS from "../../Informations";

export default function HamburgerBar({ handleScrollClick }) {
  const [activeHamburger, setActiveHamburger] = useState(false);

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
        <div className={styles.background}>
          <ul>
            <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("servicesRef")}>
                {AllInformationsJS.NavbarPart.Services}
              </p>
            </li>
            {/* <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("portfolioRef")}>
                {AllInformationsJS.NavbarPart.Portfolio}
              </p>
            </li> */}
            <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("teamRef")}>
                {AllInformationsJS.NavbarPart.Team}
              </p>
            </li>
            <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("ourClientsRef")}>
                {AllInformationsJS.NavbarPart.Partners}
              </p>
            </li>
            <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("aboutUsRef")}>
                {AllInformationsJS.FooterPart.AboutUs}
              </p>
            </li>
            {/* <li onClick={handleToggleMenu}>
              <p onClick={() => handleScrollClick("blogRef")}>
                {AllInformationsJS.NavbarPart.Blog}
              </p>
            </li> */}
            <li onClick={handleToggleMenu}>
              <a target="_blank" href="https://wa.me/994517775770">
                {AllInformationsJS.NavbarPart.Contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
