import React from 'react';
import testingImage from '../../img-assets/product-image.png'
import {Button, Rating} from "semantic-ui-react";
import Description from "../StyledComponents/DescriptionParagraph";

const CustomButton = () => {
    return (
        <>
            <Button size={'mini'} basic color='blue' content='Analyze' className={'button-size'}/>
            <Button size={'mini'} content={'Sales Manager'} primary className={'button-size'}/>
        </>
    )
};

const AboutSoftware = ({button=<CustomButton />}) => {

    return (
        <section className={'ui stackable grid'}>
            <div className="two wide column">
                <img src={testingImage} className={'ui small rounded image'} alt=""/>
            </div>
            <div className="fourteen wide column">
                <div className="ui stackable grid">
                    <div className="ten wide column">
                        <h3>Kza Markets</h3>
                        <div style={{margin: '0.5rem 0'}}>
                            <Rating icon='star' mini defaultRating={1} maxRating={5}/>
                            <span style={{marginLeft: '0.3rem'}}>3.5</span>
                        </div>

                        <p>Marketing analytics and consulting solutions</p>
                    </div>
                    <div className="six wide column">
                        <section>

                        </section>
                        <div style={{
                            textAlign: 'right',
                            textDecoration: 'underline',
                            marginRight: '1.2rem',
                            marginTop: '0.3rem'
                        }}>
                            <a href="#">Company Info</a>
                        </div>
                    </div>
                    <div className="thirteen wide column">
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu risus ut lorem
                            elementum
                            consectetur. Suspendisse laoreet eget felis in interdum. Quisque neque sapien, eleifend id
                            facilisis id, ultrices viverra eros. Proin a neque in lectus ultrices egestas.</Description>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSoftware