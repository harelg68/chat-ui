/**
 * Created by harelg on 29/01/2018.
 */

import * as ActionTypes from './actionTypes';
import * as Consts from '../constansts';
import * as Utils from '../utils/utils';

export function saveUserName(userName) {
  // Save the user name to our persistent storage.
  Utils.LocalStorage.set(Consts.USER_NAME, userName);

  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.USER_NAME_UPDATED, userName });
  };
}
export function addChatMessage(message) {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.CHAT_MESSAGE_RECEIVED, message });
  };
}