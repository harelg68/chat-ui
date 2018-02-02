/**
 * Created by harelg on 29/01/2018.
 */

// Our ChatApp top level React component
////////////////////////////////////////

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import ChatClient from './chatClient/ChatClient'
import styled from 'styled-components';

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;

class App extends React.PureComponent {
  render() {
    return <Container className={'spotim-header'}>
      <div className={'spotim-title'}>
        Welcome to the Spot.IM Chat app
      </div>
      <div>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>
      <ChatClient />
      </div>
    </Container>
  }
}

export default App;