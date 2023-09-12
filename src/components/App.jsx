import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const repeatControl = (data) => {
    const nameArray = contacts.map((cur) => cur.name);
    if (!nameArray.includes(data.name)) {
      const arrayCont = [
        ...contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      setContacts(arrayCont);
    } else {
      alert('Контакт вже є у телефонній книзі!!!');
    }
  };

  const elementDelete = (arr, idContact) => {
    const newArr = arr.filter((elem) => elem.id !== idContact);
    return newArr;
  };

  const deleteContactFromContactList = (idContact) => {
    const newArrAfterDel = elementDelete(contacts, idContact);
    setContacts(newArrAfterDel);
  };

  const setFilterToState = (filterData) => {
    setFilter(`${filterData}`);
  };

  const filterArr = (fArr) => {
    const newArr = fArr.filter((cur) =>
      cur.name.toUpperCase().includes(filter),
    );
    return newArr;
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={repeatControl} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilterToState} />
      <ContactList
        contacts={filterArr(contacts)}
        del={deleteContactFromContactList}
      />
    </div>
  );
}

export default App;
