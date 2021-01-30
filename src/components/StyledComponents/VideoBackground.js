import React from "react";
import styled from "styled-components";
const VideoBackgroundContainer = styled.a`
  display: block;
  width: 100%;
  height: 50vh;
  background: url("${({ videoPoster }) => videoPoster} ");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1.2rem;
  borderradius: 1rem;
`;

const VideoBackground = ({ children, videoPoster, video, height }) => {
  return (
    <VideoBackgroundContainer
      href={video}
      videoPoster={videoPoster}
      data-effect="fadeIn"
      height={height}
    >
      {children}
    </VideoBackgroundContainer>
  );
};

export default VideoBackground;
