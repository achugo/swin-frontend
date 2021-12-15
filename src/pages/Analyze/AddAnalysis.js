import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import CustomDropdown from "../../components/dropdown/Dropdown";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Select from "../../components/dropdown/Select";
import Main from "../../components/main/Main";
import AddUser from "../../components/modals/AddUser";
import FlexWrap from "../../components/flex/FlexWrap";
import MobileFlex from "../../components/flex/MobileFlex";
import { ReactComponent as Arrow } from "../../img-assets/arrow.svg";
import FlexItem from "../../components/flex/FlexItem";
import MultipleSelect from "../../components/dropdown/Multiselect";
import { LoaderSpinner, WrapInput } from "../auth/register/form/LoginForm";
import { toast, ToastContainer } from "react-toastify";
import api, { url_base } from "../../api/api";
import BtnAdd from "../../components/button/BtnAdd";
import { useRouteMatch, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 0px auto;
  padding: 4em 1em;

  .pad_top {
    margin-top: 15px;
  }

  .pad_bottom {
    padding-bottom: 45px;
  }
`;

const Heading = styled.h2`
  font-family: ${appFont.REGULAR};
  margin-bottom: 3em !important;
`;

const LabelHeading = styled.h3`
  color: #434343;
  font-family: ${appFont.REGULAR};
  margin: 1em 0;
`;

const Section = styled.section`
  margin: 2em 4em 0;
`;
const AnalyzeSection = styled.section`
  margin: 0em 4em 0em 4em;
  position: relative;
  padding-left: 3em;
  border-left: 1px dashed #00bbd5;

  svg {
    position: absolute;
    max-width: 40px;
    bottom: 11vh;
    left: 0px;
  }
`;

const SubHeading = styled.h4`
  font-family: ${appFont.REGULAR};
  margin: 1em 0;
`;

const AdduserCaption = styled.span`
  position: relative;
  top: 20px;
  color: black;
  border: none;
  padding-top: 15px;
  font-size: 20px;
  font-family: ${appFont.MEDIUM};
`;

const SearchInput = styled.div`
  input {
    width: 100%;
    padding: 1.5em;
    outline: none;
    border: none;
    background: #f5f5f5 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 6px #0000001d !important;
    border-radius: 5px !important;
    font-family: ${appFont.LIGHTPOPPING};
    font-size: 17px;

    &:placeholder {
      font-family: ${appFont.LIGHTPOPPING};
    }
  }
`;

const Start = styled.button`
  margin-top: 1em;
  background: #41a0ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  outline: none;
  color: white;
  float: right;
  border: none;
  padding: 1em 2em;

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
  padding: 0.5em 1em;
  cursor: pointer;

  & div {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100px;
  }

  svg {
    max-height: 20px;
    margin: 0 1em;
    cursor: pointer;
  }
`;

const NotifyContent = styled.div`
  padding-left: 20px;
  position: relative;
  top: 20px;
  & h4 {
    color: #334a90;
    font-family: ${appFont.MEDIUM};
  }

  & span {
    color: #6e6e6e;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const AddAnalysis = (props) => {
  const [open, setOpen] = useState(false);
  const [total_stages, setTotalStages] = useState([]);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [input, setInput] = useState("");
  const [final_payload, setUpdatePayload] = useState({});
  const [search_result, setSearchResult] = useState(null);
  const [product_id, setProductId] = useState("");
  const [review_id, setReviewId] = useState("");
  const [all_data, setAllData] = useState([]);
  const [show_stages, setShowStages] = useState(false);
  const [all_stages, setAllStages] = useState({});
  const [show_start, setShowStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show_reviewBtn, setShowReviewBtn] = useState(true);
  const match = useRouteMatch();

  useEffect(() => {
    if (match.params.id) {
      get_product_data();
      setProductId(match.params.id);
    }
  }, []);

  console.log("match", match);

  const get_product_data = async () => {
    setLoading(true);
    const status = await api.get(`products/${match.params.id}`);
    if (status.status) {
      setLoading(false);
      setInput(status.data.name);
    } else {
      setLoading(false);
      if (status) {
        toast.error(status.message);
      }
    }
  };

  const stages = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
  ];

  const department = [
    { value: "End User", label: "End User" },
    { value: "IT", label: "IT" },
    { value: "Finance", label: "Finance" },
    { value: "Management", label: "Mangement" },
  ];

  const fetchStages = (data) => {
    console.log(data);
    setTotalStages(Array(data.value).fill(data.value));
  };

  const search_product = async (e) => {
    setInput(e.target.value);

    if (e.target.value.length > 2) {
      let payload = {
        name: e.target.value,
      };
      const status = await api.create("guest/search", payload);
      if (status.status) {
        setSearchResult(status.data);
      } else {
        if (status) {
          console.log(status);
          toast.error(status.message);
        }
      }
    } else {
      setSearchResult(null);
    }
  };

  const update_payload = () => {
    let data = [];
    for (const key in all_data) {
      // if (Object.hasOwnProperty.call(all_stages, key)) {
      const element = all_data[key];
      const element_ = all_stages[key];
      // console.log("all data", all_data["0"]);
      // console.log("all stages", all_stages["0"]);
      // console.log("keyy_", key);
      data.push({
        name: element_["0"].value,
        reviewers: element,
      });
      // }
    }
    //  all_stages.map((item, index) => {
    //   return {
    //     name: item.value,
    //     reviewers: all_data[index][0],
    //   };
    // });
    console.log("final daa", data);
    return data;
  };

  const fetchSelected = (index, data) => {
    console.log(index, data);
    let format_data = data.filter((item) => {
      item.user_id = item.id;
      item.is_final = total_stages.length === index + 1 ? true : false;
      // delete item.id;
      return true;
    });

    // if (!all_data[index]) {
    //   setAllData(...[all_data].push(format_data));
    // } else {
    //   setAllData(...[all_data].splice(index, 1, data));
    // }

    const new_data = {
      ...all_data,
      [index]: (all_data[index] && format_data) || [format_data],
    };

    setAllData(new_data);
  };

  console.log("all data", all_data);

  const fetchDepartment = (index, data) => {
    console.log(index, data);
    const new_data = {
      ...all_stages,
      [index]: (all_stages[index] && all_stages[index].concat(data)) || [data],
    };

    setAllStages(new_data);
  };

  const select_product = (data) => {
    setSearchResult(null);
    setProductId(data);
    setInput(data.name);
  };

  const create_review = async () => {
    setLoading(true);
    let payload = {
      product_id: product_id.id || product_id,
      name: `${input} Review`,
      stages: total_stages.length,
    };
    const status = await api.create("reviews", payload);
    if (status.status) {
      toast("review created");
      setShowStages(true);
      setReviewId(status.data.id);
      setShowReviewBtn(false);
      console.log(status);
      setLoading(false);
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
        toast.error(status.message);
      }
    }
  };

  const create_stages = async () => {
    setLoading(true);
    let payload = {
      review_id: review_id,
      stages: update_payload(),
    };
    const status = await api.create("stages", payload);
    if (status.status) {
      toast("stages created");
      setLoading(false);
      setShowStart(true);
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
        toast.error(status.message);
      }
    }
  };

  const start_review = async () => {
    setLoading(true);

    const status = await api.get(`reviews/start/${review_id}`);
    if (status.status) {
      toast("review process initiated");
      setLoading(false);
      props.history.push("/dashboard/analyze");
    } else {
      if (status) {
        setLoading(false);
        console.log(status);
        toast.error(status.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal open={open} onClose={onCloseModal} center>
        <AddUser />
      </Modal>
      <Main>
        <Wrapper>
          <Section>
            <Heading>Analyze your choice software with your team</Heading>
          </Section>

          <Section>
            <LabelHeading>Select Software</LabelHeading>
            {/* <CustomDropdown holder="Search for app name" /> */}
            <WrapInput>
              <SearchInput>
                <input type="text" onChange={search_product} value={input} />
              </SearchInput>
            </WrapInput>
            <WrapInput>
              {search_result &&
                search_result.map((item) => (
                  <Product onClick={() => select_product(item)}>
                    <FlexWrap>
                      <FlexItem flex={1}>
                        <IconWrapper>
                          <img src={item.logo} alt="product" />
                        </IconWrapper>
                      </FlexItem>
                      <FlexItem flex={5}>
                        <NotifyContent>
                          <h4>{item.name}</h4>
                          <span>description</span>
                        </NotifyContent>
                      </FlexItem>
                      <FlexItem flex={2}></FlexItem>
                    </FlexWrap>
                  </Product>
                ))}
            </WrapInput>
          </Section>
          <Section>
            <LabelHeading>Select Number of stages(departments)</LabelHeading>
            <Select
              getValue={fetchStages}
              holder="select stages"
              options={stages}
            />
            <div className="pad_top">
              <BtnAdd click={create_review}>Evaluate</BtnAdd>
            </div>
            {loading && <LoaderSpinner />}
          </Section>

          <Section>
            {total_stages.length > 0 && (
              <Heading style={{ marginTop: "2em" }}>{`${total_stages.length} ${
                total_stages.length === 1 ? "Stage" : "Stages"
              } Review`}</Heading>
            )}
          </Section>

          {show_stages && (
            <>
              {total_stages.length > 0 &&
                total_stages.map((item, index) => {
                  return (
                    <AnalyzeSection>
                      <SubHeading>Stage {index + 1}</SubHeading>
                      <Select
                        options={department}
                        holder="Department"
                        getValue={(data) => fetchDepartment(index, data)}
                      />
                      <Arrow />
                      <div className="pad_bottom">
                        <FlexWrap>
                          <FlexItem flex="1">
                            <AdduserCaption>Add User</AdduserCaption>
                          </FlexItem>
                          <FlexItem flex="6">
                            <MultipleSelect
                              index={index}
                              group_selection={fetchSelected}
                            />
                          </FlexItem>
                        </FlexWrap>
                      </div>
                    </AnalyzeSection>
                  );
                })}
              <Section>
                <div className="pad_top">
                  {!show_start && (
                    <BtnAdd click={create_stages}>Add Stages</BtnAdd>
                  )}
                  {show_start && (
                    <BtnAdd click={start_review}>Start Review</BtnAdd>
                  )}
                </div>
              </Section>
            </>
          )}
        </Wrapper>
      </Main>
    </>
  );
};

export default withRouter(AddAnalysis);
