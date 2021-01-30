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

const dummmyData = [1, 2, 3, 4, 5,6];
const Users = () => {
    return (
        <>
            <Main>
                <Gutter>
                    <section style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button primary size={'tiny'}>
                            Add User
                            <Icon name="plus" style={{marginLeft: '0.5rem'}}/>
                        </Button>
                    </section>
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
                        {dummmyData.map((d, index)=>(
                            <tr className={'custom-tr'}>
                                <td>{index + 1}</td>
                                <td><Image src={Logo} style={{width: '20px', height: '20px', borderRadius: '10px', display: 'inline-block', marginRight: '0.3rem'}} />John Mbawuike</td>
                                <td>john.mbawuike@swagger.com</td>
                                <td>Technical Official</td>
                                <td>Active</td>
                                <td>Sept 16, 2020</td>
                                <td><Icon style={{color: appColors.LIGHTBLUE}} name={'edit outline'}/> <Icon style={{color: appColors.LIGHTBLUE}} name={'trash alternate outline'}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
                <footer className={'custom-footer'}>

                    <CardContainer>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <span style={{marginRight: '1rem', fontSize: '0.75rem'}}>Rows per page</span>
                                <span style={{fontWeight: 'bold'}}>6</span>
                            </div>
                            <div>
                                <Icon name={'angle left'} size={'large'}/>
                                <Icon name={'angle right'} size={'large'} style={{marginLeft: '2rem'}}/>
                            </div>
                        </div>
                    </CardContainer>
                    <Filter/>
                </footer>
            </Main>
        </>
    )
};
export default Users