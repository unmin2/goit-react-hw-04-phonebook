import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { button_det } from './ContactList.styled';

function ContactList({ contacts, del }) {
  const deleteId = (Id) => {
    del(Id);
  };

  const createList = () => {
    return contacts.map((contact) => (
      <li key={uuidv4()} id={contact.id}>
        {`${contact.name}: ${contact.number}`}
        <button
          className={button_det}
          data-id={contact.id}
          onClick={() => deleteId(contact.id)}
        >
          Delete
        </button>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};

export default ContactList;
