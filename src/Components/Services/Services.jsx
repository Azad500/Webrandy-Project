import { useEffect, useState } from "react";
import AllInformationsJS from "../../Informations";
import styles from "../Services/Services.module.scss";
import gsap from "gsap";

export default function Services({ servicesRef }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    if (
      AllInformationsJS.ServicesPart.Categories.length > 0 &&
      !selectedCategory
    ) {
      setSelectedCategory(AllInformationsJS.ServicesPart.Categories[0]);
    }
  }, []);
  useEffect(() => {
    gsap.to(".myAdditionalClass", {
      x: 0,
      duration: 1.2,
    });
    gsap.to(".ImgBox", {
      y: 0,
      duration: 1.2,
    });
    gsap.to(".hashTag", {
      x: 0,
      duration: 1.2,
    });
    gsap.to(".Description", {
      x: 0,
      duration: 1.2,
    });
  }, []);
  const selectedCategoryInfo =
    AllInformationsJS.ServicesPart.CategoriesInfo.find(
      (info) => info.category === selectedCategory
    );
  return (
    <section ref={servicesRef} className={styles.servicesSection}>
      <div className={styles.wrapper}>
        <h2>{AllInformationsJS.ServicesPart.Services}</h2>
        <div className={styles.servicesLeftRightPart}>
          <div className={`${styles.CategoriDiv} myAdditionalClass`}>
            <ul>
              {AllInformationsJS.ServicesPart.Categories.map((category) => (
                <li
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory === category ? styles.selected : ""
                  } ${category}`}
                  key={category}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.description}>
            <div className={`${styles.imgBox} ImgBox`}>
              <img src={selectedCategoryInfo?.img} alt="" />
            </div>
            <p className={`${styles.description} Description`}>
              {selectedCategoryInfo?.desc}
            </p>
            <div>
              <p className={`${styles.hashtag} hashTag`}>
                {selectedCategoryInfo?.hashtag &&
                  selectedCategoryInfo.hashtag.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
              </p>
              <p className={styles.rightButton}>
                {AllInformationsJS.SameParts.DetailedSearch}{" "}
                <img
                  className={styles.rightButton}
                  src={AllInformationsJS.ServicesPart.rightButton}
                  alt="Right Button"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
