import React from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import { ReactComponent as Dart } from "../../../img-assets/dart.svg";

const Wrapper = styled.div`
  margin: 0px auto;
  text-align: center;
  background: transparent linear-gradient(180deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
`;

const TopSection = styled.div`
  padding: 3em 0 1em 0;

  svg {
    max-width: 200px;
  }
`;

const ButtomSection = styled.div`
  padding-bottom: 4em;

  h3 {
    font-family: ${appFont.MEDIUM};
    color: white;
  }

  span {
    display: block;
    padding: 1em;
    color: white;
    font-size: 18px;
    font-family: ${appFont.REGULAR};
  }
`;

const Mission = () => {
  return (
    <Wrapper id="mission">
      <TopSection>
        <Dart />
      </TopSection>
      <ButtomSection>
        <h3>Mission</h3>
        <span>
          Leveraging Digital Collateral, on a platform where it is fair game for
          all Vendors, we are on a mission <br /> to ensure Software end users
          are kept well informed - supporting them in their bid to make quicker{" "}
          <br /> and smarter purchase decisions - by significantly shortening
          the typical sales cycle.
        </span>
      </ButtomSection>
    </Wrapper>
  );
};

export default Mission;
