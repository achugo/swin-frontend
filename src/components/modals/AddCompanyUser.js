import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import Select from "../dropdown/Select";

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
    font-size: 2rem;
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

const AddCompanyUser = ({ triggerClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [user_role, setUserRole] = useState(null);

  const roles = ["IT", "Sales", "Finance", "End User"];

  const update_profile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = [
      {
        email: email,
        roles: [user_role.value],
      },
    ];
    const status = await api.create("users", payload);
    if (status.status) {
      setLoading(false);
      toast.success("Invite sent out to new user");
      triggerClose();
    } else {
      setLoading(false);
      toast.error(status.message + status.errors && status.errors["0.email"]);
    }
  };

  const fetchSelectValue = (data) => {
    setUserRole(data);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Add User</span>
        <IconEdit />
      </Heading>

      <form onSubmit={update_profile}>
        <WrapInput>
          <Select
            holder="Select Department"
            options={roles}
            getValue={fetchSelectValue}
          />
        </WrapInput>

        <WrapInput>
          <InputField
            required
            placeholder="Email addresss"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MailIcon />
        </WrapInput>
        {loading && <LoaderSpinner />}
        <AddButton>Enter</AddButton>
      </form>
    </Wrapper>
  );
};

export default AddCompanyUser;
