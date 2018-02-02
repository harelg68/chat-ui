/**
 * Created by harelg on 29/01/2018.
 */

import * as Consts from '../constansts';
import * as Utils from '../utils/utils';

// Testing function getAvatar()
describe('Testing function getAvatar()', () => {
  describe('getAvatar()', () => {
    it('should return a valid Avatar URI', () => {
      expect(Consts.AVATAR_IMAGES.includes(Utils.getAvatar())).toEqual(true);
    });
  });
});

// Testing class LocalStorage { get, set }
describe('Testing class LocalStorage { get, set }', () => {
  describe('LocalStorage.get(key,defaultValue)', () => {
    it('should return the default value if the provided key doesn\'t exist', () => {

      // arrange
      const key = "abc123";
      const defaultValue = "1234";
      localStorage.removeItem(key);

      // act
      const value = Utils.LocalStorage.get(key,defaultValue);

      // assert
      expect(value).toEqual(defaultValue);
    });

    it('should return the saved value and not default one', () => {

      // arrange
      const key = "abc123";
      const savedValue = "4567";
      const defaultValue = "1234";
      localStorage.removeItem(key);

      // act
      Utils.LocalStorage.set(key,savedValue);
      const value = Utils.LocalStorage.get(key,defaultValue);

      //assert
      expect(value).toEqual(savedValue);
    });
  });
});