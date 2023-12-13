import styles from "./Team.module.scss";
import AllInformationsJS from "../../Informations";

export default function Team({ teamRef }) {
  return (
    <section ref={teamRef} className={styles.container}>
      <div className={styles.teamTextContainer}>
        <p>{AllInformationsJS.TeamPart.TeamText}</p>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.image_list}>
          {AllInformationsJS.TeamPart?.teamMates?.map((teamMate, index) => (
            <div key={index} className={styles.image_list_elements}>
              <img
                className={styles.image_item}
                src={teamMate.Img}
                alt={`Team ${index + 1}`}
              />
              <div className={styles.member_information}>
                <div className={styles.fullNameAndPositionElement}>
                  <p className={styles.fullNameElement}>{teamMate.FullName}</p>
                  <p className={styles.positionElement}>{teamMate.Position}</p>
                </div>
                <div className={styles.socialNetworks}>
                  <a target="_blank" href={teamMate.Instagram}>
                    <img
                      src={AllInformationsJS.TeamPart.InstagramIcon}
                      alt="instagram"
                    />
                  </a>
                  <a target="_blank" href={teamMate.Facebook}>
                    <img
                      src={AllInformationsJS.TeamPart.FaceBookIcon}
                      alt="facebook"
                    />
                  </a>
                  <a target="_blank" href={teamMate.LinkEdin}>
                    <img
                      src={AllInformationsJS.TeamPart.LinkEdinIcon}
                      alt="linkedin"
                    />
                  </a>
                  <a target="_blank" href={teamMate.TikTok}>
                    <img
                      src={AllInformationsJS.TeamPart.TikTokIcon}
                      alt="tiktok"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.image_list}>
          {AllInformationsJS.TeamPart?.teamMates?.map((teamMate, index) => (
            <div key={index} className={styles.image_list_elements}>
              <img
                className={styles.image_item}
                src={teamMate.Img}
                alt={`Team ${index + 1}`}
              />
              <div className={styles.member_information}>
                <div className={styles.fullNameAndPositionElement}>
                  <p className={styles.fullNameElement}>{teamMate.FullName}</p>
                  <p className={styles.positionElement}>{teamMate.Position}</p>
                </div>
                <div className={styles.socialNetworks}>
                  <a target="_blank" href={teamMate.Instagram}>
                    <img
                      src={AllInformationsJS.TeamPart.InstagramIcon}
                      alt="instagram"
                    />
                  </a>
                  <a target="_blank" href={teamMate.Facebook}>
                    <img
                      src={AllInformationsJS.TeamPart.FaceBookIcon}
                      alt="facebook"
                    />
                  </a>
                  <a target="_blank" href={teamMate.LinkEdin}>
                    <img
                      src={AllInformationsJS.TeamPart.LinkEdinIcon}
                      alt="linkedin"
                    />
                  </a>
                  <a target="_blank" href={teamMate.TikTok}>
                    <img
                      src={AllInformationsJS.TeamPart.TikTokIcon}
                      alt="tiktok"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.slider_scrollBar}>
        <div className={styles.scrollBar_track}>
          <div className={styles.scrollBar_thumb}></div>
        </div>
      </div>
    </section>
  );
}
