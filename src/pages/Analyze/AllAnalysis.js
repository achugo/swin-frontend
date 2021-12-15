import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as Plus } from "../../img-assets/plus.svg";
import product_url from "../../img-assets/dummy-img.png";
import { appColors } from "../../appTheme/appTheme";
import { ReactComponent as BackIcon } from "../../img-assets/backIcon.svg";

const Wrapper = styled.div`
  text-align: center;
  padding: 4em 1em;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Button = styled.button`
  outline: none;
  margin-right: 3em;
  border: none;
  background: transparent linear-gradient(101deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  opacity: 1;
  font-family: ${appFont.REGULAR};
  color: white;
  padding: 0.7em 2em;
  float: right;
  clear: both;

  &::focus {
    outline: none;
    border: none;
  }
  span {
    position: relative;
    bottom: 6px;
  }
  svg {
    max-height: 23px;
  }
`;

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  padding: 1em;
  margin: 2em 0;
  cursor: pointer;
`;

const Name = styled.div`
  display: inline-block;
`;

const Img = styled.img`
  display: inline-block;
  max-width: 80px;
`;

const Desc = styled.div`
  display: inline-block;
  padding-left: 20px;
  text-align: left;
  position: relative;
  bottom: 15px;

  h3 {
    font-family: ${appFont.MEDIUM};
    color: ${appColors.DARKHEADER};
  }

  span {
    font-size: 18px;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Stages = styled.div`
  display: block;

  h2 {
    display: inline-block;
    font-family: ${appFont.MEDIUM};
    color: ${appColors.DARKHEADER};
    padding-left: 20px;
  }

  span {
    font-size: 18px;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Status = styled.div`
  padding-right: 3em;
  display: block;
  position: relative;
  top: 18px;
  text-align: right;
  h5 {
    font-family: ${appFont.LIGHTPOPPING};
    margin-bottom: 0px !important;
  }

  span {
    font-size: 14px;
    font-family: ${appFont.ITALICS};
    font-weight: lighter;
  }
`;

const BackWrapper = styled.div`
  margin-top: 50px;
  padding-left: 50px;
  svg {
    max-width: 40px;
    cursor: pointer;
  }
`;

const Analyze = (props) => {
  const go_back_to_dashboard = () => {
    props.history.push(`/dashboard/`);
  };
  return (
    <Main>
      <Wrapper>
        <>
          <Section style={{ height: "50px" }}>
            <BackWrapper>
              <BackIcon onClick={go_back_to_dashboard} />
            </BackWrapper>
            <Button>
              <span>New Analysis</span>
              <Plus />
            </Button>
          </Section>

          <Section>
            <Product>
              <FlexWrap>
                <FlexItem flex={1}>
                  <Name>
                    <Img src={product_url} alt="product img" />
                    <Desc>
                      <h3>Sokimo</h3>
                      <span>Marketing Analytics</span>
                    </Desc>
                  </Name>
                </FlexItem>
                <FlexItem flex={1}>
                  <Stages>
                    <span>Stages</span>
                    <h2>10</h2>
                  </Stages>
                </FlexItem>
                <FlexItem flex={1}>
                  <Status>
                    <h5>0/2</h5>
                    <span>Pending</span>
                  </Status>
                </FlexItem>
              </FlexWrap>
            </Product>
            <Product>
              <FlexWrap>
                <FlexItem flex={1}>
                  <Name>
                    <Img src={product_url} alt="product img" />
                    <Desc>
                      <h3>Sokimo</h3>
                      <span>Marketing Analytics</span>
                    </Desc>
                  </Name>
                </FlexItem>
                <FlexItem flex={1}>
                  <Stages>
                    <span>Stages</span>
                    <h2>10</h2>
                  </Stages>
                </FlexItem>
                <FlexItem flex={1}>
                  <Status>
                    <h5>0/2</h5>
                    <span>Pending</span>
                  </Status>
                </FlexItem>
              </FlexWrap>
            </Product>
            <Product>
              <FlexWrap>
                <FlexItem flex={1}>
                  <Name>
                    <Img src={product_url} alt="product img" />
                    <Desc>
                      <h3>Sokimo</h3>
                      <span>Marketing Analytics</span>
                    </Desc>
                  </Name>
                </FlexItem>
                <FlexItem flex={1}>
                  <Stages>
                    <span>Stages</span>
                    <h2>10</h2>
                  </Stages>
                </FlexItem>
                <FlexItem flex={1}>
                  <Status>
                    <h5>0/2</h5>
                    <span>Pending</span>
                  </Status>
                </FlexItem>
              </FlexWrap>
            </Product>
            <Product>
              <FlexWrap>
                <FlexItem flex={1}>
                  <Name>
                    <Img src={product_url} alt="product img" />
                    <Desc>
                      <h3>Sokimo</h3>
                      <span>Marketing Analytics</span>
                    </Desc>
                  </Name>
                </FlexItem>
                <FlexItem flex={1}>
                  <Stages>
                    <span>Stages</span>
                    <h2>10</h2>
                  </Stages>
                </FlexItem>
                <FlexItem flex={1}>
                  <Status>
                    <h5>0/2</h5>
                    <span>Pending</span>
                  </Status>
                </FlexItem>
              </FlexWrap>
            </Product>
          </Section>
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(Analyze);
