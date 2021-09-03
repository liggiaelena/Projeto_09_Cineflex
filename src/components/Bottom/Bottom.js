import "./Bottom.css";
import { useState } from "react";

export default function Bottom(props){
    const {posterURL, movieTitle}=props;
    console.log(posterURL, movieTitle);
    const [day, setDay]= useState("");

    return(
        <div className="bottom">
            <img src={posterURL} alt=""/>
            <div className="info">
                <p>{movieTitle}</p>
                <p></p>
            </div>
            
        </div>
    );
}