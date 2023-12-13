import React, { useEffect } from "react";
import styles from "./PaginationForLaptop.module.scss";
import AllInformationsJS from "../../Informations";

export default function PaginationForLaptop() {
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

  return (
    <div className={styles.container}>
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
    </div>
  );
}
