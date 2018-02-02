/**
 * Created by harelg on 02/02/2018.
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import {Form, Button, Image, Container} from 'semantic-ui-react';
import MessageCreationArea from './MessageCreationArea';

function setup(deltaProps, deepRendering) {
  const props = {
    userName: "Harel",
    userAvatar: "Dog.png",
    sendMessage: () => {},
    actions: {saveUserName: (userName) => {}}
  };

  const fn = deepRendering ? render : shallow;
  return fn(<MessageCreationArea {...(Object.assign({},props,deltaProps))} />);
}

// Testing <MessageCreationArea> component rendering.
describe('Testing <MessageCreationArea> component rendering', () => {
  it('should be rendered correctly', () => {
    const wrapper = setup(null, true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Send button should be disabled when user name or message are empty', () => {
    const wrapper = setup(null, false);
    expect(wrapper.find(Form.Button).props().disabled).toBeTruthy();
  });
});