import React from "react";
import styled from "styled-components";
const GutterContainer = styled.div`
  margin-top: ${({ top }) => top +'px'};
  margin-bottom: ${({ bottom }) => bottom + 'px'};
  margin-right: ${({ right }) => right + 'px'};
  margin-left: ${({ left }) => left + 'px'};
  display: ${({ display }) => display};
  width: ${({ width }) => width + '%'};
  font-size: ${({ font }) => font + 'rem'};
 
  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Gutter = ({children, top=40, bottom=40, right=0, left=0, display='block', width=100, font=1})=>{
    return(
        <GutterContainer top={top} bottom={bottom} right={right} left={left} display={display} width={width} font={font}>
            {children}
        </GutterContainer>
    )
};

export default  Gutter

