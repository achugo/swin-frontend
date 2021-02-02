import React from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import {Button, Icon} from 'semantic-ui-react'
import Main from "../../components/main/Main";
import Description from "../../components/StyledComponents/DescriptionParagraph";
import CustomLink from "../../components/StyledComponents/CustomLink";
import FlexWrap from "../../components/flex/FlexWrap";

const SoftwareArticleLink = () => {
    return (
        <>
            <Main>
                <MainDashboardContainer>
                    <Gutter>
                        <h3>Hello</h3>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et felis
                            sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et felis
                            sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et felis
                            sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiatLorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et felis
                            sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                        </Description>
                    </Gutter>
                    <Gutter top={50} bottom={50}>
                        <FlexWrap justifyContent={'center'}>
                            <CustomLink>
                                https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow
                            </CustomLink>
                        </FlexWrap>

                    </Gutter>

                </MainDashboardContainer>
            </Main>

        </>
    )
};
export default SoftwareArticleLink