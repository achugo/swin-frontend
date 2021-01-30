import React from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import FlexItem from "../../../components/flex/FlexItem";
import FlexWrap from "../../../components/flex/FlexWrap";
import suit_image from "../../../img-assets/suit-man.png";
import system_image from "../../../img-assets/system.png";
import banner_image from "../../../img-assets/banner-image.png";

const Wrapper = styled.div`
  height: auto;
`;

const TopSection = styled.div`
  margin-bottom: 5vh;
`;

const TopHeading = styled.h2`
  font-family: ${appFont.BOLD};
  color: #434343;

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

const TopLeft = styled.div`
  padding-left: 10vw;
  padding-top: 7vh;
`;

const Description = styled.h1`
  font-family: ${appFont.REGULAR};
  color: #434343;
  line-height: 2.1;
`;

const TopRight = styled.div`
  background-image: url(${suit_image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45vh;
`;

const BottomSection = styled.div`
  margin-bottom: 7vh;
  padding: 0 10vw;
`;

const BottomLeft = styled.div`
  min-height: 45vh;
  position: relative;

  & img {
    max-width: 100%;
  }
`;

const BottomRight = styled.div`
  position: relative;
`;

const Span = styled.div`
  color: #434343;
  font-family: ${appFont.REGULAR};
  text-align: right;
  line-height: 1.6;
  font-size: 22px;
`;

const BannerSection = styled.div`
  background-image: url(${banner_image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45vh;
`;

const WhoWeAre = () => {
  return (
    <Wrapper id="whoweare">
      <TopSection>
        <FlexWrap>
          <FlexItem flex={1}>
            <TopLeft>
              <TopHeading>Who we are</TopHeading>
              <Description>
                SWiN is a technology start- <br />
                up aiming to take Software <br /> ‘End User - Vendor’ <br />{" "}
                engagement to the next level.
              </Description>
            </TopLeft>
          </FlexItem>
          <FlexItem flex={1}>
            <TopRight></TopRight>
          </FlexItem>
        </FlexWrap>
      </TopSection>
      <BottomSection>
        <FlexWrap>
          <FlexItem flex={1}>
            <BottomLeft>
              <img src={system_image} alt="system" />
            </BottomLeft>
          </FlexItem>
          <FlexItem flex={1}>
            <Span>
              Our goal is simple - ensure end users have ‘Anytime Access’ to the
              information and content they require to help make better informed
              procurement choices, while also supporting vendors in increasing
              their product visibility, especially during challenging periods of
              cost reductions and forced travel restrictions - as is currently
              being experienced. Put differently, we’re looking to move the ‘End
              user - Product content’ interaction part of the procurement
              process, online.
            </Span>
          </FlexItem>
        </FlexWrap>
      </BottomSection>
      <FlexWrap>
        <FlexItem flex={1}>
          <BannerSection />
        </FlexItem>
      </FlexWrap>
    </Wrapper>
  );
};

export default WhoWeAre;
