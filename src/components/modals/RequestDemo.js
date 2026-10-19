import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import { ReactComponent as ProfileIcon } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as PhoneIcon } from "../../img-assets/phone-icon.svg";
import { ReactComponent as MailIcon } from "../../img-assets/email.svg";
import { ReactComponent as CompanyIcon } from "../../img-assets/company-icon.svg";
import { ReactComponent as GlobeIcon } from "../../img-assets/globe-icon.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api/api";
import { propTypes } from "react-bootstrap/esm/Image";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const NextBtn = styled.button`
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

const Heading = styled.h2`
  font-family: ${appFont.REGULAR};
  color: ${appColors.HEADERBLUE};
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

const RequestDemoModal = ({ close }) => {
  const [loading, setLoading] = useState(false);

  const update_profile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      full_name: name,
      company_name: companyName,
      email: email,
      address: companyAddress,
      phone: phone,
      region: region,
      country: country,
    };

    const status = await api.create("guest/contact", payload);
    if (status.status) {
      setLoading(false);
      toast.success("Demo request sent");
      close();
    } else {
      setLoading(false);
      toast.error(status.message);
    }
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCompanyAddress = (e) => {
    setCompanyAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>Request Demo</Heading>

      <form onSubmit={update_profile}>
        <div className="wrap__add">
          {/* <AddButton content={"Add Profile Image"} icon={"plus"} /> */}
        </div>

        <WrapInput>
          <InputField
            placeholder="Full Name"
            type="text"
            onChange={handleNameChange}
          />
          <ProfileIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            placeholder="Company name"
            type="text"
            onChange={handleCompanyNameChange}
          />
          <CompanyIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            placeholder="Email"
            type="email"
            onChange={handleEmailChange}
          />
          <MailIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            type="text"
            placeholder="Company addresss"
            onChange={handleCompanyAddress}
          />
          <CompanyIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            type="Phone Number"
            placeholder="tel"
            onChange={handlePhoneChange}
          />
          <PhoneIcon />
        </WrapInput>

        <WrapInput>
          <InputField
            type="text"
            placeholder="Region eg... Asia"
            onChange={handleRegionChange}
          />
          <GlobeIcon />
        </WrapInput>
        <WrapInput>
          <InputField
            type="text"
            placeholder="Country"
            onChange={handleCountryChange}
          />
          <GlobeIcon />
        </WrapInput>

        {loading && <LoaderSpinner />}

        <NextBtn>Submit</NextBtn>
      </form>
    </Wrapper>
  );
};

export default RequestDemoModal;
