import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/Exploremenu";
import Header from "../../components/header/Header";
import FoodDisplay from "../../components/foodDisplay/FoodDispaly";
import AppDownload from "../../components/appDownload/AppDownload";

export default function Home(){
    const [category, setCategory] = useState("All")
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
}