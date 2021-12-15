import React from "react";
import Logo from "../../img-assets/product-image.png";
import { appFont } from "../../appTheme/appFont";
import Gutter from "../StyledComponents/Gutter";
import profile_url from "../../img-assets/dummy-avatar.png";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: "center";
`;

const FlexSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 90%;

  h4 {
    margin-bottom: 0.2rem;
    font-size: 2rem;
    font-family: ${appFont.REGULAR};
    font-weight: lighter;
  }
  h4.light {
    color: #434343 !important;
    font-family: ${appFont.REGULAR};
  }
`;

const SoftwareEditHeader = ({
  name,
  subName,
  fontSubName = "1.3rem",
  title = "45",
  subTitle = "Employees",
  url,
}) => {
  return (
    <>
      <Gutter>
        <Section>
          <div style={{ marginRight: "0.5rem" }}>
            {url ? (
              <img
                src={url}
                alt="profile"
                style={{ borderRadius: "40px", width: "80px", height: "80px" }}
              />
            ) : (
              <img
                src={profile_url}
                alt="profile"
                style={{ borderRadius: "40px", width: "80px", height: "80px" }}
              />
            )}
          </div>
          <FlexSection>
            <div>
              <h4 className={"clear-spacing"}>
                {name} {subName}
              </h4>
              {/* <h5
                className={"clear-spacing"}
                style={{ fontFamily: "lighter", fontSize: fontSubName }}
              >
                {subName}
              </h5> */}
            </div>

            <div style={{ textAlign: "right" }}>
              <h4 className="light">{title}</h4>
              <h5
                className={"clear-spacing"}
                style={{ fontFamily: "lighter", fontSize: fontSubName }}
              >
                {subTitle}
              </h5>
            </div>
          </FlexSection>
        </Section>
      </Gutter>
    </>
  );
};

export default SoftwareEditHeader;
