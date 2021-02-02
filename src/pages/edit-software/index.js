import React from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import {Button, Icon, Image} from 'semantic-ui-react'
import Main from "../../components/main/Main";
import Description from "../../components/StyledComponents/DescriptionParagraph";
import Logo from '../../img-assets/product-image.png'
import {appFont} from "../../appTheme/appFont";
import CustomDropdown from "../../components/dropdown/Dropdown";
import FlexWrap from "../../components/flex/FlexWrap";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import SoftwareEditButton from "../../components/SoftwareEditButton";
import ContactForm from "../../components/ContactForm";

const EditSoftware = () => {
    return (
        <>
            <Main>
                <Gutter>
                    <FlexWrap justifyContent={'flex-end'}>
                        <Button primary size={'tiny'}>
                            Edit Company
                            <Gutter top={0} bottom={0} display={'inline'} left={0.5}>
                                <Icon name="edit" style={{marginLeft: '0.5rem'}}/>
                            </Gutter>

                        </Button>
                    </FlexWrap>
                </Gutter>
                <MainDashboardContainer>
                    <SoftwareEditHeader/>
                   <SoftwareEditButton />
                    <Gutter bottom={15}>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                        </Description>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Pellentesque ante leo, aliquam et
                            felis sed, egestas posuere augue. Etiam commodo est eget est tincidunt feugiat
                        </Description>
                    </Gutter>
                    <ContactForm/>
                </MainDashboardContainer>
            </Main>

        </>
    )
};
export default EditSoftware