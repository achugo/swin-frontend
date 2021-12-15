import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../img-assets/icon-search.svg";
import styled from "styled-components";
import FlexItem from "../flex/FlexItem";
import FlexWrap from "../flex/FlexWrap";
import { WrapInput } from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import { appFont } from "../../appTheme/appFont";
import { withRouter } from "react-router-dom";

const Product = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #0000001c;
  border-radius: 10px;
  margin: 2em 0;
  padding: 0.5em 1em;
  cursor: pointer;

  & div {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  height: 100;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 70px;
  }

  svg {
    max-height: 20px;
    margin: 0 1em;
    cursor: pointer;
  }
`;

const NotifyContent = styled.div`
  padding-left: 20px;
  position: relative;
  top: 20px;
  & h4 {
    color: #334a90;
    font-family: ${appFont.MEDIUM};
  }

  & span {
    color: #6e6e6e;
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const WrapSearch = styled.div`
  position: relative;
  max-height: 350px;
  overflow: auto;
  background-color: #fbfbfb;
  box-shadow: 0 18px 15px rgb(0 0 0 / 23%);
  padding: 0.5em;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const HomeSearch = (props) => {
  const [search_result, setSearchResult] = useState([]);
  const [search_input, setInput] = useState("");

  const search_product = async (e) => {
    setInput(e.target.value);

    let payload = {
      category: e.target.value,
    };
    const status = await api.create("guest/search", payload);
    if (status.status) {
      setSearchResult(status.data);
    } else {
      if (status) {
        console.log(status);
      }
    }
  };

  const goToSearchPage = (e) => {
    e.preventDefault();
    props.history.push(`/dashboard/search/${search_input}`);
  };
  return (
    <div className="dashboard__search">
      <form onSubmit={goToSearchPage}>
        <div className="wrap__search" style={{ zIndex: 90 }}>
          <input
            type="text"
            placeholder="search"
            value={search_input}
            onChange={search_product}
          />

          <button type="submit">
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(HomeSearch);
