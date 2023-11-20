import { useEffect, useState } from "react";
import AllInformationsJS from "../../Informations";
import ServicesStyle from "../Services/Services.module.scss";
import rightButton from "../../Images/Services/rightButton.svg";

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
  const selectedCategoryInfo =
    AllInformationsJS.ServicesPart.CategoriesInfo.find(
      (info) => info.category === selectedCategory
    );
  return (
    <section ref={servicesRef} className={ServicesStyle.servicesSection}>
      <h2>{AllInformationsJS.ServicesPart.Services}</h2>
      <div className={ServicesStyle.servicesLeftRightPart}>
        <div className={ServicesStyle.CategoriDiv}>
          <ul>
            {AllInformationsJS.ServicesPart.Categories.map((category) => (
              <li
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? ServicesStyle.selected : ""
                } ${category}`}
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={ServicesStyle.description}>
          <div className={ServicesStyle.imgBox}>
            <img src={selectedCategoryInfo?.img} alt="" />
          </div>
          <p className={ServicesStyle.description}>
            {selectedCategoryInfo?.desc}
          </p>
          <div>
            <p className={ServicesStyle.hashtag}>
              {selectedCategoryInfo?.hashtag &&
                selectedCategoryInfo.hashtag.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
            </p>
            <p className={ServicesStyle.rightButton}>
              {AllInformationsJS.SameParts.DetailedSearch}{" "}
              <img
                className={ServicesStyle.rightButton}
                src={rightButton}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
