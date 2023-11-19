import React, { useEffect } from "react";
import styles from "./PaginationForLaptop.module.scss";

export default function PaginationForLaptop({
  Blog1,
  Blog2,
  Blog3,
  Blog1Text,
  Blog2Text,
  Blog3Text,
  Arrow,
}) {
  const images = [Blog1, Blog2, Blog3];
  const texts = [Blog1Text, Blog2Text, Blog3Text];

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
              <img src={Arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
