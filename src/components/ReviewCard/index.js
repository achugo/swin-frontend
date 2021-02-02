import React from "react";
import styled from "styled-components";
import { Rating } from 'semantic-ui-react'
import FlexWrap from "../flex/FlexWrap";
import Description from "../StyledComponents/DescriptionParagraph";

const ReviewContainer = styled.div`
 background-color: #d3d3d3;
 padding: 1.2rem;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 width: 80%
`;

const RoundBadge = styled.div`
display: inline-block;
 background-color: ${({color}) => color};
 height: 20px;
 width: 20px;
 border-radius: 10px;
`;




const ReviewCard = () => {
    return (
        <ReviewContainer>
            <div className="ui stackable grid">
                <div className="one wide column">
                    <RoundBadge color={"teal"}/>
                </div>
                <div className="ten wide column">
                    <h5>Chris Jennerk<br/><span style={{fontWeight: 'normal'}}>CEO</span></h5>
                </div>
                <div className="five wide column">
                    <FlexWrap justifyContent={'space-around'} alignItems={'center'}>
                        <span>inc solutions</span>
                        <RoundBadge color={'red'}/>
                    </FlexWrap>
                </div>
                <div className="one wide column"></div>
                <div className="thirteen wide column">
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu risus ut lorem elementum
                        consectetur. Suspendisse laoreet eget felis in interdum. Quisque neque sapien, eleifend id
                        facilisis id, ultrices viverra eros. Proin a neque in lectus ultrices egestas.</Description>
                </div>
                <div className="two wide column"></div>
                <div className="one wide column"></div>
                <div className="thirteen wide column">
                    <Description fontSize={0.7}>
                        13/09/2021
                    </Description>
                    <Rating icon='star' mini defaultRating={1} maxRating={5}  />
                </div>
                <div className="two wide column"></div>
            </div>
        </ReviewContainer>
    )
};

export default ReviewCard