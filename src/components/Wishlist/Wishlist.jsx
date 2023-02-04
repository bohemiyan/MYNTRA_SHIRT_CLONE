import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./Wishlist.css";

import { WishCard } from "../../components";

function Wishlist() {
  const { wishlist, setPage, setSearchedData } = useContext(StoreContext);

  let cards = wishlist.map((data) => (
    <WishCard key={data[0]} id={data[0]} txt={data[1]} img={data[2]} price={data[3]} />
  ));

  return (
    <>
      {wishlist.length === 0 && (
        <div className="wishlist_page_empty">
          <div className="wishlist_heading">YOUR WISHLIST IS EMPTY</div>
          <div className="wishlist_info">
            Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
          </div>
          <div className="web_sprite wishlistEmpty-icon"></div>
          <div>
            <button
              className="wishlistEmpty-btn"
              onClick={() => {
                setPage("home");
                setSearchedData("");
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      )}
      {wishlist.length > 0 && (
        <div className="wishlist_page">
          <div className="wishlist_heading">
            My Wishlist{" "}
            <span className="item-count">
              {" "}
              - {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="wishlist_body">
            {cards}
            <div className="dummyCard"></div>
            <div className="dummyCard"></div>
            <div className="dummyCard"></div>
            <div className="dummyCard"></div>
            <div className="dummyCard"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
