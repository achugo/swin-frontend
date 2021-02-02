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
import CardContainer from "../../components/StyledComponents/CardContainer";
import {appColors} from "../../appTheme/appTheme";
import ImageCarousel from "../../components/ImageCarousel";
import Filter from "../../components/Filter";

const dummmyData = [1, 2, 3, 4, 5, 6];
const Users = () => {
    return (
        <>
            <Main>
                <Gutter>
                    <FlexWrap justifyContent={'flex-end'}>
                        <Button primary size={'tiny'}>
                            Add User
                            <Gutter display={'inline'} top={0} bottom={0} left={7}>
                                <Icon name="plus"/>
                            </Gutter>

                        </Button>
                    </FlexWrap>
                </Gutter>
                <section>
                    <table className="ui single line table">
                        <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Date Created</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dummmyData.map((d, index) => (
                            <tr className={'custom-tr'}>
                                <td>{index + 1}</td>
                                <td><Image src={Logo} className={'table-user-img'}/>John Mbawuike</td>
                                <td>john.mbawuike@swagger.com</td>
                                <td>Technical Official</td>
                                <td>Active</td>
                                <td>Sept 16, 2020</td>
                                <td><Icon color={appColors.LIGHTBLUE} name={'edit outline'}/> <Icon
                                    color={appColors.LIGHTBLUE} name={'trash alternate outline'}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
                <footer className={'custom-footer'}>

                    <CardContainer>
                        <FlexWrap justifyContent={'space-between'}>
                            <div>
                                <Gutter top={0} bottom={0} right={14} font={0.75} display={'inline'}>Rows per
                                    page</Gutter>
                                <span className={'font-bold'}>6</span>
                            </div>
                            <div>
                                <Icon name={'angle left'} size={'large'}/>
                                <Gutter top={0} bottom={0} left={28} display={'inline'}><Icon name={'angle right'}
                                                                                              size={'large'}/></Gutter>

                            </div>
                        </FlexWrap>
                    </CardContainer>
                    {/*<Filter/>*/}
                </footer>
            </Main>
        </>
    )
};
export default Users