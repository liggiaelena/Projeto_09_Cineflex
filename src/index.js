import ReactDOM from 'react-dom';
import "./CSS/reset.css"
import "./CSS/styles.css"
import Top from "./components/Top";
//import PageMovie from './components/PageMovie';
//import PageDate from './components/PageDate';
import PageSeats from './components/PageSeats';
import Bottom from './components/Bottom';

function Root(){
    return(
        <div>
            <Top />
            {/* <PageMovie /> */}
              {/* <PageDate /> */}
            <PageSeats />
            <Bottom /> 
        </div>

    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));

