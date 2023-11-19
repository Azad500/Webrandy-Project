import styles from "./Blog.module.scss";
import PaginationForLaptop from "./PaginationForLaptop";
import PaginationForMobile from "./PaginationForMobile";
import PaginationForTablet from "./PaginationForTablet";
import AllInformationsJS from "../../Informations";
import Blog1 from "../../Images/Blog/blog1.png";
import Blog2 from "../../Images/Blog/blog2.png";
import Blog3 from "../../Images/Blog/blog2.png";
import LeftArrow from "../../Images/Blog/leftArrow.png";
import RightArrow from "../../Images/Blog/rightArrow.png";
import Arrow from "../../Images/UxAudit/arrow.png";

export default function Blog({ blogRef }) {
  return (
    <section ref={blogRef} className={styles.blogContainer}>
      <div className={styles.blogTextAndSearchElements}>
        <p className={styles.blogTextElement}>
          {AllInformationsJS.BlogPart.BlogText}
        </p>
        <div className={styles.searchElement}>
          <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <div className={styles.paginationForMobile}>
        <PaginationForMobile
          Blog1={Blog1}
          Blog2={Blog2}
          Blog3={Blog3}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          Blog1Text={AllInformationsJS.BlogPart.Blog1Text}
          Blog2Text={AllInformationsJS.BlogPart.Blog2Text}
          Blog3Text={AllInformationsJS.BlogPart.Blog3Text}
          Arrow={Arrow}
        />
      </div>
      <div className={styles.paginationForTablet}>
        <PaginationForTablet
          Blog1={Blog1}
          Blog2={Blog2}
          Blog3={Blog3}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          Blog1Text={AllInformationsJS.BlogPart.Blog1Text}
          Blog2Text={AllInformationsJS.BlogPart.Blog2Text}
          Blog3Text={AllInformationsJS.BlogPart.Blog3Text}
          Arrow={Arrow}
        />
      </div>
      <div className={styles.paginationForLaptop}>
        <PaginationForLaptop
          Blog1={Blog1}
          Blog2={Blog2}
          Blog3={Blog3}
          Blog1Text={AllInformationsJS.BlogPart.Blog1Text}
          Blog2Text={AllInformationsJS.BlogPart.Blog2Text}
          Blog3Text={AllInformationsJS.BlogPart.Blog3Text}
          Arrow={Arrow}
        />
      </div>
    </section>
  );
}
