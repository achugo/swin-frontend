import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as Mail } from "../../img-assets/email.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import mgr_url from "../../img-assets/sales-manager.png";

import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import Select from "../dropdown/Select";
import { useRouteMatch, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  span {
    font-family: ${appFont.REGULAR};
    color: #434343;
    font-size: 1.5rem;
    position: relative;
    bottom: 30px;

    svg {
      max-width: 40px;
      margin-right: 20px;
      position: relative;
      top: 10px;
    }
  }

  svg.edit {
    max-width: 20px;
    position: relative;
    bottom: 10px;
  }
`;

const Content = styled.div`
  margin-left: 30px;

  h5 {
    font-family: ${appFont.MEDIUM};
    color: #434343;
    margin-bottom: 0px;
  }

  span {
    font-family: ${appFont.LIGHTPOPPING};
  }
  /* margin-top: 1.7em; */
  svg {
    max-width: 18px;
    position: relative;
    top: 5px;
    margin-right: 30px;
  }

  .pad_top {
    margin-top: 10px;
  }
  /* 
  span {
    position: relative;
    bottom: 7px;
    font-family: ${appFont.LIGHTPOPPING};
    padding-left: 20px;
    font-size: 16px;
  } */
`;

const TextField = styled.textarea`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  padding: 1em 4em 1em 1em;
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

const AddButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

export const BtnAdd = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Details = styled.div`
  .photo_wrap {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
`;

const SalesModal = ({ triggerClose }) => {
  const [loading, setLoading] = useState(false);
  const [country_, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [message, setMessage] = useState("");
  const [user_role, setUserRole] = useState(null);
  const country = ["Nigeria", "South Africa", "Ghana"];
  const continent = ["Africa", "Europe", "Asia"];

  const match = useRouteMatch();

  const contact_salesMgr = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      message: message,
      product_id: match.params.id,
      country: country_.value,
      region: region.value,
    };
    const status = await api.create(`sales/contact`, payload);
    console.log("status", status);
    if (status.status) {
      setLoading(false);
      toast.success(status.message);
      triggerClose();
    } else {
      setLoading(false);
      toast.error(status.message);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const fetchSelectValue = (data) => {
    setCountry(data);
  };

  const fetchSelectRegion = (data) => {
    setRegion(data);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Sales Manager</span>
        {/* <IconEdit className="edit" /> */}
      </Heading>

      <WrapInput>
        <Select
          holder="Select Region"
          options={continent}
          getValue={fetchSelectRegion}
        />
      </WrapInput>

      <WrapInput style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Select
          holder="Select Country"
          options={country}
          getValue={fetchSelectValue}
        />
      </WrapInput>

      <Details>
        <div className="ui grid">
          <div className="four wide column">
            <div className="photo_wrap">
              <img src={mgr_url} alt="mgr" />
            </div>
          </div>
          <div className="twelve wide column">
            <Content>
              <h5>Elizabeth Channing</h5>
              {user_role && <span>{user_role.value}</span>}

              <div className="pad_top">
                <div>
                  <PhoneIcon />
                  <span>080 406 789 8590</span>
                </div>
                <div>
                  <Mail />
                  <span>Elizabethc@gmail.com</span>
                </div>
              </div>
            </Content>
          </div>
        </div>
      </Details>

      <form onSubmit={contact_salesMgr}>
        <div className="ui grid">
          <div className="sixteen wide column">
            <WrapInput>
              <TextField
                required
                placeholder="Send a Message"
                onChange={(e) => handleMessageChange(e)}
              />
            </WrapInput>
          </div>
        </div>
        {loading && <LoaderSpinner />}

        <AddButton>Enter</AddButton>
      </form>
    </Wrapper>
  );
};

export default withRouter(SalesModal);
