import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import HM from './store/reducers/HM'
import MediaMarket from './store/reducers/MediaMarket'

import thunk from 'redux-thunk'



import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    HM,
    MediaMarket
  

})

const store = createStore(reducer,
    
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
