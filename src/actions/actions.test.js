/**
 * Created by harelg on 01/02/2018.
 */

import * as Utils from '../utils/utils';
import * as ActionTypes from './actionTypes';
import * as appActions from './actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);
const store = mockStore({userName: "", userAvatar: "", messages: []});

// Testing the application Actions.
describe('Testing Application\'s Actions', () => {

  afterEach(() => { store.clearActions(); });

  it('saveUserName(userName) should create a USER_NAME_UPDATED action', () => {
    //arrange
    const userName = 'Harel Gruia';
    const expectedAction = { type: ActionTypes.USER_NAME_UPDATED, userName };

    // act
    store.dispatch(appActions.saveUserName(userName));

    // assert
    expect(store.getActions()[0]).toEqual(expectedAction);
  });

  it('addChatMessage(message) should create a CHAT_MESSAGE_RECEIVED action', () => {
    // arrange
    const message = {username: 'Harel Gruia', text: 'Test Message'};
    const expectedAction = { type: ActionTypes.CHAT_MESSAGE_RECEIVED, message };

    // act
    store.dispatch(appActions.addChatMessage(message));

    // assert
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});