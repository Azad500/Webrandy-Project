import styles from "./SaveButton.module.scss";
import AllInformationsJS from "../../../Informations";

export default function SaveButton({ handleSubmit, isFormEmpty }) {
  return (
    <section className={styles.section}>
      <form className={styles.submitButton} onSubmit={handleSubmit}>
        <input
          className={styles.button}
          type="submit"
          value={AllInformationsJS.AdminPanel.SaveButton.SaveButtonText}
          disabled={isFormEmpty}
        />
      </form>
    </section>
  );
}
