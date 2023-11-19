import { useState } from "react";
import styles from "./PaginationForMobile.module.scss";

export default function PaginationForMobile({
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
  const informationsCards = [Blog1, Blog2, Blog3];
  const blogTexts = [Blog1Text, Blog2Text, Blog3Text];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 1;

  const totalCards = informationsCards.length;
  const totalBlogCards = blogTexts.length;

  const paginate = (pageNumber) => {
    if (
      pageNumber > totalCards / cardsPerPage &&
      pageNumber > totalBlogCards / cardsPerPage
    ) {
      setCurrentPage(1);
    } else if (pageNumber < 1) {
      setCurrentPage(
        Math.ceil(totalCards / cardsPerPage && totalBlogCards / cardsPerPage)
      );
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = informationsCards.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const currentBlogCards = blogTexts.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className={styles.informationsContainer}>
      <div className={styles.imagesInInformations}>
        <button
          className={`${styles.left_arrow} ${styles.arrow}`}
          onClick={() => paginate(currentPage - 1)}
        >
          <img src={LeftArrow} alt="" />
        </button>
        <div className={styles.slideContainer}>
          {currentCards.map((informationCard, index) => (
            <div key={index} className={styles.imagesAndTexts}>
              <img
                className={styles.imagesElement}
                src={informationCard}
                alt=""
              />
              {currentBlogCards.map((blogText, index) => (
                <div className={styles.textAndArrowElement} key={index}>
                  <p>{blogText}</p>
                  <img src={Arrow} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className={`${styles.right_arrow} ${styles.arrow}`}
          onClick={() => paginate(currentPage + 1)}
        >
          <img src={RightArrow} alt="" />
        </button>
      </div>
    </div>
  );
}
