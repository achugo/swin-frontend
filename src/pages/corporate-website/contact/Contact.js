import React, { useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";
import FlexItem from "../../../components/flex/FlexItem";
import FlexWrap from "../../../components/flex/FlexWrap";
import { ReactComponent as Globe } from "../../../img-assets/globe-icon.svg";
import { ReactComponent as Phone } from "../../../img-assets/phone-icon.svg";
import { ReactComponent as Mail } from "../../../img-assets/mail-icon.svg";
import { sendContactEmail } from "../../../services/email";
import { ReactComponent as Address } from "../../../img-assets/address-icon.svg";

const Wrapper = styled.div`
  height: auto;
  padding-bottom: 15vh;
`;

const TopSection = styled.div`
  margin-bottom: 5vh;
  padding: 0 10vw;
`;

const TopHeading = styled.h3`
  font-family: ${appFont.REGULAR};
  margin-bottom: 5vh;
`;

const TopLeft = styled.div`
  margin-right: 50px;
`;

const Textarea = styled.textarea`
  font-family: ${appFont.REGULAR};
  color: #434343;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  opacity: 1;
  width: 100%;
  height: 300px;
  border: none;
  line-height: 2.1;
`;

const TopRight = styled.div`
  position: relative;
  height: 40vh;
`;

const Button = styled.button`
  margin-top: 25px;
  float: right;
  background: transparent linear-gradient(106deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001d;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  padding: 0.9em 2.5em;
  color: white;
  font-family: ${appFont.REGULAR};
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
`;

const ImgSection = styled.div`
  display: inline-block;
  margin-bottom: 30px;

  svg {
    position: relative;
    bottom: 25px;
    max-height: 20px;
    max-width: 20px;
  }
`;

const Content = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Label = styled.h5`
  color: #434343;
  font-family: ${appFont.MEDIUM};
`;

const Value = styled.span`
  color: #434343;
  font-family: ${appFont.LIGHTPOPPING};
`;

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const contact_msg = async (e) => {
    e.preventDefault();
    setLoading("sending message...");

    sendContactEmail(message)
      .then((res) => {
        if (res.status === 200) {
          setLoading("Message sent");
        } else {
          setLoading("Error sending message");
        }
      });
  };

  return (
    <Wrapper id="contact">
      <TopSection>
        <TopHeading>Contact Details</TopHeading>
        <FlexWrap>
          <FlexItem flex={1}>
            <TopLeft>
              <form onSubmit={contact_msg}>
                <Textarea
                  placeholder="Leave a comment..."
                  onChange={handleMessageChange}
                />
                <Button>Send</Button>
              </form>
              {loading && <span>{loading}</span>}
            </TopLeft>
          </FlexItem>
          <FlexItem flex={1}>
            <TopRight>
              <div>
                <ImgSection>
                  <Globe />
                </ImgSection>
                <Content>
                  <Label>Website</Label>
                  <Value>swinhub.com</Value>
                </Content>
              </div>
              <div>
                <ImgSection>
                  <Mail />
                </ImgSection>
                <Content>
                  <Label>Email</Label>
                  <Value>info@swinhub.com </Value>
                </Content>
              </div>
            </TopRight>
          </FlexItem>
        </FlexWrap>
      </TopSection>
    </Wrapper>
  );
};

export default Contact;
