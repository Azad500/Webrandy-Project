import styles from "./Footer.module.scss";
import AllInformationsJS from "../../Informations";
import Arrow from "../../Images/UxAudit/arrow.png";
import InstagramIconForFooter from "../../Images/Footer/instagramForFooter.svg";
import FacebookIconForFooter from "../../Images/Footer/facebookForFooter.svg";
import LinkedinIconForFooter from "../../Images/Footer/linkedinForFooter.svg";
import TiktokIconForFooter from "../../Images/Footer/tiktokForFooter.svg";
import ImageInFooter from "../../Images/Footer/footerImage.png";

export default function Footer({ footerRef, handleScrollClick }) {
  return (
    <section ref={footerRef}>
      <div className={styles.buttonsAndEmailsElement}>
        <div className={styles.webrandyTextInFooter}>
          <p onClick={() => handleScrollClick("navbarRef")}>
            {AllInformationsJS.SameParts.Webrandy}
          </p>
        </div>
        <div className={styles.textsAndButtonElement}>
          <div className={styles.menuBarInFooter}>
            <a onClick={() => handleScrollClick("servicesRef")}>
              {AllInformationsJS.FooterPart.Services}
            </a>
            {/* <a onClick={() => handleScrollClick("portfolioRef")}>
              {AllInformationsJS.FooterPart.Porfolio}
            </a> */}
            <a onClick={() => handleScrollClick("teamRef")}>
              {AllInformationsJS.FooterPart.Team}
            </a>
            <a onClick={() => handleScrollClick("ourClientsRef")}>
              {AllInformationsJS.FooterPart.Partners}
            </a>
            {/* <a onClick={() => handleScrollClick("blogRef")}>
              {AllInformationsJS.FooterPart.BlogInFooter}
            </a> */}
            <a target="_blank" href="https://wa.me/994503679899">
              {AllInformationsJS.FooterPart.Contact}
            </a>
          </div>
          <div className={styles.buttonElement}>
            <button>{AllInformationsJS.FooterPart.ButtonText}</button>
          </div>
        </div>
        <div className={styles.emailsElement}>
          <a href="">{AllInformationsJS.FooterPart.FirstEmail}</a>
          <a href="">{AllInformationsJS.FooterPart.SecondEmail}</a>
        </div>
      </div>
      <div className={styles.imageinFooterElement}>
        <img src={ImageInFooter} alt="" />
      </div>
      <div className={styles.phonesAndInputElement}>
        <div className={styles.menuInFooter}>
          <a onClick={() => handleScrollClick("servicesRef")}>
            {AllInformationsJS.FooterPart.Services}
          </a>
          {/* <a onClick={() => handleScrollClick("portfolioRef")}>
            {AllInformationsJS.FooterPart.Porfolio}
          </a> */}
          <a onClick={() => handleScrollClick("teamRef")}>
            {AllInformationsJS.FooterPart.Team}
          </a>
          <a onClick={() => handleScrollClick("ourClientsRef")}>
            {AllInformationsJS.FooterPart.Partners}
          </a>
          {/* <a onClick={() => handleScrollClick("blogRef")}>
            {AllInformationsJS.FooterPart.BlogInFooter}
          </a> */}
        </div>
        <div className={styles.emailsAndPhonesElement}>
          <div className={styles.emailsContainer}>
            <a href="">{AllInformationsJS.FooterPart.FirstEmail}</a>
            <a href="">{AllInformationsJS.FooterPart.SecondEmail}</a>
          </div>
          <div className={styles.phonesElement}>
            <a href="">{AllInformationsJS.FooterPart.FirstPhoneNumber}</a>
            <a href="">{AllInformationsJS.FooterPart.SecondPhoneNumber}</a>
            <a href="">{AllInformationsJS.FooterPart.ThirdPhoneNumber}</a>
          </div>
        </div>
        <div className={styles.inputTextElement}>
          <p>{AllInformationsJS.FooterPart.Subscribe}</p>
          <div className={styles.inputElement}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={AllInformationsJS.FooterPart.InputEmail}
            />
            <button>
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.iconsAndFooterTextsElement}>
        <div className={styles.iconsElement}>
          <div className={styles.iconsWrapper}>
            <a href="">
              <img src={InstagramIconForFooter} alt="" />
            </a>
            <a href="">
              <img src={FacebookIconForFooter} alt="" />
            </a>
            <a href="">
              <img src={LinkedinIconForFooter} alt="" />
            </a>
            <a href="">
              <img src={TiktokIconForFooter} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.footerTexts}>
          <div className={styles.footerTextsWrapper}>
            <p>{AllInformationsJS.FooterPart.FooterFirstText}</p>
            <p>{AllInformationsJS.FooterPart.FooterSecondText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
