import { useState } from "react";


export default function Seat(props){
    const {isAvailable, name, id}=props.seat;
    const [chosenSeat, setChosenSeat]=useState(false);

    function seatSelected(isAvailable){
        console.log(isAvailable);
        if(isAvailable){
            setChosenSeat(true);
        }

    }

    return(
            <div className={(chosenSeat?"selected ":"") + (isAvailable ? "seat available":"seat unavailable")} onClick={()=>seatSelected(isAvailable)}>
                {name}
            </div> 
        );
}