import React from "react";
import demo from "../../img-assets/demo.svg";
import presentation from "../../img-assets/presentations.svg";
import webinars from "../../img-assets/webinar.svg";
import podcast from "../../img-assets/podcast.svg";
import tutorials from "../../img-assets/tutorials.svg";
import new_ from "../../img-assets/whats_new.svg";
import brochure from "../../img-assets/brochure.svg";
import blog from "../../img-assets/Blog.svg";
import references from "../../img-assets/references.svg";
import "./style.css";
import styled from "styled-components";
import { useRouteMatch, withRouter } from "react-router-dom";

const CollateralCard = styled.div`
  background-color: white;
  padding: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  border-radius: 10px;

  @media screen and (max-width: 1400px) {
    padding: 1rem;
  }
`;

const DigitalCollateral = ({ collateral, id, history }) => {
  const match = useRouteMatch();
  const formatSelected = (data) => {
    if (data === "Demo") {
      return demo;
    }
    if (data === "Whats' New") {
      return new_;
    }
    if (data === "Presentations") {
      return presentation;
    }
    if (data === "Tutorials") {
      return tutorials;
    }
    if (data === "Podcast") {
      return podcast;
    }
    if (data === "Webinars") {
      return webinars;
    }
    if (data === "Banners/Fliers") {
      return brochure;
    }
    if (data === "Blog") {
      return blog;
    }
    if (data === "References") {
      return references;
    }
  };

  return (
    <div className="ui three column grid stackable">
      {collateral &&
        collateral.map((item) => (
          <div className="column">
            <CollateralCard
              onClick={() =>
                history.push(
                  `/dashboard/product/${match.params.id}/${item.category}`
                )
              }
            >
              <div className={"card-content"}>
                <img
                  src={formatSelected(item.category)}
                  alt=""
                  height={60}
                  style={{ maxWidth: "40px" }}
                />
                <h5>{item.category}</h5>
              </div>
            </CollateralCard>
          </div>
        ))}
    </div>
  );
};
export default withRouter(DigitalCollateral);
