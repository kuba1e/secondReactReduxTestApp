import React from "react";
import "./shop-cart-page.css";

const ShopCartPage = (props) => {

  const {cart, hideCart} = props
  return (
    <div className="cart-side-bar" onMouseLeave={hideCart}>
      <ul className="list-group">
        {cart.map((good, index)=>{
           return <li key={index} className="list-group-item">{good.title}</li>
        })}
        </ul>
    </div>
  );
};

export default ShopCartPage;
