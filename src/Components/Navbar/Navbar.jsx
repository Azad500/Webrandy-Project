import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarStyle from "../Navbar/Navbar.module.scss";
import AllInformationsJS from "../../Informations";
import NavbarForMobile from "./NavbarForMobile";
export default function Navbar({
  navbarOpen,
  setNavbarOpen,
  handleScrollClick,
  refreshPage,
  navbarRef,
}) {
  const handleToogle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <header>
      <nav
        className={`${NavbarStyle.navbar} ${
          navbarOpen ? NavbarStyle.navbarActive : ""
        }`}
      >
        <div>
          <h1 ref={navbarRef} onClick={refreshPage}>
            {AllInformationsJS.SameParts.Webrandy}
          </h1>
        </div>
        <div>
          <FontAwesomeIcon
            onClick={handleToogle}
            className={NavbarStyle.barMenu}
            icon={faBars}
          />
        </div>
        <div className={NavbarStyle.navbarActive}>
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
            {/* <li>
              <a onClick={() => handleScrollClick("blogRef")}>
                {AllInformationsJS.NavbarPart.Blog}
              </a>
            </li> */}
            <li>
              <a target="_blank" href="https://wa.me/994503679899">
                {AllInformationsJS.NavbarPart.Contact}
              </a>
            </li>
          </ul>
        </div>
        <NavbarForMobile
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          handleScrollClick={handleScrollClick}
        />
      </nav>
    </header>
  );
}
