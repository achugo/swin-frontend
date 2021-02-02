import React from "react";
import styled from "styled-components";
const CustomImageContainer = styled.img`
  height: ${({ height }) => height +'px'};
  width: ${({ width }) => width + 'px'};
  border-radius: ${({ radius }) => radius + 'px'};

`;

const CustomImage = ({height, radius, width, src })=>{
    return(
        <CustomImageContainer width={width} height={height} radius={radius} src={src} />
    )
};

export default  CustomImage

