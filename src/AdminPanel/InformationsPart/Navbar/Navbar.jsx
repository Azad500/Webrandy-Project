import styles from "./Navbar.module.scss";
import AllInformationsJS from "../../../Informations";
import HamburgerBar from "./HamburgerBar";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <HamburgerBar />
        </li>
        <li className={styles.WebrandyLogo}>
          <img
            src={AllInformationsJS.AdminPanel.Navbar.WebrandyLogo}
            alt="Webrandy Logo"
          />
          <h1>
            <a href="/">{AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}</a>
          </h1>
        </li>
        <li className={styles.ProfilePhotos}>
          <img
            src={AllInformationsJS.AdminPanel.Navbar.ProfilePhotos}
            alt="Profil Photo"
          />
        </li>
      </ul>
    </nav>
  );
}
