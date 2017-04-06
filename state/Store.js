import {applyMiddleware, combineReducers, createStore} from 'redux';
import {effectsMiddleware} from 'redux-effex';
import dataReducer from './DataReducer';

export default createStore(
    combineReducers({
        data: dataReducer
    })
);