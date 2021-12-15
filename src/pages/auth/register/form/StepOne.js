import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../../../appTheme/appFont";
import { appColors } from "../../../../appTheme/appTheme";
import FlexWrap from "../../../../components/flex/FlexWrap";
import MobileFlex from "../../../../components/flex/MobileFlex";
import { ReactComponent as Seller } from "../../../../img-assets/vendor-icon.svg";
import { ReactComponent as Buyer } from "../../../../img-assets/enduser-icon.svg";

const Wrapper = styled.div`
  position: relative;

  .selected_option {
    background-color: #41a0ff !important;
    span,
    h4 {
      color: white !important;
    }
  }
`;
const Heading = styled.h3`
  color: #909090;
  padding-top: 1em;
  font-family: ${appFont.LIGHTPOPPING};
  margin: 2em 0;
`;
const Box = styled.div`
  background: rgba(255, 255, 255, 0.8) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000036;
  padding: 1em;
  margin-right: 2em;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;

  &:hover {
    background-color: #41a0ff;
    span,
    h4 {
      color: white;
    }
  }

  span {
    display: block;
    font-family: ${appFont.LIGHTPOPPING};
    color: ${appColors.BLACK};
    margin: 1.5em 0;
    font-size: 14px;
  }

  svg {
    max-height: 100px;
  }
`;

const BoxHeading = styled.h4`
  font-family: ${appFont.BOLD};
  color: #334a90;
  margin: 1em 0;
`;

const StepOne = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [select_vendor, setSelectVendor] = useState(
    localStorage.getItem("reg_payload") &&
      JSON.parse(localStorage.getItem("reg_payload")).company_type == "vendor"
      ? true
      : false
  );
  const [select_enduser, setSelectEndUser] = useState(
    localStorage.getItem("reg_payload") &&
      JSON.parse(localStorage.getItem("reg_payload")).company_type == "user"
      ? true
      : false
  );
  const onSelectVendor = () => {
    setSelectVendor(true);
    setSelectEndUser(false);
    localStorage.setItem(
      "reg_payload",
      JSON.stringify({ company_type: "vendor" })
    );
  };

  const onSelectEndUser = () => {
    setSelectVendor(false);
    setSelectEndUser(true);
    localStorage.setItem(
      "reg_payload",
      JSON.stringify({ company_type: "user" })
    );
  };

  return (
    <Wrapper>
      <Heading>What would you like to sign Up as</Heading>
      <FlexWrap>
        <MobileFlex flex={1}>
          <Box
            className={`${select_vendor ? "selected_option" : ""}`}
            onClick={onSelectVendor}
          >
            <BoxHeading>Vendor</BoxHeading>
            <Seller />
            <span>Sell your softwares To ready Buyers</span>
          </Box>
        </MobileFlex>
        <MobileFlex flex={1}>
          <Box
            className={`${select_enduser ? "selected_option" : ""}`}
            onClick={onSelectEndUser}
          >
            <BoxHeading>End User</BoxHeading>
            <Buyer />
            <span>Find softwares you want and bid for them</span>
          </Box>
        </MobileFlex>
      </FlexWrap>
    </Wrapper>
  );
};

export default StepOne;
