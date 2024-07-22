import styles from "./UxAudit.module.scss";
import AllInformationsJS from "../../Informations";
import { useEffect } from "react";
import gsap from "gsap";

export default function UxAudit() {
  useEffect(() => {
    gsap.to(".uxAuditImage", {
      y: 0,
      duration: 1.2,
    });
    gsap.to(".uxAuditTextsContainer", {
      x: 0,
      duration: 1.2,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.uxAuditTextMobileVersion}>
        <p>{AllInformationsJS.UxAuditPart.UxAuditHeader}</p>
      </div>
      <div className={styles.uxAuditContainer}>
        <div className={`${styles.uxAuditImage} uxAuditImage`}>
          <img
            src={AllInformationsJS.UxAuditPart.UxAuditImage}
            alt="UX Audit Image"
          />
        </div>
        <div
          className={`${styles.uxAuditTextsContainer} uxAuditTextsContainer`}
        >
          <div className={styles.headerTextAndSearchElement}>
            <p>{AllInformationsJS.UxAuditPart.UxAuditHeader}</p>
            <div className={styles.detailedSearchLaptopVersion}>
              <p>{AllInformationsJS.SameParts.DetailedSearch}</p>
              <img
                src={AllInformationsJS.UxAuditPart.ArrowInUxAudit}
                alt="Ux Audit Arrow"
              />
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
              <img
                src={AllInformationsJS.UxAuditPart.ArrowInUxAudit}
                alt="Ux Audit Arrow"
              />
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
        <img
          src={AllInformationsJS.UxAuditPart.ArrowInUxAudit}
          alt="Ux Audit Arrow"
        />
      </div>
      <div></div>
    </div>
  );
}
