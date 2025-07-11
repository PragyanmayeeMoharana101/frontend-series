import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import "./cart.css"
import { useNavigate } from "react-router-dom";
export default function Cart(){
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    const navigate = useNavigate();
    return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item,index)=>{
                    if(cartItems[item.id]>0){
                        return(
                            <div className="cart-items-title cart-items-item">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>${item.price * cartItems[item.id]}</p>
                                <p className="cross" onClick={()=>removeFromCart(item.id)}>X</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotals</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}