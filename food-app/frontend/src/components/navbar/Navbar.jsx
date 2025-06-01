import { useContext, useState } from "react"
import { assets } from "../../assets/asset"
import "./navbar.css"
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
export default function Navbar({setShowLogin}){
    const [menu, setMenu] = useState("Home");
    const {getTotalCartAmount}=useContext(StoreContext)
    return(
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={(e)=>setMenu("Home")} className={menu==="Home" ? "active":""}>Home</Link>
                <a href="#explore-menu" onClick={(e)=>setMenu("Menu")} className={menu==="Menu" ? "active":""}>Menu</a>
                <a href="#app-download" onClick={(e)=>setMenu("MobileApp")} className={menu==="MobileApp" ? "active":""}>Mobile App</a>
                <a href="#footer" onClick={(e)=>setMenu("ContactUs")} className={menu==="ContactUs" ? "active":""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                  <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
                   <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>{setShowLogin(true)}}>sign in</button>

            </div>
        </div>
    )
}