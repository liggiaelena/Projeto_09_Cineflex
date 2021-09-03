import "./Bottom.css";

export default function Bottom(props){
    const {posterURL, movieTitle, day}=props;

    return(
        <div className="bottom">
            <img src={posterURL} alt=""/>
            <div className="info">
                <p>{movieTitle}</p>
                <p>{day}</p>
            </div>
            
        </div>
    );
}