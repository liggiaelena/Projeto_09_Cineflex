import "./PageSeats.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Seat from "./Seat";

export default function PageSeats(){
    const [seats, setSeats]=useState([]);
    const params = useParams();

    useEffect(()=>{

        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${params.idSessao}/seats`)
        promisse.then((response)=>{
            setSeats(response.data.seats);
            console.log(response.data)
        })

    },[]);


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
        </div>
    
       
    );
}