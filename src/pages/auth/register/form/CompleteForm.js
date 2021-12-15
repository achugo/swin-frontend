import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { ReactComponent as WriteIcon } from "../../../../img-assets/writing.svg";
import { ReactComponent as BackArrow } from "../../../../img-assets/back-arrow.svg";
import MobileFlex from "../../../../components/flex/MobileFlex";
import FlexItem from "../../../../components/flex/FlexItem";
import { appColors } from "../../../../appTheme/appTheme";
import Loader from "react-loader-spinner";
import api from "../../../../api/api";
import { LoaderWrapper, WrapInput } from "./LoginForm";
import { Link, useRouteMatch, withRouter } from "react-router-dom";

const FormWrapper = styled.div`
  max-width: 500px;
  min-width: 30vw;
  margin: 0px auto;
  text-align: left;
`;

const Header = styled.h3`
  color: #334a90;
  font-family: ${appFont.MEDIUM};
  display: inline-block;
  position: relative;
  bottom: 15px;
  padding-bottom: 1em;
  padding-top: 2vh;
`;

export const NavigationSection = styled.div`
  margin: 4em 0 1em 0;
  svg {
    cursor: pointer;
  }
`;

const NextButton = styled.button`
  background: transparent
    linear-gradient(
      109deg,
      rgba(116, 224, 255, 1) 0%,
      rgba(65, 160, 255, 1) 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(65, 160, 255, 0.51);
  padding: 0.8em 3.5em;
  outline: none;
  border-radius: 10px;
  color: ${appColors.WHITE};
  font-family: ${appFont.REGULAR};
  border: none;
  margin-right: 1em;
  font-size: 14px;
  &::focus {
    outline: none;
    border: none;
  }
`;

const Span = styled.span`
  font-family: ${appFont.LIGHTPOPPING};
  color: black;
  font-size: 16px;
`;

const Error = styled.span`
  font-family: ${appFont.LIGHTPOPPING};
  color: red;
  font-size: 16px;
`;

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

const CompleteForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const match = useRouteMatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      first_name: first_name,
      last_name: last_name,
      password: password,
      re_password: confirm_password,
    };
    const status = await api.create(
      `users/complete-account/${match.params.id}`,
      payload
    );
    if (status.status) {
      setLoading(false);
      setSuccess(true);
      setError("");
      // localStorage.setItem("token", status.token);
      // props.history.push("/dashboard");
    } else {
      setLoading(false);
      // setError(status.message);
      setError("Invalid user");
    }
  };

  return (
    <FormWrapper>
      <div>
        <WriteIcon />
        <Header>Complete Registration</Header>
      </div>
      <form onSubmit={(e) => submitForm(e)}>
        <Wrapper>
          <WrapInput>
            <InputField
              placeholder="First Name"
              type="tel"
              required
              value={first_name}
              onChange={handleFirstNameChange}
            />
          </WrapInput>

          <WrapInput>
            <InputField
              placeholder="Last Name"
              type="tel"
              required
              value={last_name}
              onChange={handleLastNameChange}
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

        {success && (
          <Span>
            Registration complete, <Link to="/login">Login</Link> to continue
          </Span>
        )}

        <NavigationSection>
          <MobileFlex>
            <FlexItem flex={5}>
              <NextButton type="submit" onClick={submitForm}>
                Submit
              </NextButton>
            </FlexItem>
            <FlexItem flex={2}></FlexItem>
          </MobileFlex>
        </NavigationSection>
      </form>

      {error && <Error>{error}</Error>}
      {loading && (
        <LoaderWrapper>
          <Loader
            type="TailSpin"
            color="#74E0FF"
            height={50}
            width={50}
            timeout={30000} //3 secs
          />
        </LoaderWrapper>
      )}
    </FormWrapper>
  );
};

export default withRouter(CompleteForm);
