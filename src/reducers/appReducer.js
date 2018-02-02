/**
 * Created by harelg on 29/01/2018.
 */

import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.USER_NAME_UPDATED:
      return Object.assign({}, state, {userName: action.userName});

    case ActionTypes.CHAT_MESSAGE_RECEIVED:
      let message = Object.assign({},action.message);
      return Object.assign({}, state, {messages: [...state.messages, message]});

    default:
      return state;
  }
}