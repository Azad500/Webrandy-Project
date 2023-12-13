import styles from "../Navbar/Navbar.module.scss";
import AllInformationsJS from "../../Informations";
import HamburgerBar from "./HamburgerBar";
export default function Navbar({
  navbarOpen,
  handleScrollClick,
  refreshPage,
  navbarRef,
}) {
  return (
    <header>
      <nav
        className={`${styles.navbar} ${navbarOpen ? styles.navbarActive : ""}`}
      >
        <div className={styles.leftSideElement}>
          <img
            src={AllInformationsJS.NavbarPart.NavbarImage}
            alt="Left Image"
          />
          <h1 ref={navbarRef} onClick={refreshPage}>
            {AllInformationsJS.SameParts.Webrandy}
          </h1>
        </div>
        <div className={styles.rightSideElements}>
          <button className={styles.button}>
            <a target="_blank" href="https://wa.me/994517775770">
              {AllInformationsJS.HomePart.ButtonDesc}
            </a>
          </button>
          <HamburgerBar handleScrollClick={handleScrollClick} />
        </div>
        <div className={styles.navbarActive}>
          <ul>
            <li>
              <a onClick={() => handleScrollClick("servicesRef")}>
                {AllInformationsJS.NavbarPart.Services}
              </a>
            </li>
            {/* <li>
              <a onClick={() => handleScrollClick("portfolioRef")}>
                {AllInformationsJS.NavbarPart.Portfolio}
              </a>
            </li> */}
            <li>
              <a onClick={() => handleScrollClick("teamRef")}>
                {AllInformationsJS.NavbarPart.Team}
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollClick("ourClientsRef")}>
                {AllInformationsJS.NavbarPart.Partners}
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollClick("aboutUsRef")}>
                {AllInformationsJS.FooterPart.AboutUs}
              </a>
            </li>
            {/* <li>
              <a onClick={() => handleScrollClick("blogRef")}>
                {AllInformationsJS.NavbarPart.Blog}
              </a>
            </li> */}
            <li>
              <a target="_blank" href="https://wa.me/994517775770">
                {AllInformationsJS.NavbarPart.Contact}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
