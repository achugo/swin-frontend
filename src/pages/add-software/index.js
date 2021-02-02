import React from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import {Button, Icon} from 'semantic-ui-react'
import Main from "../../components/main/Main";
import CustomInput from "../../components/CustomInput";
import AddButton from "../../components/AddButton";
import CustomDropdown from "../../components/dropdown/Dropdown";
import CustomTextArea from "../../components/CustomTextArea";
import AddImage from "../../img-assets/add-image.jpeg";
import AppCards from "../../components/AppsCard";
import SoftwareOptions from "../../components/SoftwareOptions";
import FlexWrap from "../../components/flex/FlexWrap";

const AddSoftware = () => {
    return (
        <>
            <Main>
                <MainDashboardContainer>
                    <Gutter>
                        <section className="ui stackable grid">
                            <div className="row">
                                <div className="two wide column">
                                    <AddButton content={'Add Profile Image'} icon={'plus'}/>
                                </div>
                                <div className="fourteen wide column">
                                    <CustomInput placeholder={'Product Name'}/>
                                    <Gutter top={10} bottom={10}>
                                        <CustomDropdown/>
                                    </Gutter>
                                    <Gutter top={10} bottom={10}>
                                        <CustomTextArea placeholder={'Overview'}/>
                                    </Gutter>
                                </div>
                            </div>
                            <div className="sixteen wide column">
                                <h3>Videos</h3>
                                <AddButton icon={"plus"}
                                           content={"Add Introductory Video"} height={'15rem'}/>
                            </div>
                        </section>
                    </Gutter>
                    <Gutter>
                        <Gutter>
                            <h3>Images</h3>
                        </Gutter>
                        <div className="ui stackable grid">
                            <div className="four">
                                <AddButton height={'10rem'}/>
                            </div>

                            <div className="four">
                                <img src={AddImage} alt="" height={'140'} />
                            </div>

                        </div>
                    </Gutter>
                    <Gutter>
                        <Gutter>
                            <h3>Digital Collateral</h3>
                        </Gutter>
                        <div className="ui stackable grid">
                            <div className="four">
                                <AddButton height={'7rem'} content={false}/>
                            </div>
                            <div className="four" >
                              <AppCards content={'Presentation'}/>
                            </div>
                        </div>
                    </Gutter>
                    <Gutter>
                        <SoftwareOptions/>
                    </Gutter>
                    <Gutter>
                        <Button basic color='violet'>
                            <Button.Content>
                                <Icon name={'plus'}/>
                                Add Features
                            </Button.Content>
                        </Button>
                    </Gutter>
                    <Gutter>
                        <FlexWrap justifyContent="flex-end">
                            <Button content='Go Live' primary />
                        </FlexWrap>

                    </Gutter>
                </MainDashboardContainer>
            </Main>

        </>
    )
};
export default AddSoftware