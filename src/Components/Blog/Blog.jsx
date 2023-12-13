import styles from "./Blog.module.scss";
import PaginationForLaptop from "./PaginationForLaptop";
import PaginationForMobile from "./PaginationForMobile";
import PaginationForTablet from "./PaginationForTablet";
import AllInformationsJS from "../../Informations";

export default function Blog({ blogRef }) {
  return (
    <section ref={blogRef} className={styles.blogContainer}>
      <div className={styles.blogTextAndSearchElements}>
        <p className={styles.blogTextElement}>
          {AllInformationsJS.BlogPart.BlogText}
        </p>
        <div className={styles.searchElement}>
          <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
          <img src={AllInformationsJS.BlogPart.Arrow} alt="Arrow" />
        </div>
      </div>
      <div className={styles.paginationForMobile}>
        <PaginationForMobile />
      </div>
      <div className={styles.paginationForTablet}>
        <PaginationForTablet />
      </div>
      <div className={styles.paginationForLaptop}>
        <PaginationForLaptop />
      </div>
    </section>
  );
}
