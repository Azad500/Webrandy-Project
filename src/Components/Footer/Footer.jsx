import styles from "./Footer.module.scss";
import AllInformationsJS from "../../Informations";
import Arrow from "../../Images/UxAudit/arrow.png";

export default function Footer({ footerRef, handleScrollClick }) {
  return (
    <section ref={footerRef}>
      <div className={styles.buttonsAndEmailsElement}>
        <div
          onClick={() => handleScrollClick("navbarRef")}
          className={styles.webrandyTextInFooter}
        >
          <img
            src={AllInformationsJS.FooterPart.FooterImageWebrandy}
            alt="Footer Webrandy"
          />
          <p>{AllInformationsJS.SameParts.Webrandy}</p>
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
            <a onClick={() => handleScrollClick("aboutUsRef")}>
              {AllInformationsJS.FooterPart.AboutUs}
            </a>
            <a target="_blank" href="https://wa.me/994517775770">
              {AllInformationsJS.FooterPart.Contact}
            </a>
          </div>
          <div className={styles.buttonElement}>
            <button>
              <a target="_blank" href="https://wa.me/994517775770">
                {AllInformationsJS.FooterPart.ButtonText}
              </a>
            </button>
          </div>
        </div>
        <div className={styles.emailsElement}>
          <a href="">{AllInformationsJS.FooterPart.FirstEmail}</a>
          <a href="">{AllInformationsJS.FooterPart.SecondEmail}</a>
        </div>
      </div>
      <div className={styles.imageinFooterElement}>
        <video
          autoPlay={true}
          muted
          playsInline
          loop
          src={AllInformationsJS.HomePart.HeaderVideos}
        ></video>
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
          <a onClick={() => handleScrollClick("aboutUsRef")}>
            {AllInformationsJS.FooterPart.AboutUs}
          </a>
          <a onClick={() => handleScrollClick("contactRef")}>
            {AllInformationsJS.FooterPart.Contact}
          </a>
        </div>
        <div className={styles.emailsAndPhonesElement}>
          <div className={styles.emailsContainer}>
            <a href="mailto:info@webrandy.com">
              {AllInformationsJS.FooterPart.FirstEmail}
            </a>
            <a href="mailto:office@webrandy.com">
              {AllInformationsJS.FooterPart.SecondEmail}
            </a>
          </div>
          <div className={styles.phonesElement}>
            <a href="tel:+994517775770">
              {AllInformationsJS.FooterPart.FirstPhoneNumber}
            </a>
            <a href="tel:+994502235720">
              {AllInformationsJS.FooterPart.SecondPhoneNumber}
            </a>
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
              <a href="mailto:info@webrandy.com">
                <img src={Arrow} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.iconsAndFooterTextsElement}>
        <div className={styles.iconsElement}>
          <div className={styles.iconsWrapper}>
            <a target="_blank" href="https://instagram.com/webrandyco">
              <img
                src={AllInformationsJS.FooterPart.InstagramIconForFooter}
                alt="Instagram"
              />
            </a>
            <a target="_blank" href="https://facebook.com/webrandyco">
              <img
                src={AllInformationsJS.FooterPart.FacebookIconForFooter}
                alt="Facebook"
              />
            </a>
            <a target="_blank" href="https://linkedin.com/company/webrandyco">
              <img
                src={AllInformationsJS.FooterPart.LinkedinIconForFooter}
                alt="LinkEdin"
              />
            </a>
            <a target="_blank" href="https://tiktok.com/webrandyco">
              <img
                src={AllInformationsJS.FooterPart.TiktokIconForFooter}
                alt="TikTok"
              />
            </a>
          </div>
        </div>
        <div className={styles.footerTexts}>
          <div className={styles.footerTextsWrapper}>
            <p>{AllInformationsJS.FooterPart.FooterFirstText}</p>
            <p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/Ngp5csp7a45Lndny6"
              >
                {AllInformationsJS.FooterPart.FooterSecondText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
