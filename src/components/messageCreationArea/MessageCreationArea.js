/**
 * Created by harelg on 30/01/2018.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/actions';
import {Form, Button, Image, Container} from 'semantic-ui-react'

class MessageCreationArea extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { text: "",
                   btnDisabled:  true};

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onSubmit = () => {
    // Send and clear the text area.
    this.props.sendMessage(this.state.text);
    this.setState({ text: '' });
    this.setState({ btnDisabled: true });
  }

  onChange = (event) => {
   //console.log(event.target.id);

    switch(event.target.id)
    {
      case 'user-name':
        this.props.actions.saveUserName(event.target.value);
        break;
      case 'text':
        this.setState({ text: event.target.value });
        break;
    }

    setTimeout(this.validateForm, 500);
  }

  validateForm() {

    const validForm = typeof(this.state.text) === 'string' &&
                      this.state.text.length > 0 &&
                      typeof(this.props.userName) === 'string' &&
                      this.props.userName.length > 0;

    console.log(`validForm = ${validForm}`);
    this.setState({ btnDisabled: !validForm });
  }

  render() {
    return  <Container className ={'message-creation-area'}>
      <Form className={'message-creation'} size={'tiny'} key={'tiny'}>
        <Form.Group>
          <Form.Field width={2}><Image src={this.props.userAvatar} /></Form.Field>
          <Form.Input width={6}  required placeholder='User Name' id='user-name' value={this.props.userName} onChange={this.onChange} />
        </Form.Group>
        <Form.Group>
          <Form.Input width={13} required id='text' value={this.state.text} onChange={this.onChange} />
          <Form.Button size={'tiny'} disabled={this.state.btnDisabled} content='Send' color='blue' onClick={this.onSubmit}></Form.Button>
        </Form.Group>
      </Form>
    </Container>
  }

}

MessageCreationArea.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(MessageCreationArea);