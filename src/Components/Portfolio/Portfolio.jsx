import styles from "./Portfolio.module.scss";
import PureCardFlipFirst from "../CardFlip/PureCardFlipFirst";
import PureCardFlipSecond from "../CardFlip/PureCardFlipSecond";
import PureCardFlipThird from "../CardFlip/PureCardFlipThird";
import PureCardFlipFourth from "../CardFlip/PureCardFlipFourth";
import PureCardFlipFive from "../CardFlip/PureCardFlipFive";
import AllInformationsJS from "../../Informations";
import PureCardFlipSix from "../CardFlip/PureCardFlipSix";

export default function Portfolio({ portfolioRef }) {
  return (
    <div ref={portfolioRef} className={styles.container}>
      <div className={styles.backgroundColorElement}>
        <img
          className={styles.firstBackground}
          src={AllInformationsJS.PortfolioPart.portfolioBackground}
          alt=""
        />
        <img
          className={styles.secondBackground}
          src={AllInformationsJS.PortfolioPart.portfolioBackground}
          alt=""
        />
        <img
          className={styles.thirdBackground}
          src={AllInformationsJS.PortfolioPart.portfolioBackground}
          alt=""
        />
        <img
          className={styles.fourthBackground}
          src={AllInformationsJS.PortfolioPart.portfolioBackground}
          alt=""
        />
        <img
          className={styles.fivethBackground}
          src={AllInformationsJS.PortfolioPart.portfolioBackground}
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textAndDetailedSearchElements}>
          <p>{AllInformationsJS.PortfolioPart.PortfolioText}</p>
          <div className={styles.detailedSearchLaptopVersion}>
            <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
            <img
              src={AllInformationsJS.PortfolioPart.ArrowWhite}
              alt="Portfolio Arrow"
            />
          </div>
        </div>
        <div className={styles.allCardFlipContainers}>
          <div className={styles.cardFlipFirstElement}>
            <div className={styles.cardFlipMV}>
              <PureCardFlipFirst />
            </div>
            <div className={styles.cardFlipMVSecond}>
              <PureCardFlipSecond />
            </div>
            <div className={styles.cardFlipMVHidden}>
              <PureCardFlipThird />
            </div>
          </div>
          <div className={styles.cardDlipSecondElement}>
            <div className={styles.cardFlipLV}>
              <PureCardFlipFourth />
            </div>
            <div className={styles.cardFlipLVSecond}>
              <PureCardFlipFive />
            </div>
            <div className={styles.cardFlipLVHidden}>
              <PureCardFlipSix />
            </div>
          </div>
        </div>
        <div className={styles.detailedSearchMobileVersion}>
          <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
          <img
            src={AllInformationsJS.PortfolioPart.ArrowWhite}
            alt="Portfolio Arrow"
          />
        </div>
      </div>
    </div>
  );
}
