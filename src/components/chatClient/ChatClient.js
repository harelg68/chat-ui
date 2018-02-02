/**
 * Created by harelg on 30/01/2018.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/actions';
import chatApi from '../../api/chatApi';

// The Child Components
import MessageListArea from '../messageListArea/MessageListArea';
import MessageCreationArea from '../messageCreationArea/MessageCreationArea';

export class ChatClient extends Component {
  constructor(props, context) {
    super(props, context);

    this.onMessage = this.onMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    // Register as message Handler
    chatApi.registerMessageHandler(this.onMessage);
  }

  onMessage(message) {
    console.log("Recived Message - " + JSON.stringify(message));
    this.props.actions.addChatMessage(message)
  }

  sendMessage(messageText) {

    var message = { avatar: this.props.userAvatar,
                    username: this.props.userName,
                    text: messageText};

    console.log("Sent Message - " + JSON.stringify(message));
    chatApi.sendMessage(message);
  }

  render() {

    const {userName, userAvatar, messages} = this.props;

    return (
      <div className='chat-container'>
        <MessageListArea messages={messages} userName={userName}/>
        <MessageCreationArea userName={userName}
                             userAvatar={userAvatar}
                             sendMessage={this.sendMessage} />

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(appActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatClient);
