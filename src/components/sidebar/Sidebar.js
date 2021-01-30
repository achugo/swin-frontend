import React from "react";
// import Logo from "../../img-assets/swin-logo.png";
import {ReactComponent as SoftwareIcon} from "../../img-assets/softwares.svg";
import {ReactComponent as SwinLogo} from "../../img-assets/logo-swin.svg";
import {ReactComponent as Mysoftwares} from "../../img-assets/mysoftwares.svg";
import {ReactComponent as Activity} from "../../img-assets/history-clock-button.svg";
import {ReactComponent as Aboutus} from "../../img-assets/about-us.svg";
import {ReactComponent as Notification} from "../../img-assets/notification.svg";
import {Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import Software from "../softwares/Software";
import SoftwareBlog from '../../pages/software-blog';
import SoftwareDetails2 from '../../pages/software-details-2';
import SoftwareDetails1 from '../../pages/software-details-1'
import Analyze from "../../pages/Analyze/Analyze";
import AddAnalysis from "../../pages/Analyze/AddAnalysis";
import AllAnalysis from "../../pages/Analyze/AllAnalysis";
import EvaluationSummary from "../../pages/Analyze/EvaluationSummary";
import Notifications from "../../pages/notifications/Notifications";
import Singleproduct from "../singleproduct/Singleproduct";
import SoftwareDetails3 from "../../pages/software-details-3";
import AddSoftware from "../../pages/add-software";
import SoftwareArticleLink from "../../pages/software-article-link";
import EditSoftware from "../../pages/edit-software";
import EditUserProfile from "../../pages/EditUserProfile";
import EditSoftware2 from "../../pages/edit-software-2";
import Users from "../../pages/UsersPage";

const Sidebar = () => {
    return (
        <>
            <div id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                        {/* <img src={Logo} alt="logo" /> */}
                        <SwinLogo/>
                    </div>
                    <i
                        // onclick="closeSidebar()"
                        className="fa fa-times"
                        id="sidebarIcon"
                        aria-hidden="true"
                    />
                </div>


                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <SoftwareIcon/>
                        <span>Software</span>
                    </div>
                    <div className="sidebar__link">
                        <Mysoftwares/>
                        <span>My softwares</span>
                    </div>


                    <div className="sidebar__link ">
                        <Notification/>
                        <span>Notification</span>
                    </div>

                    <div className="sidebar__link">
                        <Activity/>
                        <span>Activity</span>
                    </div>

                    <div className="sidebar__link">
                        <Aboutus/>
                        <span>About us</span>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/dashboard" component={Software}/>
                <Route path="/dashboard/software/details-1" component={SoftwareDetails1}/>
                <Route path="/dashboard/software/blog" component={SoftwareBlog}/>
                <Route path="/dashboard/software/details-2" component={SoftwareDetails2}/>
                <Route path="/dashboard/analyze" component={Analyze}/>
                <Route path="/dashboard/add-analysis" component={AddAnalysis}/>
                <Route path="/dashboard/all-analysis" component={AllAnalysis}/>
                <Route path="/dashboard/notifications" component={Notifications}/>
                <Route
                    path="/dashboard/evaluation-summary"
                    component={EvaluationSummary}
                />
                <Route path="/dashboard/software/details-3" component={SoftwareDetails3}/>
                <Route path="/dashboard/software/add" component={AddSoftware}/>
                <Route path="/dashboard/software/article/link" component={SoftwareArticleLink}/>
                <Route path="/dashboard/software/edit" component={EditSoftware}/>
                <Route path="/dashboard/user/edit" component={EditUserProfile}/>
                <Route path="/dashboard/software/edit-2" component={EditSoftware2}/>
                <Route path="/dashboard/users" component={Users}/>
            </Switch>
        </>
    );
};

export default Sidebar;
