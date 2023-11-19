import styles from "./Team.module.scss";
import AllInformationsJS from "../../Informations";
import Team1 from "../../Images/TeamImage/team1.jpeg";
import Team2 from "../../Images/TeamImage/team2.avif";
import Team3 from "../../Images/TeamImage/team3.jpeg";
import Team4 from "../../Images/TeamImage/team4.jpeg";
import Team5 from "../../Images/TeamImage/team5.jpeg";
import InstagramIcon from "../../Images/TeamImage/socialNetworkIcons/Instagram.svg";
import FaceBookIcon from "../../Images/TeamImage/socialNetworkIcons/FaceBook.svg";
import LinkEdinIcon from "../../Images/TeamImage/socialNetworkIcons/LinkEdin.svg";
import TikTokIcon from "../../Images/TeamImage/socialNetworkIcons/TikTok.svg";

export default function Team({ teamRef }) {
  const slidesImages = [Team1, Team2, Team3, Team4, Team5];
  const teamMates = [
    {
      FullName: "Azad Mirzazada",
      Position: "Front-End Developer",
      Instagram: "1",
      Facebook: "2",
      LinkEdin: "3",
      TikTok: "4",
    },
    {
      FullName: "Said Aliyev",
      Position: "Front-End Developer",
      Instagram: "11",
      Facebook: "22",
      LinkEdin: "33",
      TikTok: "44",
    },
    {
      FullName: "Ismayil Suleymanov",
      Position: "Syber-Security",
      Instagram: "111",
      Facebook: "222",
      LinkEdin: "333",
      TikTok: "444",
    },
    {
      FullName: "Shakiyev Elchin",
      Position: "Tax Audit",
      Instagram: "1111",
      Facebook: "2222",
      LinkEdin: "3333",
      TikTok: "4444",
    },
    {
      FullName: "Habibov Yusif",
      Position: "Accountant",
      Instagram: "11111",
      Facebook: "22222",
      LinkEdin: "33333",
      TikTok: "44444",
    },
  ];

  return (
    <section ref={teamRef} className={styles.container}>
      <div className={styles.teamTextContainer}>
        <p>{AllInformationsJS.TeamPart.TeamText}</p>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.image_list}>
          {slidesImages.map((slidesImage, index) => (
            <div key={index} className={styles.image_list_elements}>
              <img
                className={styles.image_item}
                src={slidesImage}
                alt={`Team ${index + 1}`}
              />
              <div className={styles.member_information}>
                <div className={styles.fullNameAndPositionElement}>
                  <p className={styles.fullNameElement}>
                    {teamMates[index].FullName}
                  </p>
                  <p className={styles.positionElement}>
                    {teamMates[index].Position}
                  </p>
                </div>
                <div className={styles.socialNetworks}>
                  <a href={teamMates[index].Instagram}>
                    <img src={InstagramIcon} alt="" />
                  </a>
                  <a href={teamMates[index].Facebook}>
                    <img src={FaceBookIcon} alt="" />
                  </a>
                  <a href={teamMates[index].LinkEdin}>
                    <img src={LinkEdinIcon} alt="" />
                  </a>
                  <a href={teamMates[index].TikTok}>
                    <img src={TikTokIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.image_list}>
          {slidesImages.map((slidesImage, index) => (
            <div key={index} className={styles.image_list_elements}>
              <img
                className={styles.image_item}
                src={slidesImage}
                alt={`Team ${index + 1}`}
              />
              <div className={styles.member_information}>
                <div className={styles.fullNameAndPositionElement}>
                  <p className={styles.fullNameElement}>
                    {teamMates[index].FullName}
                  </p>
                  <p className={styles.positionElement}>
                    {teamMates[index].Position}
                  </p>
                </div>
                <div className={styles.socialNetworks}>
                  <a href={teamMates[index].Instagram}>
                    <img src={InstagramIcon} alt="" />
                  </a>
                  <a href={teamMates[index].Facebook}>
                    <img src={FaceBookIcon} alt="" />
                  </a>
                  <a href={teamMates[index].LinkEdin}>
                    <img src={LinkEdinIcon} alt="" />
                  </a>
                  <a href={teamMates[index].TikTok}>
                    <img src={TikTokIcon} alt="" />
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
