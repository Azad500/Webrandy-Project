import styles from "./UxAudit.module.scss";
import AllInformationsJS from "../../Informations";
import UxAuditImage from "../../Images/UxAudit/UxAuditImage.png";
import Arrow from "../../Images/UxAudit/arrow.png";

export default function UxAudit() {
  return (
    <div className={styles.container}>
      <div className={styles.uxAuditTextMobileVersion}>
        <p>{AllInformationsJS.UxAuditPart.UxAuditHeader}</p>
      </div>
      <div className={styles.uxAuditContainer}>
        <div className={styles.uxAuditImage}>
          <img src={UxAuditImage} alt="UX Audit Image" />
        </div>
        <div className={styles.uxAuditTextsContainer}>
          <div className={styles.headerTextAndSearchElement}>
            <p>{AllInformationsJS.UxAuditPart.UxAuditHeader}</p>
            <div className={styles.detailedSearchLaptopVersion}>
              <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
              <img src={Arrow} alt="Ux Audit Arrow" />
            </div>
          </div>
          <div className={styles.buttonsAndTextTabletVersion}>
            <div className={styles.buttonsTabletVersion}>
              <button>{AllInformationsJS.UxAuditPart.UXButton1}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton2}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton3}</button>
            </div>
            <div className={styles.arrowAndSearchElementsTabletVersion}>
              <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
              <img src={Arrow} alt="Ux Audit Arrow" />
            </div>
          </div>
          <div className={styles.uxAuditTextContainer}>
            <p className={styles.uxAuditText}>
              {AllInformationsJS.UxAuditPart.UxAuditText}
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.firstPartButtons}>
              <button>{AllInformationsJS.UxAuditPart.UXButton1}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton2}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton3}</button>
            </div>
            <div className={styles.secondPartButtons}>
              <button>{AllInformationsJS.UxAuditPart.UXButton4}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton5}</button>
              <button>{AllInformationsJS.UxAuditPart.UXButton6}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailedSearchMobileVersion}>
        <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
        <img src={Arrow} alt="Ux Audit Arrow" />
      </div>
      <div></div>
    </div>
  );
}
