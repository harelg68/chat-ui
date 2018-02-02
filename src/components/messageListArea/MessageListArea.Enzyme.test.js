/**
 * Created by harelg on 02/02/2018.
 */
import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Message from './Message';
import MessageListArea from './MessageListArea';

const props = {
  userName: 'Harel',
  messages: [{
    avatar: "dog.png",
    username: "Harel",
    text: "Test message...",
    timestamp: 1517510731694
  }]
};

// Testing <MessageListArea> component rendering.
describe('Testing <MessageListArea> component rendering', () => {
  it('should be rendered correctly', () => {
    const wrapper = render(<MessageListArea {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render no messages when given an empty list', () => {
    const wrapper = shallow(<MessageListArea userName='Harel' messages={[]} />);

    expect(wrapper.find(Message).length).toEqual(0);
  });

  it('should render the correct amount of messages', () => {
    const wrapper = shallow(<MessageListArea {...props} />);

    expect(wrapper.find(Message).length).toEqual(props.messages.length);
  });
});