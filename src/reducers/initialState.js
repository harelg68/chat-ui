/**
 * Created by harelg on 29/01/2018.
 */

import * as Consts from '../constansts';
import * as Utils from '../utils/utils';

const testMessages = [];

// Don't start empty...
if(process.env.NODE_ENV !== 'test') {
  for(let i=0; i<7; i++) {
    testMessages.push({
      avatar: Utils.getAvatar(),
      username: `User #${i+1}`,
      text: `test message................................. (#${i})`,
      timestamp: Date.now()
    })
  }}

export default {
  userName: Utils.LocalStorage.get(Consts.USER_NAME, ''),
  userAvatar: Utils.LocalStorage.get(Consts.USER_AVATAR, Utils.getAvatar()),
  messages: testMessages // []
};