import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./ResultBox.css";

import { Card } from "../../components";

function ResultBox() {
  const { shirtData, setShirtData, sortBox, setSortBox, setClearAllFilters,filteredShirtData } = useContext(StoreContext);

  
  let cards = shirtData.map((data) => {
    let brand = "",
      txt = "";
    let bt = [];
    if (data[1].includes("Men")) {
      bt = data[1].split(" Men ");
      txt = "Men " + bt[1];
    } else if (data[1].includes("Women")) {
      bt = data[1].split(" Women ");
      txt = "Women " + bt[1];
    } else if (data[1].includes("Boys")) {
      bt = data[1].split(" Boys ");
      txt = "Boys " + bt[1];
    } else if (data[1].includes("Girls")) {
      bt = data[1].split(" Girls ");
      txt = "Girls " + bt[1];
    }
    brand = bt[0];
  

    return <Card key={data[0]} id={data[0]} img={data[2]} brand={brand} txt={txt} price={data[3]} />;
  });

  function showSortByDropDown() {
    document.querySelector(".sortByDropDown").style.display = "block";
  }
  function hideSortByDropDown() {
    document.querySelector(".sortByDropDown").style.display = "none";
  }
  function hideSortByDropDown2() {
    document.querySelector(".sortByDropDown").style.display = "none";
  }
  function sortLtoH() {
    setClearAllFilters(false);
    setSortBox("Price: Low to High");
    document.querySelectorAll(".sortByDropDown li").forEach((li) => (li.style.fontWeight = "100"));
    document.querySelector("#LTH").style.fontWeight = "600";

    let sortedList = shirtData;
    sortedList.sort((a, b) => a[3] - b[3]);
    setShirtData(sortedList);
  }
  function sortHtoL() {
    setClearAllFilters(false);
    setSortBox("Price: High to Low");
    document.querySelectorAll(".sortByDropDown li").forEach((li) => (li.style.fontWeight = "100"));
    document.querySelector("#HTL").style.fontWeight = "600";

    let sortedList = shirtData;
    sortedList.sort((a, b) => b[3] - a[3]);
    setShirtData(sortedList);
  }
  function Recomended() {
    setClearAllFilters(false);
    setSortBox("Recommended");
    document.querySelectorAll(".sortByDropDown li").forEach((li) => (li.style.fontWeight = "100"));
    document.querySelector("#RCM").style.fontWeight = "600";


    setShirtData(filteredShirtData);
  }

  return (
    <div className="ResultBox">
      <div className="topbar">
        <div className="sortbox" onMouseMove={showSortByDropDown} onMouseLeave={hideSortByDropDown}>
          Sort by: <b>{sortBox}</b>
          <span className="web_sprite downArrow-icon"></span>
          <div className="sortbox sortByDropDown" onMouseLeave={hideSortByDropDown2}>
            <ul>
            <li id="RCM" onClick={Recomended}>
            Recommended
              </li>
              <li id="LTH" onClick={sortLtoH}>
                Price: Low to High
              </li>
              <li id="HTL" onClick={sortHtoL}>
                Price: High to Low
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shirtCards">
        {cards}
        <div className="dummyCard"></div>
        <div className="dummyCard"></div>
        <div className="dummyCard"></div>
        <div className="dummyCard"></div>
      </div>
      {shirtData.length === 0 && <div className="no_shirt_found"> No match found. Please try different filters. </div>}
    </div>
  );
}

export default ResultBox;
