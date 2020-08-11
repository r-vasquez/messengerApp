import React from 'react';
import Messenger from './Messenger';

class ChatContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Messenger />
        <Messenger />
        <Messenger />
      </React.Fragment>
    );
  }
}

export default ChatContainer;
