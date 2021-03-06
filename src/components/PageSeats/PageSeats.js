import "./PageSeats.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Seat from "./Seat";
import Bottom from "../Bottom/Bottom";
import {Link} from "react-router-dom";

export default function PageSeats(props){
    const updateDayAndTime=props.updateDayAndTime;
    const info=props.info;
    const updateSeats=props.updateSeats;
    const updateNameAndCpf=props.updateNameAndCpf;
    const [seats, setSeats]=useState([]);
    const params = useParams();
    const [day, setDay] = useState("")
    const [movieTitle, setMovieTitle]= useState("");
    const [posterURL, setPosterURL]= useState("");
    const [seatsId, setSeatsId]= useState([]);
    const [seatsName, setSeatsName]= useState([]);
    const [name, setBuyerName] = useState("");
    const [cpf, setBuyerCpf] = useState("");
    const [reserve, setReserve] = useState({});
    const [allComplete, setAllComplite]=useState(false)
   
    useEffect(()=>{

        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${params.idSessao}/seats`)
        promisse.then((response)=>{
            setSeats(response.data.seats);
            setMovieTitle(response.data.movie.title);
            setPosterURL(response.data.movie.posterURL);
            setDay(response.data.day.weekday + " - "+response.data.name)
            updateDayAndTime(response.data.day.date +" "+response.data.name)
            
            
        })
    },[]);

   function updatereserveSeats(){

    if(name === "" || cpf ===""){
        setAllComplite(false);
    }
    else{
        setAllComplite(true);
    }

        const ids = seatsId;
       
       setReserve({ids,name,cpf});
       console.log(reserve);

       updateSeats(seatsName);
       updateNameAndCpf(name,cpf);
    
       
       
       
   }
   function reserveSeats(){
const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",reserve);
    console.log(reserve);
    promisse.then((evet)=>console.log(evet,"deu bom"))
   }

  

   console.log(reserve);
console.log(info);

    return(
        <div className="page">
             <div className="description-seats">
            Selecione o(s) assento(s)
            </div>
            <div className="seats">
                {seats.map((seat)=>
                    <Seat seat={seat} setSeatsId={setSeatsId} seatsId={seatsId} seatsName={seatsName} setSeatsName={setSeatsName}/>
                )}
            </div>
            <div className="subtitles">
                <div className="subtitle">
                    <div className="selected"></div> 
                    <p>Selecionado</p>
                </div>
                <div className="subtitle">
                    <div className="available"></div> 
                    <p>Dispon??vel</p>
                </div>
                <div className="subtitle">
                    <div className="unavailable"></div> 
                    <p>Indispon??vel</p>
                </div>
            </div>
            <div className="personal-infos">
                <p>Nome do comprador</p>
                <input placeholder="Digite seu nome..." value={name} onChange={(event)=>{setBuyerName(event.target.value); updatereserveSeats();}}></input>
                <p>Nome do comprador</p>
                <input placeholder="Digite seu CPF..." value={cpf} onChange={(event)=>{setBuyerCpf(event.target.value); updatereserveSeats();}}></input>
            </div>
            <Link to={allComplete? "/sucesso":`/assentos/${params.idSessao}`} reserve={reserve}>
             <button className="button-seats" onClick={reserveSeats}>Reservar assentos(s)</button>
            </Link>
           
            <Bottom movieTitle={movieTitle} posterURL={posterURL} day={day}/>
        </div>
    
       
    );
}