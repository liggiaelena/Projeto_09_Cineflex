import ReactDOM from 'react-dom';
import "./CSS/reset.css"
import "./CSS/styles.css"
import Top from "./components/Top";
//import PageMovie from './components/PageMovie';
//import PageDate from './components/PageDate';
//import PageSeats from './components/PageSeats';
import PageFinished from './components/PageFinished';
import Bottom from './components/Bottom';

function Root(){
    return(
        <div>
            <Top />
            {/* <PageMovie /> */}
              {/* <PageDate /> */}
            {/* <PageSeats /> */}
            <PageFinished />
            <Bottom /> 
        </div>

    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));

