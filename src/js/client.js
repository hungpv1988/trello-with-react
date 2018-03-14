import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Bootstrap from 'bootstrap-without-jquery';
import ComponentWithRegex from './components/ComponentWithRegex';
import ParamsExample from './components/ParamsExample';
const app = document.getElementById('app');
ReactDOM.render(
    <ParamsExample/>
    , app);

