import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  
  const [contacts, setContacts]=useState([]);
  const [filterPhonebook, setFilterPhonebook]=useState('');

  const formSubmitHandler = data => {
    const inContacts = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    let message = `${data.name} is already in contacts`;
    if (inContacts) {
      return alert(message);
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  const deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };

  const componentDidMount = () => {
    const contactsInLs = JSON.parse(localStorage.getItem('contacts'));
    if (contactsInLs) {
      this.setState({contacts: contactsInLs})
    }
  }
  const componentDidUpdate = (prevProps, prevState) => {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtred = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className="wrap">
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter onChange={this.changeFilter} filter={filter} />
          <ContactList contacts={filtred} deleteContact={this.deleteContact} />
        </div>
      </div>
    );
}


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   formSubmitHandler = data => {
//     const inContacts = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase()
//     );
//     let message = `${data.name} is already in contacts`;
//     if (inContacts) {
//       return alert(message);
//     }
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//     console.log(this.state.filter);
//   };

//   componentDidMount(){
//     const contactsInLs = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsInLs) {
//       this.setState({contacts: contactsInLs})
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if(this.state.contacts !== prevState.contacts){
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const filtred = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return (
//       <div className="wrap">
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.formSubmitHandler} />

//           <h2>Contacts</h2>
//           <Filter onChange={this.changeFilter} filter={filter} />
//           <ContactList contacts={filtred} deleteContact={this.deleteContact} />
//         </div>
//       </div>
//     );
//   }
// }