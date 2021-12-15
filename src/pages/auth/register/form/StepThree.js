import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import CustomDropdown from "../../../../components/dropdown/Dropdown";
import { WrapInput } from "./LoginForm";

const Wrapper = styled.div`
  position: relative;
`;
const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1.3em 4em 1.3em 1em;
  margin: 1.5em 0;
  outline: none;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const options = [
  { text: "Oil and Gas", value: "Oil and Gas" },
  { text: "Construction", value: "Construction" },
  { text: "Financial Services", value: "Financial Serices" },
  { text: "Healthcare ", value: "Healthcare" },
  { text: "Renewables", value: "Renewable" },
  { text: "Aviation", value: "Aviation" },
];

const StepThree = () => {
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.phone_number = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.password = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    payload.confirm_password = e.target.value;
    localStorage.setItem("reg_payload", JSON.stringify(payload));
  };

  const fetchSelectedIndustry = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <WrapInput>
        <CustomDropdown
          holder="Select Industry"
          getCode={fetchSelectedIndustry}
          options={options}
        />
      </WrapInput>

      <WrapInput>
        <InputField
          placeholder="Phone"
          type="tel"
          required
          value={phone_number}
          onChange={handlePhoneNumberChange}
        />
      </WrapInput>

      <WrapInput>
        <InputField
          placeholder="Create Password"
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </WrapInput>

      <WrapInput>
        <InputField
          placeholder="Confirm Password"
          type="password"
          required
          value={confirm_password}
          onChange={handleConfirmPasswordChange}
        />
      </WrapInput>
    </Wrapper>
  );
};

export default StepThree;
