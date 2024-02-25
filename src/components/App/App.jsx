import { useState } from 'react';
import initialContact from '../../contacts.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState(initialContact);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contacts} />
    </div>
  );
}
