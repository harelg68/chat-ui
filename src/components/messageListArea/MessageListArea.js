/**
 * Created by harelg on 30/01/2018.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Container} from 'semantic-ui-react'
import Message from './Message';

class MessageListArea extends Component {
  render() {

    const {userName, messages} = this.props;

    return <Container className={'message-list-area'}>
        <List className={'message-list'}>
          {
            messages.map((message, inx) => {
              return <Message key={inx} message={message} isOwner={message.username === userName} />;
            })
          }
        </List>
      </Container>
  }
}

MessageListArea.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
};

export default MessageListArea;