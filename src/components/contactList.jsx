import React, { useState, useRef } from 'react';
import ContactComponent from './contact';
import { Contact } from '../models/contact.class';
import '../styles/contactList.css';

const ContactsListComponent = () => {
  const defaultContact1 = new Contact(
    'Nicolas',
    'Moyano',
    'nicomoyano@gmail.com',
    true
  );

  const defaultContact2 = new Contact(
    'Juan',
    'Perez',
    'juanperez@gmail.com',
    true
  );

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

  const nameRef = useRef('');
  const surnameRef = useRef('');
  const emailRef = useRef('');

  const toggleState = (contact) => {
    const index = contacts.indexOf(contact);
    const temporalContacts = [...contacts];
    temporalContacts[index].connected = !temporalContacts[index].connected;
    setContacts(temporalContacts);
  };

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    const temporalContacts = [...contacts];
    temporalContacts.splice(index, 1);
    setContacts(temporalContacts);
  };

  const addContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      true
    );
    const temporalContacts = [...contacts];
    temporalContacts.push(newContact);
    setContacts(temporalContacts);
  };

  return (
    <div>
      <form onSubmit={addContact}>
        <input id="name" placeholder="Name" ref={nameRef}></input>
        <input id="surname" placeholder="Surname" ref={surnameRef}></input>
        <input id="email" placeholder="Email" ref={emailRef}></input>
        <button type="submit">Add</button>
      </form>
      <div className="contacts-list">
        {contacts.map((contact, index) => {
          return (
            <ContactComponent
              contact={contact}
              key={index}
              toggleState={toggleState}
              deleteContact={deleteContact}
            ></ContactComponent>
          );
        })}
      </div>
    </div>
  );
};

export default ContactsListComponent;
