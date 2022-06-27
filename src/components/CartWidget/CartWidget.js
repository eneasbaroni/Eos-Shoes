import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg";
import CartContext from "../../context/cartContext";
import "./cartWidget.css"

const CartWidget = ({filter}) => {
  const {cartQuantity} = useContext(CartContext)

  return (
    <>
      <Link to={`/cart`} className="cartContainer">                   
        <img src={cart} className="cart" alt="cart" height="23" style={{filter: `invert(${filter})`}}></img>
        {cartQuantity > 0 && <p className="cartQuantity">{cartQuantity}</p>}        
      </Link> 
    </>
  )
}

export default CartWidget;