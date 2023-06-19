import { useState } from "react";
import { Container } from "./Details/Container.styled";
import { ContactForm } from "./Contacts/ContactForm";
import { GlobalStyle } from "./GlobalStyle";
import { Filter } from "./FilterContact/FilterContact";
import { ContactList } from "./ContactList/ContactList";
import initialContacts from "../contacts.json";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocalStorage } from "hooks/useLocalStorage";


const LS_CONTACTS_KEY = 'contacts';
export const App =() => {
  const [contacts, setContacts] = useLocalStorage(LS_CONTACTS_KEY, initialContacts);
  const [filter, setFilter] = useState('');


 const addNewContacts = (newContact) => {  
    const duplicateName = contacts.map(el => el.name.toLowerCase());
    
    return (duplicateName.includes(newContact.name.toLowerCase())
      ? Notify.info(`${newContact.name} is already in contacts.`)
      : setContacts(prevContacts => [...prevContacts, newContact])
         );
  };

  const onDeleteContacts = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id)
    );
  };

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSave={addNewContacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContact()}
        deleteContact={onDeleteContacts}
      />
      <GlobalStyle />
    </Container>
  ); 
}


