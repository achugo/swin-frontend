import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import Loader from "react-loader-spinner";
import { ReactComponent as Mail } from "../../../../img-assets/email.svg";
import { ReactComponent as Padlock } from "../../../../img-assets/padlock.svg";
import { ReactComponent as SignInIcon } from "../../../../img-assets/sign-in-icon.svg";
import { appColors } from "../../../../appTheme/appTheme";
import { NavigationSection } from "./RegisterForm";
import api from "../../../../api/api";
import { withRouter } from "react-router-dom";

const FormWrapper = styled.div`
  max-width: 500px;
  min-width: 30vw;
  margin: 0px auto;
  text-align: left;

  .heading {
    svg {
      max-width: 35px;
      margin-right: 15px;
    }
  }
`;

const Header = styled.h3`
  color: #334a90;
  font-family: ${appFont.MEDIUM};
  display: inline;
  position: relative;
  bottom: 15px;
`;

const Wrapper = styled.div`
  position: relative;
`;

export const WrapInput = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 13px;
    max-width: 17px;
  }
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

export const LoaderWrapper = styled.div`
  width: 100%;
  text-align: center;
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

export const LoaderSpinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="#74E0FF"
      height={50}
      width={50}
      timeout={30000} //3 secs
    />
  );
};

const Error = styled.span`
  font-family: ${appFont.LIGHTPOPPING};
  color: red;
  font-size: 16px;
`;

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    const status = await api.create("login", payload);
    if (status.status) {
      setLoading(false);
      localStorage.setItem("payload", JSON.stringify(status.data));
      localStorage.setItem("token", status.token);
      props.history.push("/dashboard");
    } else {
      setLoading(false);
      setError(status.message);
    }
  };

  return (
    <FormWrapper>
      <div className="heading">
        <SignInIcon /> <Header>Sign In</Header>
      </div>

      <form onSubmit={submitLogin}>
        <Wrapper>
          <WrapInput>
            <InputField
              onChange={handleEmailChange}
              value={email}
              placeholder="Email"
              type="email"
            />
            <Mail />
          </WrapInput>
          <WrapInput>
            <InputField
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
              type="password"
            />
            <Padlock />
          </WrapInput>
        </Wrapper>

        <NavigationSection>
          <NextButton type="submit">Submit</NextButton>
        </NavigationSection>
      </form>

      {error && <Error>{error}</Error>}

      {loading && (
        <LoaderWrapper>
          <LoaderSpinner />
        </LoaderWrapper>
      )}
    </FormWrapper>
  );
};

export default withRouter(LoginForm);
