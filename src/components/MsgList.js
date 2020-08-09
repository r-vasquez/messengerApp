import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MsgList = props => {
  const msgList = props.msgList.map((msg, index) => {
    return (
      <li key={index}>
        {msg}
        <button>
          <FontAwesomeIcon icon={faTrash} color='red' />
        </button>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h5>Mensajes enviados:</h5>
      <ul>{msgList}</ul>
    </React.Fragment>
  );
};

export default MsgList;
