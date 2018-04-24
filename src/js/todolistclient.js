import React from 'react';
import ReactDom from 'react-dom';
import TrelloContainer from './components/TrelloContainer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
ReactDom.render(
    <Provider store={store}>
        <TrelloContainer />
    </Provider>,
    document.getElementById('app')
)