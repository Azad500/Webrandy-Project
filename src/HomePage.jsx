import { useEffect, useRef } from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import HeaderVideo from "./Components/Home/HeaderVideo";
import Navbar from "./Components/Navbar/Navbar";
import OurClients from "./Components/OurClients/OurClients";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import UxAudit from "./Components/UxAudit/UxAudit";
import "./HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/ThunkApi/AsyncThunk";

export default function HomePage() {
  const refreshPage = () => {
    window.location.reload();
  };

  const refs = {
    navbarRef: useRef(null),
    servicesRef: useRef(null),
    uxAuditRef: useRef(null),
    portfolioRef: useRef(null),
    ourClientsRef: useRef(null),
    aboutUsRef: useRef(null),
    teamRef: useRef(null),
    blogRef: useRef(null),
    footerRef: useRef(null),
    contactRef: useRef(null),
  };

  const handleScrollClick = (refName) => {
    const refNames = refs[refName];
    refNames.current?.scrollIntoView({ behavior: "smooth" });
  };
  // ----------------Get Method--------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // const data = useSelector((state) => state.data.data);
  // console.log(data);
  // ------------------------------------
  return (
    <section>
      {/* {contents.map((content) => (
        <div key={content}>
          <p>{content.Tabtitle}</p>
        </div>
      ))} */}
      <Navbar
        handleScrollClick={handleScrollClick}
        refreshPage={refreshPage}
        navbarRef={refs.navbarRef}
      />
      <HeaderVideo />
      <main>
        <Services servicesRef={refs.servicesRef} />
        <UxAudit />
        {/* <Portfolio portfolioRef={refs.portfolioRef} /> */}
        <OurClients ourClientsRef={refs.ourClientsRef} />
        <AboutUs aboutUsRef={refs.aboutUsRef} />
        <Team teamRef={refs.teamRef} />
        {/* <Blog blogRef={refs.blogRef} /> */}
        <div className="footerContainer">
          <Footer
            footerRef={refs.footerRef}
            handleScrollClick={handleScrollClick}
          />
        </div>
      </main>
    </section>
  );
}
