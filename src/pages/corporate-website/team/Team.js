import React from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";

import TeamCarousel from "./TeamCarousel";

const Wrapper = styled.div`
  margin-bottom: 5vh;
  margin-top: 5vh;
  height: auto;
  padding: 0 10vw;
`;

const TopSection = styled.div`
  margin-bottom: 5vh;
`;

const TopHeading = styled.h2`
  font-family: ${appFont.BOLD};
  color: #434343;
  margin-bottom: 6vh;

  &:after {
    display: block;
    content: "";
    background: transparent linear-gradient(96deg, #00bbd5 0%, #35eee3 100%) 0%
      0% no-repeat padding-box;
    height: 10px;
    width: 80px;
    margin-top: 10px;
  }
`;

const Team = () => {
  return (
    <Wrapper id="team">
      <TopHeading>Team</TopHeading>
      <TeamCarousel />
    </Wrapper>
  );
};

export default Team;
