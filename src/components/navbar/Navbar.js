import React, { useEffect, useState } from "react";
import DashboardSearch from "../search/DashboardSearch";
import { ReactComponent as Profile } from "../../img-assets/avatar-profile.svg";
import { ReactComponent as Users } from "../../img-assets/avatar-users.svg";
import { ReactComponent as Company } from "../../img-assets/avatar-company.svg";
import { ReactComponent as Logout } from "../../img-assets/avatar-logout.svg";
import { ReactComponent as AvatarProfile } from "../../img-assets/avatar_profile.svg";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { withRouter } from "react-router-dom";
import { appColors } from "../../appTheme/appTheme";

const ProfileDropdown = styled.div`
  position: absolute;
  right: -25px;
  top: 6vh;

  .box {
    z-index: 9090;
    width: 170px;
    height: auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px #43434391;
    color: #434343;
    position: relative;
    float: left;
  }

  .box.arrow-top {
    margin-top: 20px;
  }

  .box.arrow-top:after {
    content: " ";
    position: absolute;
    right: 30px;
    top: -15px;
    border-top: none;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 15px solid white;
  }

  .box.arrow-right:after {
    content: " ";
    position: absolute;
    right: -15px;
    top: 15px;
    border-top: 15px solid transparent;
    border-right: none;
    border-left: 15px solid white;
    border-bottom: 15px solid transparent;
  }
`;

const ProfileItem = styled.div`
  padding: 1em 1.5em;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  svg {
    max-width: 25px;
  }

  span {
    font-family: ${appFont.LIGHTPOPPING};
    position: relative;
    bottom: 3px;
    padding-left: 10px;
  }
`;

const Span = styled.span`
  color: ${appColors.WHITE};
  font-family: ${appFont.REGULAR};
  font-size: 16px;
  display: inline-block;
  padding: 1em;
  position: relative;
  bottom: 20px;
`;

const Navbar = (props) => {
  const [show_dropdown, setShowDropdown] = useState(false);
  const user_payload = JSON.parse(localStorage.getItem("payload"));

  const trigger_dropdown = () => {
    setShowDropdown(!show_dropdown);
  };

  const goTo = (data) => {
    setShowDropdown(false);
    props.history.push(`/dashboard/${data}`);
  };

  const log_out = (data) => {
    localStorage.removeItem("token");
    setShowDropdown(false);
    props.history.push(data);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav_icon" onclick="toggleSidebar()">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="containar">
          <div className="nav__content">
            <div className="navbar__left">
              <DashboardSearch />
            </div>

            <div className="navbar__right">
              {user_payload && <Span>{user_payload.first_name}</Span>}
              <AvatarProfile onClick={trigger_dropdown} />
              {show_dropdown && (
                <ProfileDropdown>
                  <div class="box arrow-top">
                    <ProfileItem onClick={() => goTo("user")}>
                      <Profile />
                      <span>Profile</span>
                    </ProfileItem>
                    {/* {user_payload &&
                      user_payload.companies[0].type !== "vendor" && ( */}
                    <ProfileItem onClick={() => goTo("users")}>
                      <Users />
                      <span>Users</span>
                    </ProfileItem>
                    {/* )} */}

                    <ProfileItem onClick={() => goTo("company")}>
                      <Company />
                      <span>Company</span>
                    </ProfileItem>
                    <ProfileItem onClick={() => log_out("/")}>
                      <Logout />
                      <span>Logout</span>
                    </ProfileItem>
                  </div>
                </ProfileDropdown>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
