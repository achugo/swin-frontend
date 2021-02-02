import React from "react";
import {Button} from 'semantic-ui-react'
import './style.css'
import ReviewCard from "../ReviewCard";
import AppCards from "../AppsCard";
import styled from "styled-components";
import Gutter from "../StyledComponents/Gutter";

let dummyData = [1, 2, 3];

const ButtonReview = () => {
    return (
        <>
            <Button content={'Leave a review'} primary className={'button-size'}/>
            <Button basic color='blue' content='Rate' className={'button-size'}/>
        </>

    )
};


const ReviewMainContainer = ({data = dummyData, mainHeader = 'Reviews', sideHeader = "  Other Related apps", content, width, button=<ButtonReview />}) => {
    return (
        <section>
            <section>
                {button}
            </section>
            <Gutter top={20} bottom={0}>
                <section className={"ui grid stackable"}>
                    <div className="ten wide column">
                        <h4>{mainHeader}</h4>
                    </div>
                    <div className="six wide column">
                        <h4>
                            {sideHeader}
                        </h4>
                    </div>
                    <div className="ten wide column">
                        {data.map((i) => (
                            <Gutter top={20} bottom={20}>
                                <ReviewCard/>
                            </Gutter>
                        ))}
                    </div>
                    <div className="six wide column">
                        {dummyData.map((i) => (
                            <Gutter>
                                <AppCards content={content} width={width}/>
                            </Gutter>
                        ))}
                    </div>
                </section>
            </Gutter>

        </section>
    )
};

export default ReviewMainContainer