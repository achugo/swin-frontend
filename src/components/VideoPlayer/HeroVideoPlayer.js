import React from "react";
import video1 from "../../video_assets/dummy.mp4";
import poster from "../../img-assets/video_background.svg";
import VideoBackground from "../StyledComponents/VideoBackground";
import "./styles.css";
import play from "../../img-assets/play.png";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const Center = styled.div`
  display: flex;
  height: 45vh;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100px;
  }
`;

const Heading = styled.h4`
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-family: ${appFont.MEDIUM};
  color: #34eee3;
`;

const HeroVedeoPlayer = ({ video, category }) => {
  return (
    <VideoBackground video={video1} videoPoster={video}>
      <Heading className="watch">{category}</Heading>
      <Center>
        <img src={play} alt="play button" />
        {/* <i className="fa fa-play-circle-o play" aria-hidden="true"></i> */}
      </Center>
    </VideoBackground>
    // <VideoBackground video={video1} videoPoster={videoPoster} />
  );
};
export default HeroVedeoPlayer;
