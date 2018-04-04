import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//import Bootstrap from 'bootstrap-without-jquery';
import ComponentWithRegex from './components/ComponentWithRegex';
import MyApp from './components/todolist/MyApp';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = [{
    todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
}];
const store = createStore(rootReducer, {
    todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
});
ReactDOM.render(
  <Provider store ={store}>
    <MyApp />
  </Provider>
, document.getElementById('app'));
