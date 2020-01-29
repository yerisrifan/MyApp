import {createStore, applyMiddleware} from 'redux';

import playerReducer from './reducer';

const store = createStore(playerReducer);
export default store;
