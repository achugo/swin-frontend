import React, { useState } from "react";
import testingImage from "../../img-assets/product-image.png";
import { Button, Rating } from "semantic-ui-react";
import Description from "../StyledComponents/DescriptionParagraph";
import { ReactComponent as InActiveStar } from "../../img-assets/inactive-star.svg";
import { ReactComponent as Likey } from "../../img-assets/like.svg";
import { ReactComponent as ActiveStar } from "../../img-assets/star-active.svg";
import { ReactComponent as CompanyProfile } from "../../img-assets/company-profile.svg";
import { ReactComponent as Like } from "../../img-assets/like-btn.svg";
import { ReactComponent as Evaluate } from "../../img-assets/evaluatee.svg";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { useRouteMatch, withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import Evaluation from "../modals/Evaluation";
import { url_base } from "../../api/api";
import SalesModal from "../modals/SalesModal";
import FlexWrap from "../flex/FlexWrap";
import RecommendSoftware from "../modals/Recommend";

const Wrapper = styled.div`
  padding-top: 40px;
  h3.heading {
    font-family: ${appFont.REGULAR};
  }
  h5.heading {
    font-family: ${appFont.LIGHTPOPPING};
    margin-top: -5px;
    margin-bottom: 70px;
  }
  .left__align {
    .column {
      button {
        text-align: left !important;
      }
    }
  }

  p {
    font-family: ${appFont.LIGHTPOPPING};
    font-size: 16px;
  }
`;

const Ratings = styled.div`
  display: inline-block;
  svg {
    margin-right: 2px;
  }
  span {
    position: relative;
    bottom: 2px;
  }
`;

const FollowerSection = styled.div`
  .inline {
    display: inline-block;
    padding: 1em 0 2em 2em;

    h5 {
      color: #334a90;
      font-family: ${appFont.REGULAR};
    }
    h4 {
      color: #334a90;
      position: relative;
      padding-left: 10px;
      font-family: ${appFont.MEDIUM};
    }
    svg {
      max-width: 30px;
      margin-right: 15px;
    }
    span {
      font-size: 19px;
      color: #070a13;
      font-family: ${appFont.REGULAR};
    }
  }
`;

const CompanyButton = styled.button`
  background-color: transparent;
  padding: 0.2em 0.8em 0.2em 0;
  border-right: 1px solid #777777;
  min-width: 160px;

  span {
    color: #334a90;
    position: relative;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
  }
  svg {
    max-width: 15px;
    max-height: 25px;
  }
`;

const FollowButton = styled.button`
  background-color: transparent;
  padding: 0.6em 0.8em;
  border: 1px solid #334a90;
  min-width: 120px;
  border-radius: 5px;
  span {
    color: #334a90;
    position: relative;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
  }
`;

const Recommend = styled.button`
  margin-left: 25px;
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  padding: 0.6em 0.8em;
  border: none;
  min-width: 120px;
  border-radius: 5px;
  span {
    color: white;
    position: relative;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
  }
`;

const LikeButton = styled.button`
  margin-left: 25px;
  position: relative;

  margin-bottom: 30px;
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  padding: 0.2em 0.8em;
  border: none;
  min-width: 160px;
  border-radius: 5px;
  span {
    color: white;
    position: relative;
    padding-left: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 15px;
    bottom: 7px;
  }

  svg {
    max-width: 15px;
    position: relative;
    top: 3px;
  }
`;

const CompanyProfilee = styled.div`
  display: block;

  span {
    float: right;
    color: #3f9aff;
    font-family: ${appFont.ITALICS};
    position: relative;
    top: 5px;
    text-decoration: underline;
    right: 25px;
    cursor: pointer;
  }
`;

const EvaluateButton = styled.button`
  margin-left: 20px;
  min-width: 160px;
  background-color: Transparent;
  padding: 0em 0.8em;
  border-right: 1px solid #777777;
  span {
    color: #334a90;
    position: relative;
    bottom: 5px;
    padding-right: 10px;
    font-family: ${appFont.MEDIUM};
    font-size: 13px;
  }
  svg {
    max-width: 20px;
    max-height: 23px;
  }
`;
const SectionNext = styled.div`
  margin-top: 0em;
  display: flex;
  justify-content: space-between;
`;

const WrapImage = styled.div`
  padding: 1em;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CustomButton = () => {
  return (
    <>
      <Button
        size={"mini"}
        basic
        color="blue"
        content="Analyze"
        className={"button-size"}
      />
      <Button
        size={"mini"}
        content={"Sales Manager"}
        primary
        className={"button-size"}
      />
    </>
  );
};
const AboutSoftware = (props) => {
  const match = useRouteMatch();

  const [open_sales, setOpenSales] = useState(false);
  const onOpenSalesModal = () => setOpenSales(true);
  const onCloseSalesModal = () => setOpenSales(false);
  const [open_recommend, setOpenRecommend] = useState(false);
  const onOpenRecommendModal = () => setOpenRecommend(true);
  const onCloseRecommendModal = () => setOpenRecommend(false);
  const [likeCounter, setLikeCounter] = useState(907);
  const [clickedLike, setClickedLike] = useState(false);
  const [clickedFollow, setClickedFollow] = useState(false);
  const [followcounter, setFollowCounter] = useState(210);

  const trigger_like = () => {
    if (!clickedLike) {
      setLikeCounter(likeCounter + 1);
      setClickedLike(true);
    } else {
      setLikeCounter(likeCounter - 1);
      setClickedLike(false);
    }
  };

  const trigger_follow = () => {
    if (!clickedFollow) {
      setFollowCounter(followcounter + 1);
      setClickedFollow(true);
    } else {
      setFollowCounter(followcounter - 1);
      setClickedFollow(false);
    }
  };

  return (
    <Wrapper>
      <Modal open={open_sales} onClose={onCloseSalesModal} center>
        <SalesModal triggerClose={onCloseSalesModal} />
      </Modal>
      <Modal open={open_recommend} onClose={onCloseRecommendModal} center>
        {props.data && (
          <RecommendSoftware
            triggerClose={onCloseRecommendModal}
            name={props.data.name}
          />
        )}
      </Modal>
      {props.data && (
        <section className={"ui grid"}>
          <div className="two wide column">
            <WrapImage>
              <img
                src={props.data.logo}
                className={"ui small rounded image"}
                alt=""
              />
            </WrapImage>
          </div>
          <div className="fourteen wide column">
            <div className="ui grid">
              <div className="ten wide column">
                <h2 className="heading">{props.data.name}</h2>
                <h5 className="heading">{props.data.category}</h5>
                <div
                  className="ui three column grid left__align"
                  style={{ marginTop: "3em" }}
                >
                  <div className="column">
                    <CompanyButton onClick={onOpenSalesModal}>
                      <span>Sales Manager</span>
                      {/* <CompanyProfile /> */}
                    </CompanyButton>
                  </div>
                  <div className="column">
                    <EvaluateButton
                      onClick={() =>
                        props.history.push(
                          `/dashboard/analyze-product/${match.params.id}`
                        )
                      }
                    >
                      <span>Evaluate</span>
                      <Evaluate />
                    </EvaluateButton>
                  </div>

                  <div className="column">
                    <CompanyProfilee>
                      <span
                        onClick={() => props.history.push("/dashboard/company")}
                      >
                        Company Profile
                      </span>
                    </CompanyProfilee>
                  </div>
                </div>
              </div>
              <div className="six wide column ">
                <section className="right_align">
                  <LikeButton>
                    <Likey />
                    <span>Like</span>
                  </LikeButton>
                  <div style={{ margin: "0.5rem 0" }}>
                    <Ratings>
                      <span style={{ marginRight: "1rem" }}>3.5</span>
                      <ActiveStar />
                      <ActiveStar />
                      <ActiveStar />
                      <ActiveStar />
                      <InActiveStar />
                    </Ratings>
                  </div>

                  <FollowerSection>
                    <div className="inline">
                      <h5>Followers</h5>
                      <Like />
                      <span>{followcounter}</span>
                    </div>
                    <div className="inline">
                      <h5>Likes</h5>
                      <Like
                        style={{ cursor: "pointer" }}
                        onClick={trigger_like}
                      />
                      <span>{likeCounter}</span>
                    </div>
                  </FollowerSection>

                  <SectionNext>
                    <FollowButton onClick={trigger_follow}>
                      <span>Follow</span>
                    </FollowButton>
                    <Recommend onClick={onOpenRecommendModal}>
                      <span>Recommend</span>
                    </Recommend>
                  </SectionNext>
                </section>
                <div
                  style={{
                    textAlign: "right",
                    textDecoration: "underline",
                    marginRight: "1.2rem",
                    marginTop: "0.3rem",
                  }}
                ></div>
              </div>
              <div className="sixteen wide column">
                {/* <SectionNext style={{ marginTop: "5em" }}>
                  <p>{props.data.description}</p>
                </SectionNext> */}
                {/* <Description>{props.data.tech_description}</Description> */}
              </div>
            </div>
          </div>
          <div className="sixteen wide column">
            {/* <SectionNext> */}
            <h3 className="heading">Overview</h3>
            {/* <p>{props.data.description}</p> */}
            {/* </SectionNext> */}
            <Description>{props.data.tech_description}</Description>
          </div>
        </section>
      )}
    </Wrapper>
  );
};

export default withRouter(AboutSoftware);
