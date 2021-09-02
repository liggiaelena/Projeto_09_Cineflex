import "./PageDate.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PageDate( ){
    const [days, setDays]=useState([]);
    const params = useParams();
    console.log(params)

     useEffect(()=>{
         const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${params.idFilme}/showtimes`)
         promisse.then((response)=>{
            setDays(response.data.days);
         })
     },[])


    return(
        <div className="page">
            <div className="description-date">Selecione o horário</div>
            <div className="dates">
                 {days.map((day)=>
                     <div className="date">
                        <p>{day.weekday} - {day.date}</p>
                        <div className="time-options">
                            {day.showtimes.map(({name,id})=>
                                <div className="time">
                                    {name}
                                </div>
                            )}
                        </div>  
                    </div>
                )}
            </div>
               
            
        </div>
    );
}