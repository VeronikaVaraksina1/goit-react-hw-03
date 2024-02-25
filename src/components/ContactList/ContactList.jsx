import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ul>
        {contacts.map(contact => (
          <li className={css.container} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
