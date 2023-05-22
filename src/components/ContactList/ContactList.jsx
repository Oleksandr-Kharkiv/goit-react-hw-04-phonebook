import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { ContactListComponent } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListComponent>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListComponent>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};



// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import { Contact } from '../Contact/Contact';
// import css from './ContactList.module.css';

// export const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(contact => (
//         <Contact
//           key={contact.id}
//           id={contact.id}
//           name={contact.name}
//           number={contact.number}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
