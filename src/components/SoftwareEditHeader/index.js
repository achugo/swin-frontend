import React from "react";
import Logo from "../../img-assets/product-image.png";
import {appFont} from "../../appTheme/appFont";
import Gutter from "../StyledComponents/Gutter";
import FlexWrap from "../flex/FlexWrap";
import CustomImage from "../StyledComponents/CustomImage";

const SoftwareEditHeader = ({name = "IND SOLUTION", subName = "Marketing Solutions", fontName = "2rem", fontSubName = "1.3rem", title="45", subTitle="Employees"}) => {
    return (
        <>
            <Gutter>
                <FlexWrap alignItems={'center'}>
                    <div>
                        <CustomImage src={Logo} width={80} height={80} radius={40} />
                    </div>
                    <Gutter top={0} bottom={0} width={90} left={7}>
                        <FlexWrap justifyContent={'space-between'} alignItems={'center'}>
                            <div>
                                <h4 className={'clear-spacing'} style={{
                                    marginBottom: '0.2rem',
                                    fontSize: fontName,
                                    fontFamily: appFont.LIGHTPOPPING
                                }}>{name}</h4>
                                <h5 className={'clear-spacing'}
                                    style={{fontFamily: 'lighter', fontSize: fontSubName}}>{subName}</h5>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <h4 className={'clear-spacing'} style={{
                                    marginBottom: '0.2rem',
                                    fontSize: fontName,
                                    fontFamily: appFont.LIGHTPOPPING
                                }}>{title}</h4>
                                <h5 className={'clear-spacing'}
                                    style={{fontFamily: 'lighter', fontSize: fontSubName}}>{subTitle}</h5>
                            </div>
                        </FlexWrap>
                    </Gutter>
                </FlexWrap>
            </Gutter>
        </>
    )
};

export default SoftwareEditHeader