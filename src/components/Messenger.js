import React from 'react';
import MsgList from './MsgList';

class Messenger extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      idCont: 0,
      msgList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addMessage(event) {
    this.setState({
      msgList: [...this.state.msgList, { id: this.state.idCont, msg: this.state.message }],
      idCont: this.state.idCont + 1,
      message: ''
    });
    event.preventDefault();
  }

  handleDelete(id) {
    let filteredList = this.state.msgList.filter(el => {
      return el.id !== id;
    });
    this.setState({
      msgList: filteredList
    });
  }

  render() {
    return (
      <div>
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
        <MsgList msgList={this.state.msgList} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Messenger;
