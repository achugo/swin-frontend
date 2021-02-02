import React from "react";
import {ReactComponent as ActiveStar} from "../../img-assets/star-active.svg";
import {ReactComponent as BlogImage} from "../../img-assets/video_background.svg";
import FlexWrap from "../flex/FlexWrap";
import Description from "../StyledComponents/DescriptionParagraph";

const BlogPost = () => {
    return (
        <section>
            <div className="ui stackable grid">
                <div className="row">
                    <div className="eleven wide column">
                        <h2>One shoe that fits all, The IND story</h2>
                    </div>
                    <div className="four wide column">
                        <FlexWrap>
                            <div>
                                <div>Last Updated 9:00am</div>
                                <div>Tuesday, 12th October, 2020</div>
                            </div>
                            <ActiveStar/>
                        </FlexWrap>
                    </div>
                    <div className="sixteen wide column">
                        <BlogImage style={{width: '100%'}}/>
                    </div>
                    <div className="sixteen wide column">
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu erat orci. Vestibulum
                            non est ultricies odio pharetra commodo sit amet eget orci. Fusce est arcu, imperdiet vitae
                            nulla eget, varius fringilla dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu erat orci. Vestibulum
                            non est ultricies odio pharetra commodo sit amet eget orci. Fusce est arcu, imperdiet vitae
                            nulla eget, varius fringilla dui.
                        </Description>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu erat orci. Vestibulum
                            non est ultricies odio pharetra commodo sit amet eget orci. Fusce est arcu, imperdiet vitae
                            nulla eget, varius fringilla dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu erat orci. Vestibulum
                            non est ultricies odio pharetra commodo sit amet eget orci. Fusce est arcu, imperdiet vitae
                            nulla eget, varius fringilla dui.
                        </Description>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default BlogPost