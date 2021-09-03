import "./PageSeats.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Seat from "./Seat";
import Bottom from "../Bottom/Bottom";

export default function PageSeats(props){
    const updateDayAndTime=props.updateDayAndTime;
    const info=props.info;
    const [seats, setSeats]=useState([]);
    const params = useParams();
    const [day, setDay] = useState("")
    const [movieTitle, setMovieTitle]= useState("");
    const [posterURL, setPosterURL]= useState("");

    useEffect(()=>{

        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${params.idSessao}/seats`)
        promisse.then((response)=>{
            setSeats(response.data.seats);
            setMovieTitle(response.data.movie.title);
            setPosterURL(response.data.movie.posterURL);
            setDay(response.data.day.weekday + " - "+response.data.name)
            updateDayAndTime(response.data.day.date +" "+response.data.name)
            console.log(info);
            
            
            console.log(response.data)
        })
    },[]);

    

console.log(info);
    return(
        <div className="page">
             <div className="description-seats">
            Selecione o(s) assento(s)
            </div>
            <div className="seats">
                {seats.map((seat)=>
                    <Seat seat={seat}/>
                )}
            </div>
            <div className="subtitles">
                <div className="subtitle">
                    <div className="selected"></div> 
                    <p>Selecionado</p>
                </div>
                <div className="subtitle">
                    <div className="available"></div> 
                    <p>Disponível</p>
                </div>
                <div className="subtitle">
                    <div className="unavailable"></div> 
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="personal-infos">
                <p>Nome do comprador</p>
                <input placeholder="Digite seu nome..."></input>
                <p>Nome do comprador</p>
                <input placeholder="Digite seu CPF..."></input>
            </div>
            <button className="button-seats">Reservar assentos(s)</button>
            <Bottom movieTitle={movieTitle} posterURL={posterURL} day={day}/>
        </div>
    
       
    );
}