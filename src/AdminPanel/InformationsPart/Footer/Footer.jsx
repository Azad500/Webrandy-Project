import { useRef, useState } from "react";
import stylesFooter from "./Footer.module.scss";
import styles from "../TabTitle/ChooseFile.module.scss";
import AllInformationsJS from "../../../Informations";

export default function Footer({
  mail1,
  mail2,
  phoneNumber1,
  phoneNumber2,
  phoneNumber3,
  address,
  instagramLink,
  facebookLink,
  linkedinLink,
  youtubeLink,
  setMail1,
  setMail2,
  setPhoneNumber1,
  setPhoneNumber2,
  setPhoneNumber3,
  setAddress,
  setInstagramLink,
  setFacebookLink,
  setLinkedinLink,
  setYoutubeLink,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewURL(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewURL(null);
    }
  };

  const handleCustomButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreviewURL(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <section className={stylesFooter.FooterSection}>
      <h3>{AllInformationsJS.AdminPanel.Footer.Footer}</h3>
      <form>
        <div>
          <div className={styles["file-input-container"]}>
            <label htmlFor="fileInput">
              {AllInformationsJS.AdminPanel.Footer.FooterVideo}
            </label>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button type="button" onClick={handleCustomButtonClick}>
              {AllInformationsJS.AdminPanel.SameParts.ChooseFile}
            </button>
            {selectedFile && (
              <div>
                <p>{AllInformationsJS.AdminPanel.SameParts.SelectedFile}</p>
                <img src={previewURL} alt="Dosya Önizleme" />
                <button type="button" onClick={handleDelete}>
                  {AllInformationsJS.AdminPanel.SameParts.Delete}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={stylesFooter.inputsAndTexts}>
          <div>
            <label htmlFor="Mail1">
              {AllInformationsJS.AdminPanel.Footer.Mail1}
            </label>
            <input
              type="text"
              id="Mail1"
              value={mail1}
              onChange={(e) => setMail1(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Mail2">
              {AllInformationsJS.AdminPanel.Footer.Mail2}
            </label>
            <input
              type="text"
              id="Mail2"
              value={mail2}
              onChange={(e) => setMail2(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber1">
              {AllInformationsJS.AdminPanel.Footer.PhoneNumber1}
            </label>
            <input
              type="text"
              id="PhoneNumber1"
              value={phoneNumber1}
              onChange={(e) => setPhoneNumber1(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber2">
              {AllInformationsJS.AdminPanel.Footer.PhoneNumber2}
            </label>
            <input
              type="text"
              id="PhoneNumber2"
              value={phoneNumber2}
              onChange={(e) => setPhoneNumber2(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber3">
              {AllInformationsJS.AdminPanel.Footer.PhoneNumber3}
            </label>
            <input
              type="text"
              id="PhoneNumber3"
              value={phoneNumber3}
              onChange={(e) => setPhoneNumber3(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Adress">
              {AllInformationsJS.AdminPanel.Footer.Address}
            </label>
            <input
              type="text"
              id="Adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Instagramlink">
              {AllInformationsJS.AdminPanel.Footer.InstagramLink}
            </label>
            <input
              type="text"
              id="Instagramlink"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Facebooklink">
              {AllInformationsJS.AdminPanel.Footer.FacebookLink}
            </label>
            <input
              type="text"
              id="Facebooklink"
              value={facebookLink}
              onChange={(e) => setFacebookLink(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Linkedinlink">
              {AllInformationsJS.AdminPanel.Footer.LinkedinLink}
            </label>
            <input
              type="text"
              id="Linkedinlink"
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Youtubelink">
              {AllInformationsJS.AdminPanel.Footer.YoutubeLink}
            </label>
            <input
              type="text"
              id="Youtubelink"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              placeholder={AllInformationsJS.AdminPanel.Navbar.WebrandyTitle}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
