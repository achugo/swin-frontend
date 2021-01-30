import React, { useState, useContext, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./Nav.scss";
import { ReactComponent as Software } from "../../img-assets/mysoftwares.svg";

import { withRouter, Link, useRouteMatch } from "react-router-dom";
import DashboardSearch from "../search/DashboardSearch";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";

const SoftwareButton = styled.button`
  background: transparent linear-gradient(104deg, #3f9aff 0%, #42a2ff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  padding: 0.6em 1.4em !important;
  height: 40px;
  font-family: ${appFont.REGULAR};
  color: white;
`;

const CorporateNav = (props) => {
  const [open, setopen] = useState(false);
  const [show_nav, setshow_nav] = useState(false);

  const match = useRouteMatch();
  console.log(match);

  const logout = () => {
    // context.logout();
    setTimeout(() => {
      props.history.push("/login");
    }, 200);
  };

  const goTo = (to) => {
    props.history.push(to);
    if (to === "logout") logout();
    setshow_nav(false);
  };

  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    if (match.url != "/") {
      setScrollState("white");
    }
  }, []);

  useEffect(() => {
    if (match.path === "/") {
      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 100) {
          if (scrollState !== "white") {
            setScrollState("white");
            console.log("scrolled!!");
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top");
          }
        }
      });
      return () => {
        document.removeEventListener("scroll", listener);
      };
    }
  }, [scrollState]);

  return (
    <>
      <div className={`nav corporate__nav`}>
        <div className="nav__content">
          <DashboardSearch />
          <SoftwareButton>Softwares</SoftwareButton>
          <div
            id="nav-icon1"
            onClick={() => setshow_nav(!show_nav)}
            className={show_nav ? "open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`mobilenav ${show_nav ? "open" : ""}`}>
            {/* <input type="text" placeholder="What do you want learn?" /> */}
            {/* <p onClick={() => goTo("edit")}>
          <img src={edit} className="logo" alt="" />
          Edit Profile
        </p> */}
            <p onClick={() => goTo("/")}>About</p>
            <p onClick={() => goTo("/buy")}>Blog</p>
            <p onClick={() => goTo("/rent")}>FAQ</p>
            <p onClick={() => goTo("/login")}>LOGIN</p>
            <p onClick={() => goTo("/request")}>SIGN UP</p>
          </div>
        </div>
        <div className="navigation__links">
          <AnchorLink href="#home">Home</AnchorLink>
          <AnchorLink href="#whoweare">Who we are</AnchorLink>
          <AnchorLink href="#mission">Mission and vision</AnchorLink>
          <AnchorLink href="#mission">Services</AnchorLink>
          <AnchorLink href="#mission">Values</AnchorLink>
          <AnchorLink href="#team">Team</AnchorLink>
          <AnchorLink href="#contact">Contact Us</AnchorLink>
        </div>
      </div>
    </>
  );
};

export default withRouter(CorporateNav);
