import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
          </li>
        ))
      ) : (
        <li className={css.item}>No contacts found</li>
      )}
    </ul>
  );
}
