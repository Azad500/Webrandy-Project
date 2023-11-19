import styles from "./PureCardFlip.module.scss";
import AllInformationsJS from "../../Informations";
import FirstVideo from "../../Images/Portfolio/videos/firstVideo.mp4";
import { useState } from "react";

export default function PureCardFlipFirst() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
    >
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
        onClick={handleCardClick}
      >
        <div className={styles.content}>
          <div className={`${styles.front} ${isFlipped ? styles.hidden : ""}`}>
            <video autoPlay muted loop>
              <source src={FirstVideo} type="video/mp4" />
            </video>
            <div className={styles.overlay}>
              <h1>{AllInformationsJS.PortfolioPart.HeaderInFrontInCardFlip}</h1>
              <div className={styles.buttons}>
                <button>
                  {
                    AllInformationsJS.PortfolioPart
                      .ButtonInLeftInFrontInCardFlip
                  }
                </button>
                <button>
                  {
                    AllInformationsJS.PortfolioPart
                      .ButtonInMiddleInFrontInCardFlip
                  }
                </button>
                <button>
                  {
                    AllInformationsJS.PortfolioPart
                      .ButtonInRightInFrontInCardFlip
                  }
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.back} ${isFlipped ? "" : styles.hidden}`}>
            <h1>{AllInformationsJS.PortfolioPart.HeaderInBackInCardFlip}</h1>
            <p>{AllInformationsJS.PortfolioPart.TextInBackInCardFlip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
