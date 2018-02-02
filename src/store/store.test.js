/**
 * Created by harelg on 01/02/2018.
 */
//import expect from 'expect';
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import initialState from '../reducers/initialState';
import * as appActions from '../actions/actions';
import appReducer from '../reducers/appReducer';

// Testing the application's Store.
describe('Testing the application\'s Store', function() {

  let store;
  beforeEach(() => {
    store = createStore(appReducer,
                        initialState,
                        applyMiddleware(thunk, reduxImmutableStateInvariant()));
  });

  it('Should handle updating user name', function() {

    // arrange
    const userName = 'Harel Gruia';

    // act
    const action = appActions.saveUserName(userName);
    store.dispatch(action);

    // assert
    expect(store.getState().userName).toEqual(userName);
  });

  it('Should handle adding new chat message', function() {

    // arrange
    const message = { username: "Harel Gruia", test: "Testing 1 2 3"};

    // act
    const action = appActions.addChatMessage(message);
    store.dispatch(action);

    // assert
    expect(store.getState().messages.length).toEqual(1);
    // Same values diffrent object.
    expect(store.getState().messages[0]).toEqual(message);
    expect(store.getState().messages[0]).not.toBe(message);
  });

});