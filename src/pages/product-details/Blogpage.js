import React, { useEffect, useState } from "react";
import { useRouteMatch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import FlexItem from "../../components/flex/FlexItem";
import FlexWrap from "../../components/flex/FlexWrap";
import Main from "../../components/main/Main";
import { ReactComponent as TIme } from "../../img-assets/blog-time.svg";
import blog_image from "../../img-assets/blog_post.png";
import { ReactComponent as Clock } from "../../img-assets/clock.svg";
import product_url from "../../img-assets/dummy-img.png";
import define from "../../img-assets/define.png";
import auto from "../../img-assets/auto-analyze.png";
import v8 from "../../img-assets/v8.png";
import sap from "../../img-assets/sap_int.png";
import simple from "../../img-assets/simple_work.png";
import { appColors } from "../../appTheme/appTheme";
import { LoaderSpinner, WrapInput } from "../auth/register/form/LoginForm";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api/api";
import Modal from "react-responsive-modal";
import RequestAccess from "../../components/modals/RequestAccess";
import ReviewMainContainer from "../../components/ReviewMainContainer";
import ReviewCard from "../../components/ReviewCard";
import { BtnAdd } from "../../components/modals/SalesModal";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em 1em;

  .open {
    cursor: pointer !important;
  }
  .restricted {
    cursor: not-allowed !important;
  }

  .related {
    .column {
      padding-top: 0.3em !important;
      padding-bottom: 0.3em !important;
    }
  }
`;

const Heading = styled.h1`
  font-family: ${appFont.LIGHTPOPPING};
  margin-bottom: 3em 0;
  text-align: left;
`;

const Section = styled.section`
  margin: 2em 5em;
  padding-bottom: 1em;
`;

const Span = styled.div`
  position: relative;
  margin-top: 25px;
  padding-left: 20px;
  svg {
    max-width: 25px;
    position: relative;
    top: 10px;
  }

  span {
    display: inline-block;
    padding-left: 10px;
    font-family: ${appFont.REGULAR};
  }
`;

const BlogDetails = styled.div`
  display: flex;
  justify-self: flex-end;

  svg {
    max-width: 40px;
  }
`;

const UpDate = styled.span`
  color: #606060;
  text-align: right;
  padding-right: 10px;
  font-family: ${appFont.ITALICS};
  font-weight: lighter;
`;

const Center = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
`;

const FeaturedImage = styled.div`
  margin: 3em 0;
  max-height: 500px;

  img {
    /* max-height: 400px; */
    max-width: 100%;
  }
`;

const MiniNav = styled.div`
  padding: 0em 4rem;

  span {
    margin: 0px 0.3em;
    position: relative;
    bottom: 14px;
    padding: 1em;
    font-family: ${appFont.LIGHTPOPPING};

    &:hover {
      background: transparent linear-gradient(96deg, #00bbd5 0%, #35eee3 100%)
        0% 0% no-repeat padding-box;
      color: white;
      cursor: pointer;
    }
  }

  .active {
    background: transparent linear-gradient(96deg, #00bbd5 0%, #35eee3 100%) 0%
      0% no-repeat padding-box;
    color: white;
  }
`;

const BlogContent = styled.div`
  text-align: left;
  color: #6e6e6e;
  font-family: ${appFont.LIGHTPOPPING};
  margin: 5em 0;

  p {
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  padding: 1em;
`;

const AlignLeft = styled.div`
  text-align: left;
`;

const AddComment = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.8) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000036;
  padding: 1em;
  margin-right: 2em;
  cursor: pointer;
  border-radius: 5px;
  @media screen and (min-width: 768px){
    margin: .5em;
  }

  

  & h3 {
      color: black;
      font-family: ${appFont.REGULAR};
      text-align: left;
      margin-bottom: 5px;
    }
  }

  span {
    display: block;
    font-family: ${appFont.LIGHTPOPPING};
    color: #6E6E6E;
    font-size: 19px;
    text-align: left;
    margin: 1em 0;
    font-size: 14px;
  }

  img {
    max-height: 110px;
    display: block;
    width: 100%;
  }
`;

const ReviewHeading = styled.h3`
  font-family: ${appFont.MEDIUM};
`;

const WrapComment = styled.div`
  text-align: left;
  margin: 0.9em 0;
`;

const TextField = styled.textarea`
  display: block;
  background: #ededed 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 80%;

  height: 150px;
  padding: 1em 4em 1em 1em;
  margin: 2em 0 1.5em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const InputField = styled.input`
  display: block;
  background: #ededed 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 80%;
  padding: 1em;
  margin: 0em 0 1.5em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const BlogPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [collateral_data, setCollateralData] = useState([]);
  const [product_data, setProductData] = useState("");
  const [comment_data, setCommentData] = useState(null);
  const onOpenModal = () => setOpen(true);
  const [post_data, setPostData] = useState(null);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  const [show_comment, setShowComment] = useState(false);

  const match = useRouteMatch();
  useEffect(() => {
    get_product_data();
    get_comments();
    get_post();
  }, []);

  useEffect(() => {
    get_collateral_data();
  }, [match.params.collateral]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const get_product_data = async () => {
    const status = await api.get(`products/${match.params.id}`);
    if (status.status) {
      setProductData(status.data);
    } else {
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const get_collateral_data = async () => {
    setLoading(true);
    let payload = {
      product_id: match.params.id,
      category: "Blog",
    };
    const status = await api.get(`files`, payload);
    if (status.status) {
      setLoading(false);

      setCollateralData(status.data);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const post_comment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      post_id: match.params.post,
      comment: comment,
      name: name,
      file: "null",
    };
    const status = await api.create(`comments`, payload);
    if (status.status) {
      toast("comments added");
      get_comments();
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const get_comments = async () => {
    setLoading(true);
    const payload = {
      post_id: match.params.post,
    };
    const status = await api.get(`comments`, payload);
    if (status.status) {
      setLoading(false);
      setCommentData(status.data);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const get_post = async () => {
    setLoading(true);
    const status = await api.get(`posts/${match.params.post}`);
    if (status.status) {
      setLoading(false);
      setPostData(status.data);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const formatDate = (data) => {
    let dx = new Date(data);
    return dx.toUTCString();
  };

  const trigger_show = () => {
    setShowComment(!show_comment);
  };

  return (
    <Main>
      <ToastContainer />
      <Modal open={open} onClose={onCloseModal} center>
        <RequestAccess />
      </Modal>
      <MiniNav>
        {product_data &&
          product_data.file_categories.map((item) => (
            <span
              onClick={() =>
                props.history.push(
                  `/dashboard/product/${match.params.id}/${item.category}`
                )
              }
              className={
                item.category === match.params.collateral ? "active" : ""
              }
            >
              {item.category}
            </span>
          ))}
      </MiniNav>
      <Wrapper>
        <>
          {loading && (
            <Center>
              <LoaderSpinner />
            </Center>
          )}
          {!loading && (
            <>
              <Section>
                <>
                  <div className="ui two column grid">
                    <div className="twelve wide column">
                      <Heading>One shoe that fits all, The IND story </Heading>
                    </div>
                    <div className="four wide column">
                      <BlogDetails>
                        <UpDate>
                          Last Updated 9:00am <br />
                          Tuesday, 12th October, 2010
                        </UpDate>
                        <TIme />
                      </BlogDetails>
                    </div>
                  </div>

                  <FeaturedImage>
                    <img src={blog_image} alt="featured" />
                  </FeaturedImage>

                  <BlogContent>
                    <p>
                      On investigation, the “terms and conditions” may include
                      “Offer only applies to residents of Alaska”, and so a
                      listener in New York can’t actually get a half can’t
                      actually get a half-price widget at all.On investigation,
                      the “terms and conditions” may include “Offer only applies
                      to residents of Alaska”, and so a listener in New York
                      can’t actually get a half-price widget at all.
                    </p>
                    <p>
                      On investigation, the “terms and conditions” may include
                      “Offer only applies to residents of Alaska”, and so a
                      listener in New York can’t actually get a half can’t
                      actually get a half-price widget at all.On investigation,
                      the “terms and conditions” may include “Offer only applies
                      to residents of Alaska”, and so a listener in New York
                      can’t actually get a half-price widget at all. On
                      investigation, the “terms and conditions” may include
                      “Offer only applies to residents of Alaska”, and so a
                      listener in New York can’t actually get a half-price
                      widget at all. On investigation, the “terms and
                      conditions” may include “Offer only applies to residents
                      of Alaska”, and so a listener in New York can’t actually
                      get a half-price widget at all.On investigation, the
                      “terms and conditions” may include “Offer only applies to
                      residents of Alaska”, and so a listener in New York can’t
                      actually get a half-price widget at all. On investigation,
                      the “terms and conditions” may include “Offer only applies
                      to residents of Alaska”, and so a listener in New York
                      can’t actually get a half-price widget at all.
                    </p>
                    <p>
                      On investigation, the “terms and conditions” may include
                      “Offer only applies to residents of Alaska”, and so a
                      listener in New York can’t actually get a half can’t
                      actually get a half-price widget at all.On investigation,
                      the “terms and conditions” may include “Offer only applies
                      to residents of Alaska”, and so a listener in New York
                      can’t actually get a half-price widget at all.
                    </p>
                  </BlogContent>

                  <div className="ui two column grid stackable">
                    <div className="nine wide column">
                      <AlignLeft>
                        <AddComment onClick={trigger_show}>
                          Add comment
                        </AddComment>
                        {show_comment && (
                          <WrapInput>
                            <form onSubmit={post_comment}>
                              <TextField
                                onChange={handleCommentChange}
                                required
                                placeholder="Write a review"
                              />
                              <InputField
                                placeholder="Enter name"
                                onChange={handleNameChange}
                              />
                              <BtnAdd
                                style={{ float: "none", textAlign: "right" }}
                              >
                                Post
                              </BtnAdd>
                            </form>
                          </WrapInput>
                        )}

                        <ReviewHeading>Reviews</ReviewHeading>
                      </AlignLeft>

                      {comment_data &&
                        comment_data.map((item) => (
                          <WrapComment>
                            <ReviewCard
                              comment={item.comment}
                              name={item.name}
                              date={item.updated_at}
                            />
                          </WrapComment>
                        ))}

                      {/* <WrapComment>
                        <ReviewCard />
                      </WrapComment>
                      <WrapComment>
                        <ReviewCard />
                      </WrapComment> */}
                    </div>
                    <div className="seven wide column">
                      <AlignLeft>
                        <ReviewHeading
                          style={{
                            marginTop: "6em",
                            marginBottom: "2em",
                            marginLeft: "0.2em",
                          }}
                        >
                          More Articles You may Like{" "}
                        </ReviewHeading>
                      </AlignLeft>

                      <div className="ui one column grid stackable related">
                        <div className="column">
                          <Box>
                            <FlexWrap>
                              <FlexItem flex={1}>
                                {" "}
                                <img src={auto} alt="product url" />
                              </FlexItem>
                              <FlexItem flex={2}>
                                <Wrap>
                                  <h3>Running Auto-Analyze </h3>
                                  <span>
                                    On investigation, the “terms and conditions”
                                    may include “Offer only applies to
                                  </span>
                                </Wrap>
                              </FlexItem>
                            </FlexWrap>
                          </Box>
                        </div>
                        <div className="column">
                          <Box>
                            <FlexWrap>
                              <FlexItem flex={1}>
                                {" "}
                                <img src={define} alt="product url" />
                              </FlexItem>
                              <FlexItem flex={2}>
                                <Wrap>
                                  <h3>Defining Data Points </h3>
                                  <span>
                                    On investigation, the “terms and conditions”
                                    may include “Offer only applies to
                                  </span>
                                </Wrap>
                              </FlexItem>
                            </FlexWrap>
                          </Box>
                        </div>
                        <div className="column">
                          <Box>
                            <FlexWrap>
                              <FlexItem flex={1}>
                                {" "}
                                <img src={sap} alt="product url" />
                              </FlexItem>
                              <FlexItem flex={2}>
                                <Wrap>
                                  <h3>SAP Integration </h3>
                                  <span>
                                    On investigation, the “terms and conditions”
                                    may include “Offer only applies to
                                  </span>
                                </Wrap>
                              </FlexItem>
                            </FlexWrap>
                          </Box>
                        </div>
                        <div className="column">
                          <Box>
                            <FlexWrap>
                              <FlexItem flex={1}>
                                <img src={v8} alt="product url" />
                              </FlexItem>
                              <FlexItem flex={2}>
                                <Wrap>
                                  <h3>How to Log In </h3>
                                  <span>
                                    On investigation, the “terms and conditions”
                                    may include “Offer only applies to
                                  </span>
                                </Wrap>
                              </FlexItem>
                            </FlexWrap>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </Section>
            </>
          )}
        </>
      </Wrapper>
    </Main>
  );
};

export default withRouter(BlogPage);
