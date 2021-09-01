import "./PageDate.css";
import "./PageMovie.css";

export default function PageDate( ){
    return(
        <div className="page">
            <div className="description-date">Selecione o horário</div>
            <div className="date">
               <p>Quinta-feira - 24/06/2021</p>
               <div className="time-options">
                  <div className="time">
                   15:00
               </div>
               <div className="time">
                   19:00
               </div> 
               </div>
               
               </div>
            <div className="date">
                <p>Sexta-feira - 25/06/2021</p>
                <div className="time-options">
                  <div className="time">
                   15:00
               </div>
               <div className="time">
                   19:00
               </div> 
               </div>
           </div>
            
        </div>
    );
}