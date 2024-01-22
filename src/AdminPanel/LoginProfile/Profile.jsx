import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.scss";
import AllInformationsJS from "../../Informations";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../Redux/features/States/slice";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function UserName() {
    const inputTexts = document.getElementById("textsPart");
    const passwordsTexts = document.getElementById("passwordsText");
    if (inputTexts.value === "123" && passwordsTexts.value === "123") {
      localStorage.setItem("isAuthenticated", "true");
      dispatch(setIsAuthenticated(true));
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
