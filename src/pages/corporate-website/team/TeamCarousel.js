import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import onyeka from "../../../img-assets/onyeka.png";
import ayobami from "../../../img-assets/ayobami.png";
import manny from "../../../img-assets/manny.png";
import styled from "styled-components";
import { appFont } from "../../../appTheme/appFont";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000039;
  border-radius: 10px;
  opacity: 1;
  padding: 4em 2em;
  margin: 1em;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0px auto;
  max-width: 170px;
  border-radius: 50%;
  overflow: hidden;
`;

const Name = styled.h3`
  color: #434343;
  font-family: ${appFont.MEDIUM};
`;

const Title = styled.span`
  font-family: ${appFont.LIGHTPOPPING};
  color: #777777;
`;

const TeamCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Card>
        <Image src={onyeka} alt="onyeka" />
        <Name>Onyeka Onwuemene</Name>
        <Title>(Co-founder/CEO)</Title>
      </Card>
      <Card>
        <Image src={ayobami} alt="ayobami" />
        <Name>Ayeni Ayobami</Name>
        <Title>(Co-founder/CTO)</Title>
      </Card>
      <Card>
        <Image src={manny} alt="manny" />
        <Name>Emmanuel Anozie</Name>
        <Title>(Co-founder/President)</Title>
      </Card>
    </Carousel>
  );
};

export default TeamCarousel;
