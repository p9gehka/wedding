import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import logger from 'redux-logger';

const defaultState = {
    name: '',
    level: 0,
    prince: true,
    totalCoins: 0,
    timeIsOver: false
};

function reducer(state = defaultState, action) {
    switch(action.type) {
    case 'SET_NAME':
        if(state.timeIsOver) {
            return {...state, level:1, name: action.name, timeIsOver: false};
        } else {
            return {...state, level:1, name: action.name, totalCoins: 200 };
        }
    case 'NEXT_LEVEL':
        if(state.timeIsOver) {
            return {...state, level: state.level + 1, timeIsOver: false};
        } else {
            return {...state, level: state.level + 1, totalCoins: state.totalCoins + 200 };
        }
    case 'NO_PRINCE':
        return {...state, prince: false };
    case 'TIME_IS_OVER':
        return {...state, timeIsOver: true, };
    case 'ADD_COINS': 
        return {...state, totalCoins: state.totalCoins + action.coins};
    default:
        return {...state };
    }
}


let store = createStore(reducer, applyMiddleware(
      thunk,
      logger(),
      freeze));

export default store;

        

        