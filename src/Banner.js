import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get Out and Strech your imagination</h1>
        <h5>
          Plan a diiferent kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore NearBy
        </Button>
      </div>
    </div>
  );
}

export default Banner;
