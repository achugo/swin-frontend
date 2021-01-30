import React from "react";
import styled from "styled-components";
import HeroVideoPlayer from "./HeroVideoPlayer";

const HeroWrapper = styled.div`
  margin-top: 130px;
`;

const HeroVideo = () => {
  return (
    <HeroWrapper>
      <HeroVideoPlayer />
    </HeroWrapper>
  );
};

export default HeroVideo;
