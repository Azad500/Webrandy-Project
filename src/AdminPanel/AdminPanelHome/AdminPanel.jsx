import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AdminPanel.css";
import Home from "../Home/Home";
import Navbar from "../InformationsPart/Navbar/Navbar";
import SaveButton from "../InformationsPart/SaveButton/SaveButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  setAddress,
  setFacebookLink,
  setInstagramLink,
  setKeywords,
  setLinkedinLink,
  setMail1,
  setMail2,
  setPhoneNumber1,
  setPhoneNumber2,
  setPhoneNumber3,
  setTabTitle,
  setYoutubeLink,
} from "../../Redux/features/States/slice";
import { fetchData, postData } from "../../Redux/ThunkApi/AsyncThunk";
export default function AdminPanel() {
  const dispatch = useDispatch();
  const tabTitle = useSelector((state) => state.states.tabTitle);
  const mail1 = useSelector((state) => state.states.mail1);
  const mail2 = useSelector((state) => state.states.mail2);
  const phoneNumber1 = useSelector((state) => state.states.phoneNumber1);
  const phoneNumber2 = useSelector((state) => state.states.phoneNumber2);
  const phoneNumber3 = useSelector((state) => state.states.phoneNumber3);
  const address = useSelector((state) => state.states.address);
  const instagramLink = useSelector((state) => state.states.instagramLink);
  const facebookLink = useSelector((state) => state.states.facebookLink);
  const linkedinLink = useSelector((state) => state.states.linkedinLink);
  const youtubeLink = useSelector((state) => state.states.youtubeLink);
  const favIconImg = useSelector((state) => state.states.favIconImg);
  const logoLightImg = useSelector((state) => state.states.logoLightImg);
  const logoDarkImg = useSelector((state) => state.states.logoDarkImg);
  const footerVideo = useSelector((state) => state.states.footerVideo);
  const keywords = useSelector((state) => state.states.keywords);

  const isFormEmpty =
    !tabTitle &&
    !mail1 &&
    !mail2 &&
    !phoneNumber1 &&
    !phoneNumber2 &&
    !phoneNumber3 &&
    !address &&
    !instagramLink &&
    !facebookLink &&
    !linkedinLink &&
    !youtubeLink;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormEmpty) {
      console.log("Formda doldurulmuş bir alan yok.");
      toast.error("Heç bir simvol əlavə edilmədi");
      return;
    }
    const metaTagKeywords = keywords.map((k) => k.value);
    dispatch(
      postData({
        Tabtitle: tabTitle,
        MetaTagKeywords: metaTagKeywords,
        Mail1: mail1,
        Mail2: mail2,
        PhoneNumber1: phoneNumber1,
        PhoneNumber2: phoneNumber2,
        PhoneNumber3: phoneNumber3,
        Address: address,
        InstagramLink: instagramLink,
        FacebookLink: facebookLink,
        LinkedinLink: linkedinLink,
        YoutubeLink: youtubeLink,
        FavIconImg: favIconImg,
        LogoLightImg: logoLightImg,
        LogoDarkImg: logoDarkImg,
        FooterVideo: footerVideo,
      })
    );
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      dispatch(setTabTitle(latestData.tabTitle || ""));
      dispatch(setMail1(latestData.mail1 || ""));
      dispatch(setMail2(latestData.mail2 || ""));
      dispatch(setPhoneNumber1(latestData.phoneNumber1 || ""));
      dispatch(setPhoneNumber2(latestData.phoneNumber2 || ""));
      dispatch(setPhoneNumber3(latestData.phoneNumber3 || ""));
      dispatch(setAddress(latestData.address || ""));
      dispatch(setInstagramLink(latestData.instagramLink || ""));
      dispatch(setFacebookLink(latestData.facebookLink || ""));
      dispatch(setLinkedinLink(latestData.linkedinLink || ""));
      dispatch(setYoutubeLink(latestData.youtubeLink || ""));
      if (
        latestData.MetaTagKeywords &&
        Array.isArray(latestData.MetaTagKeywords)
      ) {
        const transformedKeywords = latestData.MetaTagKeywords.map(
          (keyword, index) => ({
            id: index,
            value: keyword,
          })
        );
        dispatch(setKeywords(transformedKeywords));
      }
    }
  }, [data]);
  // ---------------------ForTabTitle---------------
  const handleAddInput = (e) => {
    e.preventDefault();
    const newKeyword = { id: keywords.length + 1, value: "" };
    dispatch(setKeywords([...keywords, newKeyword]));
  };

  const handleRemoveInput = (id) => {
    const updatedKeywords = keywords.filter((keyword) => keyword.id !== id);
    dispatch(setKeywords(updatedKeywords));
  };

  return (
    <div className="container">
      <Navbar />
      <Home
        handleAddInput={handleAddInput}
        handleRemoveInput={handleRemoveInput}
      />
      <div className="saveButton">
        <SaveButton handleSubmit={handleSubmit} />
      </div>
      <ToastContainer />
    </div>
  );
}
