import React from "react";
import Main from "../../components/main/Main";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import {Button, Icon} from "semantic-ui-react";
import Gutter from "../../components/StyledComponents/Gutter";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import FlexWrap from "../../components/flex/FlexWrap";

const EditUserProfile = () => {
    return (
        <>
            <Main>
                <FlexWrap justifyContent={'center'} alignItems={'center'}>
                    <Gutter width={60} top={0} bottom={0}>
                        <Gutter top={0} bottom={10}>
                            <FlexWrap justifyContent={'flex-end'}>
                                <Button primary size={'tiny'}>
                                    Edit Profile
                                    <Gutter display={'inline'} bottom={0} top={0} left={8}>
                                        <Icon name="edit"/>
                                    </Gutter>

                                </Button>
                            </FlexWrap>
                        </Gutter>
                        <MainDashboardContainer>
                            <SoftwareEditHeader name={'Emmanuella'} subName={'Swartzeneggar'} fontName={'1.5rem'}
                                                fontSubName={'1rem'} title={'Tech Official'} subTitle={'IND solution'}/>
                                                <section>
                                                    <Gutter top={20} bottom={10}>
                                                        <Gutter display={'inline'} top={0} bottom={0} right={7}>
                                                            <Icon name={'address book'}/>
                                                        </Gutter>

                                                        Phone Number
                                                    </Gutter>
                                                    <Gutter top={10} bottom={10}>
                                                        <Gutter display={'inline'} top={0} bottom={0} right={7}>
                                                            <Icon name={'address book'}/>
                                                        </Gutter>

                                                        Phone Number
                                                    </Gutter>
                                                </section>
                        </MainDashboardContainer>
                    </Gutter>

                </FlexWrap>
            </Main>
        </>
    )
};

export default EditUserProfile