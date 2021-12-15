import React, { useEffect } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import Navigation from "../../components/nav/Navbar";
import chat_url from "../../img-assets/chat.png";
import SearchResult from "../../components/search-results/SearchResult";
import SecondHero from "../corporate-website/hero/SecondHero";

const WrapLandingPage = styled.div`
  position: relative;

  .floating_icon {
    position: fixed;
    right: 10vw;
    bottom: 10vh;
    img {
      max-width: 120px;
    }
  }
`;

const LandingPage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <WrapLandingPage>
      <Navigation />

      <SecondHero />
      <SearchResult />

      <div className="floating_icon">
        <img src={chat_url} alt="chat icon" />
      </div>
    </WrapLandingPage>
  );
};

export default LandingPage;
