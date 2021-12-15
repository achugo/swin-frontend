import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import { toast, Toast, ToastContainer } from "react-toastify";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import AddButton from "../AddButton";
import api, { url_base } from "../../api/api";
import BtnAdd from "../button/BtnAdd";

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

const ProfileImag = styled.img`
  max-width: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const EditModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [avatar_loading, setAvatarLoading] = useState(false);
  // const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const user_data = JSON.parse(localStorage.getItem("payload"));

  const profile_img_ref = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const update_profile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: email,
      first_name: name.split(" ")[0],
      last_name: name.split(" ")[1],
      phone_number: phone,
      avatar: url_base + `${avatar ? avatar : user_data.avatar}`,
    };
    const status = await api.create("profile", payload);
    if (status.status) {
      toast("profile update successful");
      user_data.avatar = status.data.avatar;
      user_data.first_name = status.data.first_name;
      user_data.last_name = status.data.last_name;
      user_data.phone_number = status.data.phone_number;

      localStorage.setItem("payload", JSON.stringify(user_data));
      props.triggerClose();
      setLoading(false);
    } else {
      setLoading(false);
      toast(status.message);
    }
  };

  const fileOnChange = async (e) => {
    /*Selected files data can be collected here.*/
    setAvatarLoading(true);
    console.log(e.target.files);
    console.log(e.target.files);
    const newFile = e.target.files[0];
    let fileObj = new FormData();
    fileObj.append("file", newFile);
    fileObj.append("folder", newFile.type);

    const fileResponse = await api.create("files/upload/temp", fileObj);
    if (fileResponse) {
      setAvatarLoading(false);
      setAvatar(fileResponse.url);
    }
  };
  const handleBtnClick = () => {
    /*Collecting node-element and performing click*/
    profile_img_ref.current.click();
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Edit User</span>
        <IconEdit />
      </Heading>

      <form onSubmit={update_profile}>
        <div className="wrap__add">
          {!avatar ? (
            <>
              <AddButton
                click={handleBtnClick}
                content={"Add Profile Image"}
                icon={"plus"}
              />
              <input
                hidden
                type="file"
                ref={profile_img_ref}
                onChange={fileOnChange}
              />
            </>
          ) : (
            <ProfileImag src={url_base + avatar} alt="profile" />
          )}
          {avatar_loading && <LoaderSpinner />}
        </div>

        <WrapInput>
          <InputField
            placeholder="name"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            placeholder="phone"
            value={phone}
            onChange={handlePhoneChange}
            type="tel"
          />
          <PhoneIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            value={email}
            onChange={handleEmailChange}
            placeholder="Email addresss"
          />
          <MailIcon />
        </WrapInput>

        {loading && <LoaderSpinner />}

        <BtnAdd type="submit">Update</BtnAdd>
      </form>
    </Wrapper>
  );
};

export default EditModal;
