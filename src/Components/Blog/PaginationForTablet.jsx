import React, { useEffect } from "react";
import styles from "./PaginationForTablet.module.scss";

export default function PaginationForTablet({
  Blog1,
  Blog2,
  Blog3,
  LeftArrow,
  RightArrow,
  Blog1Text,
  Blog2Text,
  Blog3Text,
  Arrow,
}) {
  const images = [Blog1, Blog2, Blog3];
  const texts = [Blog1Text, Blog2Text, Blog3Text];

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
        <img src={LeftArrow} alt="" />
      </button>
      <div className={styles.paginationContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.paginationWrapper}>
            <div className={styles.imagesWrapper}>
              <img src={image} alt="" />
            </div>
            <div className={styles.textsWrapper}>
              <p>{texts[index]}</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.rightArrowElement} ${styles.arrowElement}`}
        id={styles.rightArrowElement}
      >
        <img src={RightArrow} alt="" />
      </button>
    </div>
  );
}
