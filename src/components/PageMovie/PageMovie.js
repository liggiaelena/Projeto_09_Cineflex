import "./PageMovie.css";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";



export default function Page(){

const [movies, setMovies]= useState([]);

useEffect(()=>{
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

    promisse.then((response)=>{
        setMovies(response.data);
        console.log(response.data)
        
    });
},[]);


    return(
        <div className="page">
            <div className="description">Selecione o filme</div>
            <div className="movies">
                {movies.map((movie)=>
                    <Link to={`/sessoes/${movie.id}`} className="movie">
                    <img src={movie.posterURL} alt=""/>
                    </Link>
                )}
                
            </div>
        </div>
    );
}