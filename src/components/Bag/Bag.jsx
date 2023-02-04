import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./Bag.css";

import { BagCard } from "../../components";

function Bag() {
  const { bag, setPage } = useContext(StoreContext);

  let total = bag.map((e) => e[3]).reduce((pre, cur) => pre + cur, 0);

  let cards = bag.map((data) => {
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
    return <BagCard key={data[0]} id={data[0]} brand={brand} txt={txt} img={data[2]} price={data[3]} />;
  });

  return (
    <>
      {bag.length === 0 && (
        <div className="bag_page_empty">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png"
            alt="bag_empty_image"
            style={{ width: "145px" }}
          />
          <div className="bag_heading">Hey, it feels so light!</div>
          <div className="bag_info">There is nothing in your bag. Let's add some items.</div>
          <div>
            <button className="bagEmpty-btn" onClick={() => setPage("wishlist")}>
              ADD ITEMS FROM WISHLIST
            </button>
          </div>
        </div>
      )}
      {bag.length > 0 && (
        <div className="bag_page">
          <div className="bag_left">{cards}</div>
          <div className="bag_right">
            <div className="price_details">
              PRICE DETAILS ({bag.length} {bag.length === 1 ? "Item" : "Items"})
            </div>
            <div className="price_info">
              <span>Total Price</span>
              <span>Rs. {total}</span>
            </div>
            <div className="price_info">
              <span>Delivery Fee</span>
              <span>Rs. 99</span>
            </div>
            <div className="price_info upline">
              <span>Total Amount</span>
              <span>Rs. {total + 99}</span>
            </div>
            <button className="place_order_btn" disabled>PLACE ORDER</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Bag;
