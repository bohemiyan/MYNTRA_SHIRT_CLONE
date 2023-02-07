import React, { useContext , useState} from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import { toast } from "react-toastify";

import "./Product.css";

function Product() {
  const { product, bag, setBag, wishlist, setWishlist } = useContext(StoreContext);

  let id = product[0];
  let brandtxt = product[1];
  let img = product[2];
  let price = product[3];

  let brand = "",
    txt = "";
  let bt = [];
  if (brandtxt.includes("Men")) {
    bt = brandtxt.split(" Men ");
    txt = "Men " + bt[1];
  } else if (brandtxt.includes("Women")) {
    bt = brandtxt.split(" Women ");
    txt = "Women " + bt[1];
  } else if (brandtxt.includes("Boys")) {
    bt = brandtxt.split(" Boys ");
    txt = "Boys " + bt[1];
  } else if (brandtxt.includes("Girls")) {
    bt = brandtxt.split(" Girls ");
    txt = "Girls " + bt[1];
  }
  brand = bt[0];

  function addToWishList() {
    if (wishlist.map((e) => e[0]).includes(id)) toast("This Product already in Wishlist");
    else {
      setWishlist([...wishlist, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Wishlist");
    }
  }
  function addToBag() {
    if (bag.map((e) => e[0]).includes(id)) toast("This Product already in Bag");
    else {
      setBag([...bag, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Bag");
    }
  }


  
 function selectsz(){ const sizeBtns = document.querySelectorAll('.circles'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})
 }




// image full view
 const [fullimg, setfullimg] = useState(null)
const showimg=()=>{
  setfullimg(
    <div className="fullimgcon"  >
      <button className="fimgcls" onClick={()=>{setfullimg(null)}}>
      <i className="fa-solid fa-circle-xmark fa-3x"></i>
        </button>
        <div className="zoomable-image" id="zoomable-image">
   <input type="checkbox" name="zoomable-image-checkbox" id="zoomable-image-checkbox"/>
   <label id="zoomable-image-label" for="zoomable-image-checkbox">
      <img src={img} alt=""/>
   </label>
</div>
    </div>
  )
}





  return (
    <div className="product_page"  >
     
      <div className="product">
        <img className="product_img-bag" src={img} alt="" onClick={showimg}/>
       
   <div className="product_info">
          <h1 className="product-brand">{brand}</h1>
          <h1 className="product-txt">{txt}</h1>
          <div className="product-price">Rs. {price}</div>
          <div className="product-tax">inclusive of all taxes</div>
          
          <div className="Selectsize"><span> SELECT SIZE </span> <span> SIZE CHART   </span></div>
    <div className="Pleaseselectsize">Please select a size</div>

    <div className="productSizesdiv" onMouseOver={selectsz}>
    <button className="circles" >S</button>
    <button className="circles">M</button>
    <button className="circles">L</button>
    <button className="circles">XL</button>
    <button className="circles">XXL</button>
    </div>

          <div className="btns-section">
            <button className="wishlist-btn" onClick={addToWishList}>
              <span className="web_sprite wishlist-icon"></span>WISHLIST
            </button>
            <button className="addbag-btn" onClick={addToBag}>
              <span className="web_sprite addbag-icon"></span>ADD TO BAG
            </button>
            <div className="deliverOption"> DELIVERY OPTIONS <img src="https://media.istockphoto.com/vectors/fast-delivery-truck-icon-fast-shipping-design-for-website-and-mobile-vector-id1302438914?k=20&m=1302438914&s=170667a&w=0&h=8HroNF2rhDbQCruNiN6ExIbplmIIMcD3vmFN6Z2CZNU=" alt=""  /></div>

<div className="enterPincode"><input type="text" placeholder="Enter a PIN code"/>CHECK</div>
<p className="pinp">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>

<p className="paya">100% Original Products </p>
<p className="paya">Pay on delivery might be available</p>
<p className="paya">Easy 30 days returns and exchanges</p>
<p className="paya">Try & Buy might be available</p>
              </div>
             
    
        </div>
      </div>
      {fullimg}
    </div>
  );
}

export default Product;
