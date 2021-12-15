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
import { LoaderWrapper } from "./LoginForm";
import { Link } from "react-router-dom";

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

const RegisterForm = () => {
  const [current_step, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const go_to_next = () => {
    let payload = JSON.parse(localStorage.getItem("reg_payload"));
    if (current_step === 1 && payload.company_type !== undefined) {
      setCurrentStep(current_step + 1);
    }
    if (
      current_step === 2 &&
      payload.company !== undefined &&
      payload.email !== undefined &&
      payload.first_name !== undefined &&
      payload.last_name !== undefined &&
      payload.address !== undefined
    ) {
      setCurrentStep(current_step + 1);
    }
  };

  const go_to_previous = () => {
    setCurrentStep(current_step - 1);
  };

  const RenderStep = () => {
    if (current_step === 1) {
      return <StepOne />;
    } else if (current_step === 2) {
      return <StepTwo />;
    } else {
      return <StepThree />;
    }
  };

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = JSON.parse(localStorage.getItem("reg_payload"));
    const status = await api.create("registration", payload);
    if (status.status) {
      setLoading(false);
      setSuccess(true);
      // localStorage.setItem("token", status.token);
      // props.history.push("/dashboard");
    } else {
      setLoading(false);
      setError(status.message);
    }
  };

  return (
    <FormWrapper>
      <div>
        <WriteIcon />
        <Header>
          {current_step !== 3 ? "Sign Up" : "Complete Registration"}
        </Header>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {RenderStep()}
        <NavigationSection>
          <MobileFlex>
            <FlexItem flex={5}>
              {current_step < 3 && (
                <NextButton type="submit" onClick={go_to_next}>
                  Next
                </NextButton>
              )}
              {current_step === 3 && (
                <NextButton type="submit" onClick={submitForm}>
                  Submit
                </NextButton>
              )}

              {current_step > 1 && <BackArrow onClick={go_to_previous} />}
            </FlexItem>
            <FlexItem flex={2}></FlexItem>
          </MobileFlex>
        </NavigationSection>
      </form>

      {success && (
        <Span>
          Registration successful, <Link to="/login">Login</Link> to continue
        </Span>
      )}
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

export default RegisterForm;
