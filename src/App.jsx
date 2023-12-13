import { useRef } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import OurClients from "./Components/OurClients/OurClients";
import Services from "./Components/Services/Services";
import UxAudit from "./Components/UxAudit/UxAudit";
import Portfolio from "./Components/Portfolio/Portfolio";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import HeaderVideo from "./Components/Home/HeaderVideo";

function App() {
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

  return (
    <div>
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
        <Footer
          footerRef={refs.footerRef}
          handleScrollClick={handleScrollClick}
        />
      </main>
    </div>
  );
}

export default App;
