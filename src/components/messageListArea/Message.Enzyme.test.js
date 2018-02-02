/**
 * Created by harelg on 01/02/2018.
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Message from './Message';

function setup(deltaProps) {
  const props = {
    message: {
      avatar: "dog.png",
      username: "Test user",
      text: "Test message...",
      timestamp: 1517510731694
    },
    isOwner: true
  };
  return shallow(<Message {...(Object.assign({},props,deltaProps))} />);
}

// Testing <Message> component rendering.
describe('Testing <Message> component rendering', () => {
  it('should be rendered correctly', () => {
    const wrapper = setup(null);

    expect(wrapper.find('.clsMsgItem').props().className).toEqual(expect.stringContaining('clsOwnerMe'));
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have the correct style for own messages', () => {
    const wrapper = setup({isOwner: true});

    const userNameClass = wrapper.find('.clsMsgItem').props().className;
    expect(userNameClass).toEqual(expect.stringContaining('clsOwnerMe'));
    expect(userNameClass).not.toEqual(expect.stringContaining('clsOwnerOther'));
  });

  it('should have the correct style for others messages', () => {
    const wrapper = setup({isOwner: false});

    const userNameClass = wrapper.find('.clsMsgItem').props().className;
    expect(userNameClass).not.toEqual(expect.stringContaining('clsOwnerMe'));
    expect(userNameClass).toEqual(expect.stringContaining('clsOwnerOther'));
  });
});
