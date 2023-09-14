import {combineReducers, createStore, applyMiddleware} from 'redux';

import Reducers from './Reducers';
import thunk from 'redux-thunk';

const AppReducers = combineReducers({
  Reducers,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
