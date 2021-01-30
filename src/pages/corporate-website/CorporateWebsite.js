import React from "react";
import styled from "styled-components";
import VideoPlayer from "../../components/VideoPlayer";
import CorporateNav from "../../components/website-nav/CorporateNav";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import HeroVideo from "./hero/Hero";
import Mission from "./mission-vission/Mission";
import Team from "./team/Team";
import WhoWeAre from "./who-we-are/WhoWeAre";

const Wrapper = styled.div`
  position: relative;
`;

const CorporateWebsite = () => {
  return (
    <Wrapper>
      <CorporateNav />
      <HeroVideo />
      <WhoWeAre />
      <Mission />
      <Team />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default CorporateWebsite;
