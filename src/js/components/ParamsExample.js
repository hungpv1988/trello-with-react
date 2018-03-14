import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Bootstrap from 'bootstrap-without-jquery';
import ComponentWithRegex from './ComponentWithRegex';

export default class ParamsExample extends React.Component {
    constructor()
    {
        super();
    }

    render(){
        return(
            <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
    
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
    
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                </ul>
            </div>
            <Route path="/:id" component={Child}/>
            <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
        </Router>
        );

    }
}


const Child = ({match}) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

