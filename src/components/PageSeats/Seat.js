import { useState } from "react";


export default function Seat(props){
    const {isAvailable, name, id}=props.seat;
    const setSeatsId=props.setSeatsId;
    const seatsId=props.seatsId;
    const seatsName= props.seatsName;
    const setSeatsName=props.setSeatsName;
    const [chosenSeat, setChosenSeat]=useState(false);
   

    function seatSelected(isAvailable){
        console.log(isAvailable);
        if(isAvailable){
            let newarray=[];
            if(!chosenSeat){
                setSeatsId([...seatsId,id]);
                setSeatsName([...seatsName,name]);
            }
            else{
                 newarray = seatsId.filter((seatId)=> {
                    console.log(seatId, id)
                    if(seatId !== id){
                        return true;
                    }
                    else {return false;}
                })
                setSeatsId(newarray);
                newarray = seatsName.filter((seatName)=> {
                    console.log(seatName, name)
                    if(seatName !== name){
                        return true;
                    }
                    else {return false;}
                })
                setSeatsName(newarray);
            };
            
            setChosenSeat(!chosenSeat);
        }
        else{ alert("Esse assento não está disponível")}

}

    return(
            <div className={(chosenSeat?"selected ":"") + (isAvailable ? "seat available":"seat unavailable")} onClick={()=>seatSelected(isAvailable)}>
                {name}
            </div> 
        );
}