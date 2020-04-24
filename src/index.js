import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './containers/store/reducer';
import thunk from 'redux-thunk';



const composedEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=createStore(reducer,composedEnhancers(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store} ><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
