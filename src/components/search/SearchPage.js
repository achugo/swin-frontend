import React, { useEffect, useState } from "react";
import VideoCarousel from "../carousel/Carousel";
import Main from "../main/Main";
import SubNav from "../navbar/SubNav";
import DashboardResult from "../search-results/DashboardResults";
import styled from "styled-components";
import VedeoCarousel from "../video-carousel/VideoCarousel";
import { Redirect, useRouteMatch, withRouter } from "react-router-dom";
import api from "../../api/api";
import DynamicResults from "../search-results/DynamicResults";

const SearchPage = () => {
  const match = useRouteMatch();
  const [search_result, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    search_product(match.params.id.replace(/%/g, " "));
  }, [match.params.id]);

  const search_product = async (data) => {
    setLoading(true);
    let payload = {
      category: data,
    };
    const status = await api.create("guest/search", payload);
    if (status.status) {
      setLoading(false);
      setSearchResult(status.data);
    } else {
      setLoading(false);
      if (status) {
        console.log(status);
      }
    }
  };

  console.log("results", search_result);

  return (
    <>
      <Main>
        <VedeoCarousel />
        {search_result && (
          <DynamicResults products={search_result} loading={loading} />
        )}
      </Main>
    </>
  );
};

export default withRouter(SearchPage);
