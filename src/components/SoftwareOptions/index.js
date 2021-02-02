import React from "react";
import Gutter from "../StyledComponents/Gutter";

let dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
const SoftwareOptions = ({data = dummyData}) => {
    const gutter = {
        margin: '20px 0'
    };
    return (
        <div>
            <section>
                <h3 className={'text-bold'}>Technical Specification</h3>
                <section>
                    <h4>Platforms</h4>
                    <section className='ui stackable grid'>
                        {data.map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Mac OS</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <Gutter top={20} bottom={20}>
                        <h4>Deployment</h4>
                    </Gutter>

                    <section className='ui stackable grid'>
                        {data.slice(1, 4).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>CloudON</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <Gutter top={20} bottom={20}>
                        <h4>Business Size</h4>
                    </Gutter>
                    <section className='ui stackable grid'>
                        {data.slice(1, 4).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>small</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <Gutter top={20} bottom={20}>
                        <h4>Training Options</h4>
                    </Gutter>
                    <section className='ui stackable grid'>
                        {data.slice(1, 7).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Documentation</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

            </section>

            <section>
                <Gutter top={80} bottom={20}>
                    <h4>Pricing</h4>
                </Gutter>
                <section>
                    <h4 style={gutter}>Pricing Model</h4>
                    <section className='ui stackable grid'>
                        {data.slice(1, 3).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Free Trial</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>
                <section>
                    <h4 style={gutter}>Training Options</h4>
                    <section className='ui grid stacked'>
                        {data.slice(1, 2).map((d) => (
                            <div className="four wide column">
                                <p>$9.30/month</p>
                            </div>
                        ))}

                    </section>
                </section>

            </section>
        </div>


    )
};

export default SoftwareOptions
