import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as NoAnalysis } from "../../img-assets/no-analysis.svg";
import { LoaderSpinner } from "../auth/register/form/LoginForm";
import product_url from "../../img-assets/dummy-img.png";
import BtnAdd from "../../components/button/BtnAdd";

const Center = styled.div`
  margin: 0px auto;
  padding: 4em 1em;
  text-align: center;
`;

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 0px auto;
  padding: 4em 1em;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: ${appFont.MEDIUM};
  margin-bottom: 1em;
`;

const SubHeading = styled.h4`
  font-family: ${appFont.REGULAR};
  margin-bottom: 2em;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: transparent linear-gradient(101deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  opacity: 1;
  font-family: ${appFont.REGULAR};
  color: white;
  padding: 1em 2em;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 2em 0;
  padding: 1em 1em;

  & div {
    text-align: left;
  }
`;

const Name = styled.div`
  display: inline-block;
  margin-left: 2em;
  cursor: pointer;
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
    font-size: 17px;
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
    font-size: 13px;
    font-family: ${appFont.ITALICS};
    font-weight: lighter;
  }
`;

const Stages = styled.div`
  display: block;
  cursor: pointer;

  h2 {
    display: inline-block;
    font-family: ${appFont.MEDIUM};
    color: ${appColors.DARKHEADER};
    padding-left: 20px;
  }

  span {
    font-size: 17px;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Analyze = (props) => {
  const [all_reviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch_reviews();
  }, []);

  const fetch_reviews = async () => {
    setLoading(true);

    const status = await api.get("reviews");
    if (status.status) {
      setLoading(false);
      setAllReviews(status.data);
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
        toast.error(status.message);
      }
    }
  };

  return (
    <Main>
      {loading && (
        <Center>
          <LoaderSpinner />
        </Center>
      )}

      {!loading && all_reviews.length === 0 && (
        <>
          <Wrapper>
            <Heading>You Haven't Analyzed Any Products</Heading>
            <SubHeading>
              Analyze a product to view a list of Analyzed Products
            </SubHeading>
            <NoAnalysis />
            <Section>
              <Button
                onClick={() => props.history.push("/dashboard/analyze-product")}
              >
                Evaluate Product
              </Button>
            </Section>
          </Wrapper>
        </>
      )}

      {!loading && all_reviews.length > 0 && (
        <>
          <Center>
            <div style={{ paddingBottom: "2em" }}>
              <BtnAdd
                click={() => props.history.push("/dashboard/analyze-product")}
              >
                New Analysis
              </BtnAdd>
            </div>

            {all_reviews.map((item) => (
              <Product>
                <FlexWrap>
                  <FlexItem flex={3}>
                    <Name
                      onClick={() =>
                        props.history.push(
                          `/dashboard/evaluation-summary/${item.id}`
                        )
                      }
                    >
                      <Img src={item.product.logo} alt="product img" />
                      <Desc>
                        <h3>{item.product.name}</h3>
                        <span>Oil and Gas</span>
                      </Desc>
                    </Name>
                  </FlexItem>
                  <FlexItem flex={2}>
                    <Stages
                      onClick={() =>
                        props.history.push(
                          `/dashboard/product-evaluation/${item.product_id}`
                        )
                      }
                    >
                      <span>Stages</span>
                      <h2>{item.stages}</h2>
                    </Stages>
                  </FlexItem>
                  <FlexItem flex={2}>
                    {/* <Status>
                      <h5>0/2</h5>
                      <span>Pending</span>
                    </Status> */}
                  </FlexItem>
                </FlexWrap>
              </Product>
            ))}
          </Center>
        </>
      )}
    </Main>
  );
};

export default withRouter(Analyze);
