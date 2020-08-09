import React from 'react';
import MsgList from './MsgList';

class Messenger extends React.Component {
  listaTemp = ['hola', 'como', 'estas'];

  constructor() {
    super();
    this.state = {
      message: '',
      msgList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addMessage(event) {
    this.setState({
      msgList: [...this.state.msgList, this.state.message],
      message: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h4>Mensajero</h4>
        <form onSubmit={this.addMessage}>
          <input
            type='text'
            name='message'
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button>Enviar</button>
        </form>
        <MsgList msgList={this.state.msgList} />
      </React.Fragment>
    );
  }
}

export default Messenger;
