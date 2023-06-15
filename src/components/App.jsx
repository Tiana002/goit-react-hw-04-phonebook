import { useState } from "react";
import { Container } from "./Details/Container.styled";
import { ContactForm } from "./Contacts/ContactForm";
import { GlobalStyle } from "./GlobalStyle";
import { Filter } from "./FilterContact/FilterContact";
import { ContactList } from "./ContactList/ContactList";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocalStorage } from "hooks/useLocalStorage";

export const App =() => {
  const [contacts, setContacts] = useLocalStorage('contacts', [])
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


// export class Appp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
  
   

//   addNewContacts = (newContact) => {
//     const { contacts } = this.state;   
//     const duplicateName = contacts.map(el => el.name.toLowerCase());
    
//     return duplicateName.includes(newContact.name.toLowerCase())
//       ? Notify.info(`${newContact.name} is already in contacts.`)
//       : this.setState(prevState => {
         
//           return {
//             contacts: [...prevState.contacts, newContact],
//           };          
//         });      
//   };
    
//   onDeleteContacts = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => el.id !== id),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   getVisibleContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizeFilter)
//     );
//   };
 
//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
   
//     if (savedContacts !== null) {
//       // Если сохранили в LS уже что-то, пишем ЭТО в state
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     } else {
//       // Если в LS ничего еще нет, пишем в state initialContacts
//       this.setState({ contacts: initialContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
    
//     const { filter } = this.state;

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSave={this.addNewContacts} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={this.getVisibleContact()}
//           deleteContact={this.onDeleteContacts}
//         />
//         <GlobalStyle />
//       </Container>
//     );
//   }

// }