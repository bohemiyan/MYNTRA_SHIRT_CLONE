import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./Home.css";

import { Filters, ResultBox } from "../../components";

function Home() {
  const { shirtData, genderName, filteredShirtData, setPage, searchedData, setSearchedData } = useContext(StoreContext);
  return (
    <>
   
      {filteredShirtData.length === 0 && (
        <div className="home_page_empty">
          <div className="searched_data">
            You searched for <span className="hi_blu">{searchedData}</span>
          </div>
          <img
            src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
            alt="bag_empty_image"
            className="no_res_img"
          />
          <div className="home_heading_empty">We couldn't find any matches!</div>
          <div className="home_info">Please check the spelling or try searching something else</div>
          <div>
            <button
              className="homeEmpty-btn"
              onClick={() => {
                setPage("home");
                setSearchedData("");
              }}
            >
              GO TO HOME PAGE
            </button>
          </div>
        </div>
      )}
      {filteredShirtData.length > 0 && (
        <div className="home_page">
          <div className="home_heading">
            {searchedData === "" ? `Shirts for ${genderName}` : `Search result for ${searchedData}`}
            <span className="item-count">
              - {shirtData.length} {shirtData.length === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="home_body">
            <Filters />
            <ResultBox />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
