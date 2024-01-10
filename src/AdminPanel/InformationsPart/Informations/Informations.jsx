import Footer from "../Footer/Footer";
import TabTitle from "../TabTitle/TabTitle";
import styles from "./Informations.module.scss";
import AllInformationsJS from "../../../Informations";

export default function Informations({
  handleAddInput,
  handleRemoveInput,
}) {
  return (
    <section className={styles.container}>
      <p>{AllInformationsJS.AdminPanel.Navbar.InformationsText}</p>
      <div className={styles.wrapper}>
        <TabTitle
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
        />
        <Footer />
      </div>
    </section>
  );
}
