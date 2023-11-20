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
  const handleCloseClick = () => {
    handleClose();
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
            <li onClick={handleCloseClick}>
              <p onClick={() => handleScrollClick("servicesRef")}>
                {AllInformationsJS.NavbarPart.Services}
              </p>
            </li>
            {/* <li onClick={() => handleScrollClick("portfolioRef")}>
              {AllInformationsJS.NavbarPart.Portfolio}
            </li> */}
            <li onClick={handleCloseClick}>
              <p onClick={() => handleScrollClick("teamRef")}>
                {AllInformationsJS.NavbarPart.Team}
              </p>
            </li>
            <li onClick={handleCloseClick}>
              <p onClick={() => handleScrollClick("ourClientsRef")}>
                {AllInformationsJS.NavbarPart.Partners}
              </p>
            </li>
            <li onClick={handleCloseClick}>
              <p onClick={() => handleScrollClick("aboutUsRef")}>
                {AllInformationsJS.FooterPart.AboutUs}
              </p>
            </li>
            {/* <li onClick={() => handleScrollClick("blogRef")}>
              {AllInformationsJS.NavbarPart.Blog}
            </li> */}
            <li onClick={handleCloseClick}>
              <a target="_blank" href="https://wa.me/994517775770">
                {AllInformationsJS.NavbarPart.Contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
