import React, { useState, useContext, useEffect } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./Nav.scss";
import { ReactComponent as Logo } from "../../img-assets/white-logo.svg";
import { ReactComponent as SignInIcon } from "../../img-assets/nav-signin-icon.svg";
import { ReactComponent as SignUpIcon } from "../../img-assets/nav-signup-icon.svg";
import { withRouter, Link, useRouteMatch } from "react-router-dom";
import DashboardSearch from "../search/DashboardSearch";
import HomeSearch from "../search/HomeSearch";

// import { userContext } from "../../store/UserContext";
// import { appUrl } from "../../services/urls";

const Navigation = (props) => {
  //   const context = useContext(userContext);
  //   const fullname = `${context.user.firstName} ${context.user.surName}`;

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

  return (
    <>
      <div className={`nav dark-blue`}>
        <div className="nav__content">
          <span
            className="logo"
            onClick={() => props.history.push("/")}
            style={{ cursor: "pointer" }}
          >
            <Logo />
          </span>
          <div className="user f-left">
            <HomeSearch />
          </div>
          <div className="user f-right">
            <span className="pad__right0">
              <button onClick={() => goTo("/login")} className="sign-in">
                <span>Sign In</span>
                <SignInIcon />
              </button>
            </span>

            <span className="pad__right0">
              <button onClick={() => goTo("/register")} className="sign-up">
                <span>Sign Up</span>
                <SignUpIcon />
              </button>
            </span>
          </div>
          <span className="user f-right">
            {/* <div className="dropdown-wrap">
          <div
            className="avatar"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="icon.png" height="30" alt="" />
          </div>
          
          <img
            src="caret.png"
            style={{
              width: 10,
              marginLeft: 12,
              transform: open ? `rotate(180deg)` : "",
            }}
            alt=""
          />
          <div className="dropdown">
            <ul>
              <li className="bb" onClick={toProfile}>
                Edit profile{" "}
                <img src="image.png" className="f-right m15" alt="" />{" "}
              </li>
              <li onClick={logout}>
                Logout <img src="item.png" className="f-right m15" alt="" />{" "}
              </li>
            </ul>
          </div>
        </div> */}
          </span>

          {/* {context.isLoggedIn && (
        <span className="inp">
          <img src={search} alt="" />
          <input type="text" placeholder="What do you want learn?" />
        </span>
      )} */}
          <div
            id="nav-icon1"
            // onClick={() => setshow_nav(!show_nav)}
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

            {/* <div className="bottom__mobile__nav">
              <button className="login__">Login</button>
              <button className="sign__up">Sign Up</button>
              <div className="media__icons">
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
              </div>
            </div> */}
            {/* {context.isLoggedIn && (
          <p onClick={() => goTo("logout")}>
            {/* <img src={logoutIcon} className="logo" alt="" /> *s
            Logout
          </p>
        )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Navigation);
