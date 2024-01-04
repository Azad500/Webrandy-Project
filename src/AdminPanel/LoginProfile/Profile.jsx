import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.scss";
import AllInformationsJS from "../../Informations";

export default function Profile() {
  const navigate = useNavigate();

  function UserName() {
    const inputTexts = document.getElementById("textsPart");
    const passwordsTexts = document.getElementById("passwordsText");
    if (
      inputTexts.value === "Azad500" &&
      passwordsTexts.value === "Mirzazada500"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/adminPanel");
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.borderContainer}>
        <p>{AllInformationsJS.LogInParts.LoginText}</p>
        <div className={styles.inputsContainer}>
          <input
            type="text"
            name="textPart"
            id="textsPart"
            placeholder={AllInformationsJS.LogInParts.FirstName}
          />
          <input
            type="password"
            name="passwordText"
            id="passwordsText"
            placeholder={AllInformationsJS.LogInParts.Password}
          />
          <input
            type="submit"
            name="submitButton"
            className={styles.submitButton}
            onClick={UserName} // Add the onClick event handler
          />
        </div>
      </div>
    </section>
  );
}
