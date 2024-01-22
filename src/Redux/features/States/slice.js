import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabTitle: "",
  mail1: "",
  mail2: "",
  phoneNumber1: "",
  phoneNumber2: "",
  phoneNumber3: "",
  address: "",
  instagramLink: "",
  facebookLink: "",
  linkedinLink: "",
  youtubeLink: "",
  favIconImg: "",
  logoLightImg: "",
  logoDarkImg: "",
  footerVideo: "",
  keywords: [{ id: 1, value: "" }],
  isAuthenticated: false,
};
export const statesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
    setTabTitle: (state, action) => {
      state.tabTitle = action.payload;
    },
    setMail1: (state, action) => {
      state.mail1 = action.payload;
    },
    setMail2: (state, action) => {
      state.mail2 = action.payload;
    },
    setPhoneNumber1: (state, action) => {
      state.phoneNumber1 = action.payload;
    },
    setPhoneNumber2: (state, action) => {
      state.phoneNumber2 = action.payload;
    },
    setPhoneNumber3: (state, action) => {
      state.phoneNumber3 = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setInstagramLink: (state, action) => {
      state.instagramLink = action.payload;
    },
    setFacebookLink: (state, action) => {
      state.facebookLink = action.payload;
    },
    setLinkedinLink: (state, action) => {
      state.linkedinLink = action.payload;
    },
    setYoutubeLink: (state, action) => {
      state.youtubeLink = action.payload;
    },
    setFavIconImg: (state, action) => {
      state.favIconImg = action.payload;
    },
    setLogoLightImg: (state, action) => {
      state.logoLightImg = action.payload;
    },
    setLogoDarkImg: (state, action) => {
      state.logoDarkImg = action.payload;
    },
    setFooterVideo: (state, action) => {
      state.footerVideo = action.payload;
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
export const {
  setKeywords,
  setFooterVideo,
  setLogoDarkImg,
  setLogoLightImg,
  setFavIconImg,
  setYoutubeLink,
  setLinkedinLink,
  setFacebookLink,
  setInstagramLink,
  setAddress,
  setPhoneNumber3,
  setPhoneNumber2,
  setPhoneNumber1,
  setMail2,
  setMail1,
  setTabTitle,
  setShowAlert,
  setIsAuthenticated,
} = statesSlice.actions;
export default statesSlice.reducer;
