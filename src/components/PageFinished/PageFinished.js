import "./PageFinished.css"
import { useEffect} from "react";
import axios from "axios";

export default function PageFinished(props){
    const reserve=props.reserve;
    const seatsChosen=props.seatsChosen;
    const info=props.info;
    console.log(info, seatsChosen)
    useEffect(()=>{

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",reserve);
    
        promisse.then((evet)=>console.log(evet,"deu bom"))
    
    
    
       },[])


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
            <button className="button-seats">Voltar pra Home</button>
        </div>
    );
}