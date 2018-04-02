import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//import Bootstrap from 'bootstrap-without-jquery';
import ComponentWithRegex from './components/ComponentWithRegex';
import MyApp from './components/todolist/MyApp';
import rootReducer from './reducers/rootReducer';
import Title from './components/Header/Title';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const initialState = {};
const store = createStore(rootReducer, initialState);

const AppRoot = (
    <Provider store ={store}> 
            <MyApp />
    </Provider>
)

const app = document.getElementById('app');
ReactDOM.render(
    <AppRoot />
, app);
