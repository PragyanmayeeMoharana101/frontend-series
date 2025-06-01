import { useState } from "react"
import { assets } from "../../assets/asset"
import "./LoginPopup.css"
export default function LoginPopup({setShowLogin}){
    const[curState, setCurState] =useState("Login")
    return(
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    <img src={assets.cross_icon} onClick={()=>{setShowLogin(false)}} />
                </div>
                <div className="login-popup-input">
                    {
                        curState==="Login"?<></>:<input type="text" placeholder="Your Name" required/>
                    }
                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{curState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to terms of use & privacy policy</p>
                </div>
                {
                    curState==="Login"
                    ?<p>Create a new account? <span onClick={()=>{setCurState("Sign Up")}}>Click here</span></p>:
                    <p>Already have an account? <span onClick={()=>{setCurState("Login")}}>Login here</span></p>
                }
            </form>
        </div>
    )
}