import { Menu_List } from "../../assets/asset"
import "./ExploreMenu.css"
export default function ExploreMenu({category, setCategory}){
    return(
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Choose from our diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
               {Menu_List.map((item,index) =>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All" : item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img src={item.menu_image} alt="" className={category===item.menu_name? "active" : ""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
               })}
               
            </div>
            <hr/>
        </div>
    )
}