import { useContext, useState } from "react"
import { assets } from "../../assets/asset"
import "./FoodItem.css"
import { StoreContext } from "../../context/StoreContext";
export default function FoodItem({id,name,price,description,image}){

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    return(
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt="" />
                {!cartItems[id] ? <img src={assets.add_icon_white} className="add" onClick={()=>addToCart(id)}/>: 
                <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    {cartItems[id]}
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
                    
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_star} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}