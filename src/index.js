import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./CSS/reset.css"
import "./CSS/styles.css"
import {useState } from "react";
import Top from "./components/Top/Top";
import PageMovie from './components/PageMovie/PageMovie';
import PageDate from './components/PageDate/PageDate';
import PageSeats from './components/PageSeats/PageSeats';
import PageFinished from './components/PageFinished/PageFinished';
import Bottom from './components/Bottom/Bottom';

function Root(){

    const[info,setInfo]=useState([]);

    return(
        <BrowserRouter>
          <Top key={7}/>
            <Switch>
                <Route path="/" exact>
                    <PageMovie key={1}/> 
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <PageDate key={2}/> 
                    <Bottom key={3}/> 
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    <PageSeats key={4}/> 
                    
                </Route>
                <Route path="/sucesso" exact>
                    <PageFinished key={6}/>
                </Route>
            </Switch>     
        </BrowserRouter>

    );
}

ReactDOM.render(<Root key={8}/>, document.querySelector(".root"));

