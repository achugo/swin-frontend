import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import emailjs from "emailjs-com";
import AddButton from "../AddButton";
import api from "../../api/api";
import { BtnAdd } from "./AddCompanyUser";
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
    font-family: ${appFont.MEDIUM};
    color: #434343;
    font-size: 1.5rem;
  }

  svg {
    max-width: 20px;
    position: relative;
    bottom: 10px;
  }
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1em 4em 1em 1em;
  margin: 1.5em 0;
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

const RecommendSoftware = ({ close }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [my_name, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const match = useRouteMatch();

  console.log("match", match);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleYourChange = (e) => {
    setMyName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const recommend_software = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      reciever_name: name,
      reciever_email: email,
    };
    const status = await api.create(
      `products/${match.params.id}/recommend`,
      payload
    );
    if (status.status) {
      setLoading(false);
      toast.success("Email sent to user");
    } else {
      setLoading(false);
      toast.error(status.message);
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Recommend to</span>
        <IconEdit />
      </Heading>

      <form onSubmit={recommend_software}>
        <WrapInput>
          <InputField
            placeholder="Name"
            onChange={handleNameChange}
            type="text"
          />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            placeholder="Email addresss"
            onChange={handleEmailChange}
          />
          <MailIcon />
        </WrapInput>

        {loading && <LoaderSpinner />}
        {/* <WrapInput>
          <InputField
            placeholder="Name"
            onChange={handleYourChange}
            type="text"
          />
          <ProfileIcon />
        </WrapInput> */}
        <BtnAdd>Enter</BtnAdd>
      </form>
    </Wrapper>
  );
};

export default withRouter(RecommendSoftware);
