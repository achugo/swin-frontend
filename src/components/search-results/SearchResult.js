import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../flex/FlexItem";
import FlexWrap from "../flex/FlexWrap";
import product_image from "../../img-assets/dummy1.svg";
import { ReactComponent as ActiveStar } from "../../img-assets/star-active.svg";
import { ReactComponent as InActiveStar } from "../../img-assets/inactive-star.svg";
import { ReactComponent as Like } from "../../img-assets/like-btn.svg";
import { appColors } from "../../appTheme/appTheme";
import bg_image from "../../img-assets/slick-bg.png";
import Loader from "react-loader-spinner";
import { LoaderSpinner } from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  margin: 0px 10vw;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0px 15px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4em 0 2em 0;
`;

const Heading = styled.h2`
  color: #070a13;
  font-family: ${appFont.MEDIUM};
  display: inline;
  padding-left: 7px;
`;

// const Count = styled.span`
//   color: #8e8e8e;
//   font-style: italic;
//   font-family: ${appFont.LIGHTPOPPING};
// `;

const StyledResults = styled.div`
  position: relative;
  margin-top: 2em;
`;

const SearchItem = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  overflow: hidden;
  margin: 7px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  /* height: 170px; */
  height: 170px;
  display: block;
  width: 100%;
`;

const ProductDescription = styled.div`
  position: relative;
  padding: 0.7em 1.5em;
  min-height: 143px;
`;

const Rating = styled.div`
  margin: 4px 0;

  svg {
    margin-right: 3px;
  }
`;

const LikeSection = styled.div`
  svg {
    max-width: 17px;
    position: relative;
    top: 3px;
  }
  span {
    display: inline-block;
    padding-left: 7px;
    position: relative;
    bottom: 2px;
    font-size: 12px;
    color: #070a13;
    font-family: ${appFont.REGULAR};
  }
`;

const ProductName = styled.h3`
  color: black;
  font-family: ${appFont.MEDIUM};
  margin-bottom: 5px;
  margin-top: 15px;
`;

const Category = styled.span`
  position: relative;
  margin-bottom: 10px;
  display: block;
  font-family: ${appFont.LIGHTPOPPING};
`;

const Center = styled.div`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;

const SeeMore = styled.button`
  background-color: #3f9aff !important;
  color: white !important;
  font-size: 17px;
  border-radius: 10px;
  font-family: ${appFont.MEDIUM};
  padding: 0.5em 2.2em;
  outline: none;
  float: right;
  border: none;

  @media screen and (max-width: 768px) {
    padding: 0.5em 1.2em;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchResult = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch_public_products();
  }, []);

  const fetch_public_products = async () => {
    setLoading(true);
    const status = await api.get(`guest/products/`);
    if (status.status) {
      setLoading(false);
      setProducts(status);
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
      }
    }
  };

  console.log("prodd", products);

  return (
    <Container>
      {loading && (
        <Center>
          <LoaderSpinner />
        </Center>
      )}
      {!loading && (
        <>
          <Wrapper>
            <HeaderSection>
              <Heading>Suggested for you</Heading>
              <SeeMore>See More</SeeMore>
              {/* <Count>53 Softwares</Count> */}
            </HeaderSection>
            <StyledResults>
              <div class="ui grid five column grid stackable">
                {products &&
                  products.data.length > 0 &&
                  products.data.slice(0, 5).map((item) => (
                    <div className="column">
                      <SearchItem
                        onClick={() =>
                          props.history.push(`/softwares/${item.id}`)
                        }
                      >
                        <ProductImage src={item.logo} alt="product image" />
                        <ProductDescription>
                          <FlexWrap>
                            <FlexItem flex={4}>
                              <Rating>
                                <ActiveStar />
                                <ActiveStar />
                                <ActiveStar />
                                <ActiveStar />
                                <InActiveStar />
                              </Rating>
                            </FlexItem>
                            <FlexItem item={1}>
                              <LikeSection>
                                <Like />
                                <span>978</span>
                              </LikeSection>
                            </FlexItem>
                          </FlexWrap>

                          <ProductName>{item.name}</ProductName>
                          <Category>{item.category}</Category>
                        </ProductDescription>
                      </SearchItem>
                    </div>
                  ))}
              </div>
            </StyledResults>
          </Wrapper>

          <Wrapper>
            <HeaderSection>
              <Heading>Newly Added Fields</Heading>
              <SeeMore>See More</SeeMore>
              {/* <Count>53 Softwares</Count> */}
            </HeaderSection>
            <StyledResults>
              <div class="ui grid five column grid stackable">
                {products &&
                  products.data.length > 0 &&
                  products.data.slice(5, 10).map((item) => (
                    <div className="column">
                      <SearchItem
                        onClick={() =>
                          props.history.push(`/softwares/${item.id}`)
                        }
                      >
                        <ProductImage src={item.logo} alt="product image" />
                        <ProductDescription>
                          <FlexWrap>
                            <FlexItem flex={4}>
                              <Rating>
                                <ActiveStar />
                                <ActiveStar />
                                <ActiveStar />
                                <ActiveStar />
                                <InActiveStar />
                              </Rating>
                            </FlexItem>
                            <FlexItem item={1}>
                              <LikeSection>
                                <Like />
                                <span>978</span>
                              </LikeSection>
                            </FlexItem>
                          </FlexWrap>

                          <ProductName>{item.name}</ProductName>
                          <Category>{item.category}</Category>
                        </ProductDescription>
                      </SearchItem>
                    </div>
                  ))}
              </div>
            </StyledResults>
          </Wrapper>
        </>
      )}
    </Container>
  );
};

export default withRouter(SearchResult);
