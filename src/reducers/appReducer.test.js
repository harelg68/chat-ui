/**
 * Created by harelg on 01/02/2018.
 */

import * as ActionTypes from '../actions/actionTypes';
import appReducer from './appReducer';

// Testing the application's Reducer.
describe('Testing Application\'s Reducer', () => {
  const initialState = {userName: "Some Name", userAvatar: "", messages: []};
  let state = initialState;

  it('should update userName when passed USER_NAME_UPDATED', () => {
    // arrange
    const userName = 'Harel Gruia';
    const action = {type: ActionTypes.USER_NAME_UPDATED, userName};

    //act
    state = appReducer(state, action);

    //assert
    expect(state.userName).toEqual(userName);
  });

  it('should add the first message when passed CHAT_MESSAGE_RECEIVED for the first time', () => {
    // arrange
    const message = {username: 'Harel Gruia', text: "Some Text - 1"};
    const action = {type: ActionTypes.CHAT_MESSAGE_RECEIVED, message};

    // act
    state = appReducer(state, action);

    // assert
    expect(state.messages.length).toEqual(1);
    expect(state.messages[0].username).toEqual(message.username);
    expect(state.messages[0].text).toEqual(message.text);
  });


  it('should add a second message when passed CHAT_MESSAGE_RECEIVED for the second time', () => {
    // arrange
    const message = {username: 'Harel Gruia', text: "Some Text - 2"};
    const action = {type: ActionTypes.CHAT_MESSAGE_RECEIVED, message};

    // act
    state = appReducer(state, action);

    // assert
    expect(state.messages.length).toEqual(2);
    expect(state.messages[1].username).toEqual(message.username);
    expect(state.messages[1].text).toEqual(message.text);
  });

  it('should ignore non valid/supported action', () => {
    // arrange
    const action = {type: '', value: null};

    // act
    const nextState = appReducer(state, action);

    // assert
    expect(nextState).toEqual(state);
  });

});