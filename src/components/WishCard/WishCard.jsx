import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import { toast } from "react-toastify";

import "./WishCard.css";

function WishCard({ id, txt, img, price }) {
  const { bag, setBag, wishlist, setWishlist, setProduct, setPage } = useContext(StoreContext);

  function removeFromWishList() {
    setWishlist([...wishlist.filter((e) => e[0] !== id)]);
    toast("1 Product removed from Wishlist");
  }
  function moveToBag() {
    if (!bag.map((e) => e[0]).includes(id)) {
      setBag([...bag, [id, txt, img, price]]);
    }
    setWishlist([...wishlist.filter((e) => e[0] !== id)]);
    toast("1 Product moved to Bag");
  }
  function navProductPage() {
    setProduct([id, txt, img, price]);
    setPage("product");
  }
  return (
    <div className="WishCard" id={id}>
      <img className="shirt_img" src={img} alt="" onClick={navProductPage}/>
      <button className="wishlist-cross-btn" onClick={removeFromWishList}>
        <span className="web_sprite wishlist-cross"></span>
      </button>
      <div className="shirt_info">
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
      <div className="move-btn" onClick={moveToBag}>MOVE TO BAG</div>
    </div>
  );
}

export default WishCard;
