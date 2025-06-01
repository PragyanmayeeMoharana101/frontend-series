import { useContext } from "react";
import "./FoodDisplay.css"
import FoodItem from "../foodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

export default function FoodDisplay({category}){
    const {food_list}= useContext(StoreContext)
    return(
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item,index)=>{
                        if(category==="All" || category=== item.category){
                            return <FoodItem key={index} id={item.id} name={item.name} description ={item.desc} price={item.price} image={item.image}/>
                        }
                        
                    })
                }
            </div>
        </div>
    )
}