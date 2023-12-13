import React, { useEffect } from "react";
import styles from "./PaginationForTablet.module.scss";
import AllInformationsJS from "../../Informations";

export default function PaginationForTablet() {
  const images = [
    AllInformationsJS.BlogPart.Blog1,
    AllInformationsJS.BlogPart.Blog2,
    AllInformationsJS.BlogPart.Blog3,
  ];
  const texts = [
    AllInformationsJS.BlogPart.Blog1Text,
    AllInformationsJS.BlogPart.Blog2Text,
    AllInformationsJS.BlogPart.Blog3Text,
  ];

  useEffect(() => {
    const container = document.querySelector(`.${styles.paginationContainer}`);
    const buttons = document.querySelectorAll(`.${styles.arrowElement}`);

    const handleButtonClick = (direction) => {
      const scrollAmount = container.clientWidth * direction;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    buttons.forEach((button) =>
      button.addEventListener("click", () =>
        handleButtonClick(button.id === styles.leftArrowElement ? -1 : 1)
      )
    );

    return () =>
      buttons.forEach((button) =>
        button.removeEventListener("click", () =>
          handleButtonClick(button.id === styles.leftArrowElement ? -1 : 1)
        )
      );
  }, []);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.leftArrowElement} ${styles.arrowElement}`}
        id={styles.leftArrowElement}
      >
        <img src={AllInformationsJS.BlogPart.LeftArrow} alt="Left Arrow" />
      </button>
      <div className={styles.paginationContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.paginationWrapper}>
            <div className={styles.imagesWrapper}>
              <img src={image} alt="" />
            </div>
            <div className={styles.textsWrapper}>
              <p>{texts[index]}</p>
              <img src={AllInformationsJS.BlogPart.Arrow} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.rightArrowElement} ${styles.arrowElement}`}
        id={styles.rightArrowElement}
      >
        <img src={AllInformationsJS.BlogPart.RightArrow} alt="Right Arrow" />
      </button>
    </div>
  );
}
