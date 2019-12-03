import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots} from './reducers';



const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
//we need to create a store
//store uses a reducer to create a store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))


ReactDOM.render(
    //provder passes down store to all the components
    <Provider store={store}>
        <App/>
    </Provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
