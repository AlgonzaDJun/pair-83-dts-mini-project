import React from "react";
import Row from "../components/Row";
import requests from "../apis/request";

const RowCard = () => {
  return (
    <div style={{backgroundColor:"#141414"}}>
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Continue, Watching" fetchUrl={requests.fetchContinueWatch} isContinue/>
      <Row title="On the Agenda" fetchUrl={requests.fetchAgenda} />
      <Row
        title="Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Top 10 Indonesian Movies"
        fetchUrl={requests.fetchTopIndonesian}
        isTopTen
      />
      <Row title="Watch Again" fetchUrl={requests.fetchWatchAgain} />
      <Row title="My List" fetchUrl={requests.fetchMyList} />
    </div>
  );
};

export default RowCard;
