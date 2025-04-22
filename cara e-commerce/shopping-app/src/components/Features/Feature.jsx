import { feature } from "../../assets/assets";
import "./Feature.css"
export default function Feature(){
    return(
        <div className="section-p1 feature">
        {feature.map((item)=>{
            return(
                <div className="fe-box">
                    <img src={item.image} alt="" />
                    <h6>{item.text}</h6>
                </div>
            )
        })}
        </div>
    )
}