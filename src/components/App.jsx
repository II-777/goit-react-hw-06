import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import Stats from './Stats/Stats';
import css from './App.module.css';
import { FaAddressBook } from "react-icons/fa";

export default function App() {
  return (
    <div className={css.container}>
      <h1><FaAddressBook className={css.icon} />Phonebook</h1>
      <ContactForm />
      <Stats />
      <SearchBox />
      <ContactList />
    </div>
  );
}
