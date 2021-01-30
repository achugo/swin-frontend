import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import FlexItem from "../../../components/flex/FlexItem";
import FlexWrap from "../../../components/flex/FlexWrap";

const Wrapper = styled.div`
  background: var(--unnamed-color-334a90) 0% 0% no-repeat padding-box;
  background: #334a90 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 4em 10vw;
`;

const TopSection = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 1em;
  color: white;
  font-family: ${appFont.REGULAR};
`;

const MiddleSection = styled.div`
  margin-top: 2em;

  a {
    color: white;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
  }
`;
const Header = styled.h5`
  color: white;
  font-family: ${appFont.MEDIUM};
`;

const Footer = () => {
  return (
    <Wrapper>
      <TopSection>
        <FlexWrap>
          <FlexWrap flex={3}>Categories</FlexWrap>
          <FlexWrap flex={1}></FlexWrap>
        </FlexWrap>
      </TopSection>
      <MiddleSection>
        <FlexWrap>
          <FlexItem item={1}>
            <Header>Contact</Header>
            <Link to="/">Office Locations</Link>
            <Link to="/">Office Locations</Link>
            <Header>Contact</Header>
            <Link to="/">Office Locations</Link>
            <Link to="/">Office Locations</Link>
          </FlexItem>

          <FlexItem item={1}></FlexItem>
          <FlexItem item={1}></FlexItem>
          <FlexItem item={1}></FlexItem>
          <FlexItem item={1}></FlexItem>
        </FlexWrap>
      </MiddleSection>
    </Wrapper>
  );
};

export default Footer;
