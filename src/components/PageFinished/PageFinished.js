import "./PageFinished.css"
//import { useEffect} from "react";
//import axios from "axios";
import {Link} from "react-router-dom"

export default function PageFinished(props){
    //const reserve=props.reserve;
    const seatsChosen=props.seatsChosen;
    const info=props.info;
    console.log(info, seatsChosen)


    return(
        <div className="page">
            <h2>Pedido feito com sucesso!</h2>
            <div className="purchase-information">
                <h3>Filme e sessão</h3>
                <p>{info.title}</p>
                <p>{info.date}</p>
            </div>
            <div className="purchase-information">
                <h3>Ingressos</h3>
                {seatsChosen.map((seat)=> <p>{`Assento ${seat}`}</p>)}
            </div>
            <div className="purchase-information">
                <h3>Comprador</h3>
                <p>{info.name}</p>
                <p>{info.cpf}</p>
            </div>
            <Link to="/">
            <button className="button-seats">Voltar pra Home</button>
            </Link>
            
        </div>
    );
}