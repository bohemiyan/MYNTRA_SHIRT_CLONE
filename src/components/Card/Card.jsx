import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import { toast } from "react-toastify";
import smlrimg from "./similr.png"

import "./Card.css";

const Card = ({ida, id, brand, txt, img, price}) => {
  //const { bag, wishlist, setBag, setWishlist, setProduct, setPage } = useContext(StoreContext);
  const {wishlist,setWishlist, setProduct, setPage } = useContext(StoreContext);
 
 
 
    function showBtns() {
    document.getElementById(id).style.display = "block";
   
  }
  function hideBtns() {
    document.getElementById(id).style.display = "none";
    
  }
  
  function addToWishList(e) {
    stopPropagation(e)
    if (wishlist.map((e) => e[0]).includes(id)) toast("This Product already in Wishlist");
    else {
      setWishlist([...wishlist, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Wishlist");
    }
  }
  // function addToBag(e) {
  //   stopPropagation(e)
  //   if (bag.map((e) => e[0]).includes(id)) toast("This Product already in Bag");
  //   else {
  //     setBag([...bag, [id, brand + " " + txt, img, price]]);
  //     toast("1 Product added to Bag");
  //   }
  // }
  function navProductPage() {
    setProduct([id, brand + " " + txt, img, price]);
    setPage("product");
  }
  function stopPropagation(e) {
    e.stopPropagation();
  }

// onMouseEnter={showBtns} onMouseLeave={hideBtns}

  return (
    <div className="Card" onClick={navProductPage}onMouseEnter={showBtns} onMouseLeave={hideBtns} >
     <img className="shirt_img" src={img} alt="" />

      <div className="btns" id={id} onClick={stopPropagation}>
      <button className="similer" >
  <span className="spinner" >VIEW SIMILAR</span>
  <img src={smlrimg} className="smlrimg" alt=""/>
</button>
                <button className="wishlist-btn" onClick={addToWishList}>
          <span className="web_sprite wishlist-icon"></span>WISHLIST
        </button>
       <p>SIZE:39</p> 
      </div>
      <div className="shirt_info">
        <div className="shirt-brand">{brand}</div>
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
    </div>
  );
};

export default Card;
