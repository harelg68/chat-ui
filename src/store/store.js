/**
 * Created by harelg on 29/01/2018.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from '../reducers/appReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    reducer, //combineReducers({reducer}),
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
