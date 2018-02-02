/**
 * Created by harelg on 29/01/2018.
 */

import * as Consts from '../constansts';

// Util Functions
/////////////////
export const getAvatar = () => Consts.AVATAR_IMAGES[Math.floor(Math.random() * Consts.AVATAR_IMAGES.length)];
export const logObject = (obj) => console.log(JSON.stringify(obj));

// Util Helper classes
//////////////////////
export class LocalStorage {
  static get(key, defaultValue) {
    let value = window.localStorage.getItem(key);
    return (typeof value !== 'undefined' && value !== null) ?
      value : LocalStorage.set(key, defaultValue)
  }

  static set(key, value) {
    window.localStorage.setItem(key, value);
    return window.localStorage.getItem(key);
  }
}

class LocalStorageMock {
  constructor() { this.store = {}; }

  getItem(key) { return this.store[key]; }
  setItem(key, value) { this.store[key] = value.toString(); }
  clear() { this.store = {}; }
  removeItem(key) { delete this.store[key]; }
}

// Mocking localStorage for testing.
if(process.env.NODE_ENV === 'test')
  Object.defineProperty(window, 'localStorage', {value: new LocalStorageMock()});