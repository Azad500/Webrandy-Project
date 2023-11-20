import AllInformationsJS from "../../Informations";
import NavbarForMobileStyle from "../Navbar/NavbarForMobile.module.scss";
import outIcon from "../../Images/Navbar/basil_cross-outline.png";
export default function NavbarForMobile({
  navbarOpen,
  setNavbarOpen,
  handleScrollClick,
}) {
  const handleClose = () => {
    setNavbarOpen(false);
  };
  return (
    <div
      className={`${NavbarForMobileStyle.navbar} ${
        navbarOpen ? NavbarForMobileStyle.active : ""
      }`}
    >
      <div className={NavbarForMobileStyle.background}>
        <img onClick={handleClose} src={outIcon} alt="cross" />
        <div>
          <ul>
            <li onClick={() => handleScrollClick("servicesRef")}>
              {AllInformationsJS.NavbarPart.Services}
            </li>
            {/* <li onClick={() => handleScrollClick("portfolioRef")}>
              {AllInformationsJS.NavbarPart.Portfolio}
            </li> */}
            <li onClick={() => handleScrollClick("teamRef")}>
              {AllInformationsJS.NavbarPart.Team}
            </li>
            <li onClick={() => handleScrollClick("ourClientsRef")}>
              {AllInformationsJS.NavbarPart.Partners}
            </li>
            {/* <li onClick={() => handleScrollClick("blogRef")}>
              {AllInformationsJS.NavbarPart.Blog}
            </li> */}
            <li target="_blank" href="https://wa.me/994503679899">
              {AllInformationsJS.NavbarPart.Contact}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
