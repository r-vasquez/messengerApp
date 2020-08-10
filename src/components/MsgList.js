import React from 'react';

class MsgList extends React.Component {
  delete(id) {
    this.props.handleDelete(id);
  }
  render() {
    return (
      <React.Fragment>
        <h5>Mensajes enviados:</h5>
        <ul>
          {this.props.msgList.map(msg => {
            return (
              <li key={msg.id}>
                {msg.msg}
                <button onClick={this.delete.bind(this, msg.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default MsgList;
