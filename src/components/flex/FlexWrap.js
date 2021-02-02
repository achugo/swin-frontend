import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${({justifyContent})=> justifyContent};
  alignItems: ${({alignItems})=> alignItems};
  @media screen and (max-width: 768px) {
    display: block;
    flex-direction: column;
  }
`;

const FlexWrap = ({ children, justifyContent="flex-start", alignItems="flex-start" }) => {
  return <FlexWrapper justifyContent={justifyContent} alignItems={alignItems}>{children}</FlexWrapper>;
};

export default FlexWrap;
