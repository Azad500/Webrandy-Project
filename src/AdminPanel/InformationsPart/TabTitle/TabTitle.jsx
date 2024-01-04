import styles from "./TabTitle.module.scss";
import AllInformationsJS from "../../../Informations";
import FileInputWithPreview from "./ChooseFile";

export default function TabTitle({
  tabTitle,
  setTabTitle,
  keywords,
  setKeywords,
  handleAddInput,
  handleRemoveInput,
  setFavIconImg,
  setLogoLightImg,
  setLogoDarkImg,
}) {
  return (
    <section className={styles.informations}>
      <form className={styles.form}>
        <div>
          <label htmlFor="tabTitle">
            {AllInformationsJS.AdminPanel.TabTitle.TabTitleText}
          </label>
          <input
            className={styles.TabTitle}
            type="text"
            id="tabTitle"
            name="tabTitle"
            value={tabTitle}
            onChange={(e) => setTabTitle(e.target.value)}
            placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
          />
        </div>
        <div>
          <label htmlFor="metaTagKeywords">
            {AllInformationsJS.AdminPanel.TabTitle.MetaTagKeywordsText}
          </label>
          {keywords.map((keyword) => (
            <div key={keyword.id} className={styles.TagInput}>
              <input
                placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
                type="text"
                name="keywords"
                id="metaTagKeywords"
                value={keyword.value}
                onChange={(e) => {
                  const updatedKeywords = keywords.map((k) =>
                    k.id === keyword.id ? { ...k, value: e.target.value } : k
                  );
                  setKeywords(updatedKeywords);
                }}
              />
              <button onClick={() => handleRemoveInput(keyword.id)}>
                <img
                  src={AllInformationsJS.AdminPanel.TabTitle.inputButton}
                  alt="Input Button"
                />
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleAddInput} className={styles.addInputButton}>
          <img
            src={AllInformationsJS.AdminPanel.TabTitle.addInputButton}
            alt="Add Input Button"
          />
        </button>
      </form>
      <div>
        <FileInputWithPreview
          setFavIconImg={setFavIconImg}
          setLogoLightImg={setLogoLightImg}
          setLogoDarkImg={setLogoDarkImg}
        />
      </div>
    </section>
  );
}
