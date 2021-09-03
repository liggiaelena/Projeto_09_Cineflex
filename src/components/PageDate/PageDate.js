import "./PageDate.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom"
import Bottom from "../Bottom/Bottom"

export default function PageDate(props){
    const updateTitle=props.updateTitle;
    const info=props.info;
    const [days, setDays]=useState([]);
    const [movieTitle, setMovieTitle]= useState("");
    const [posterURL, setPosterURL]= useState("");
    const params = useParams();
    console.log(params)

     useEffect(()=>{
         const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${params.idFilme}/showtimes`)
         promisse.then((response)=>{
            setDays(response.data.days);
            setMovieTitle(response.data.title);
            setPosterURL(response.data.posterURL);
            console.log(response.data.title)
            updateTitle(response.data.title);
            console.log(info);
            
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
                                <Link className="time" to={`/assentos/${id}`}>
                                    {name}
                                </Link>
                            )}
                        </div>  
                    </div>
                )}
            </div>
               
            <Bottom movieTitle={movieTitle} posterURL={posterURL} day=""/> 
        </div>
    );
}