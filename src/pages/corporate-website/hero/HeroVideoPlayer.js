import React from "react";
import video1 from "../../../video_assets/iPaySuite-Payroll-Solution.webm";
import poster from "../../../img-assets/video_background.svg";
import VideoBackground from "../../../components/StyledComponents/VideoBackground";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";

const Wrapper = styled.div`
  padding: 4em 10vw;
  position: relative;

  h1 {
    font-family: ${appFont.MEDIUM};
    font-size: 2.5rem;
    span {
      color: #bff1ff;
    }
  }
`;

const Div = styled.div`
  position: absolute;
  bottom: 44%;
  right: 0vw;
  width: 100%;
`;

const Span = styled.span`
  color: white;
  font-family: ${appFont.LIGHTPOPPING};
`;

const HeroVideoPlayer = ({ video = video1, videoPoster = poster }) => {
  return (
    <VideoBackground video={video1} videoPoster={videoPoster}>
      <Wrapper>
        <h1 className="watch text-white">
          The content you <br />
          need, for the <br />
          <span>Software</span> you seek you
        </h1>
        <Span>
          With a free Swinhub listing, you have access to <br /> the Vendor
          Portal that helps you reach the <br />
          right software buyers right when they are <br />
          looking for the kind of products you offer.
        </Span>
        <Div>
          <i className="fa fa-play-circle-o play" aria-hidden="true"></i>
        </Div>
      </Wrapper>
    </VideoBackground>
  );
};
export default HeroVideoPlayer;
