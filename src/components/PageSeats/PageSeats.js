import "./PageSeats.css";

export default function PageSeats(){
    return(
        <div className="page">
             <div className="description-seats">
            Selecione o(s) assento(s)
            </div>
            <div className="seats">
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 
                <div className="seat">
                    01
                </div> 

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