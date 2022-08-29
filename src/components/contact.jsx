import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import '../styles/contact.css';

const ContactComponent = ({ contact, toggleState, deleteContact }) => {
  const connectedIcon = () => {
    if (contact.connected) {
      return <i className="bi bi-circle-fill" style={{ color: 'green' }}></i>;
    } else {
      return <i className="bi bi-circle-fill" style={{ color: 'red' }}></i>;
    }
  };

  return (
    <div className="contact">
      <div className="info">
        <h2>
          {contact.name} {contact.surname}
        </h2>
        {connectedIcon()}
      </div>
      <div className="buttons">
        <button onClick={() => toggleState(contact)}>
          {contact.connected ? 'Disconnect' : 'Connect'}
        </button>
        <button onClick={() => deleteContact(contact)}>Delete</button>
      </div>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  toggleState: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactComponent;
