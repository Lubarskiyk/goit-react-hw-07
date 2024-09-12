import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectFilters } from "../../redux/filtersSlice.js";

export default function ContactList() {
  const phoneBook = useSelector(selectContacts);
  const filteredBook = useSelector(selectFilters);

  const visibleContacts = phoneBook.filter(phone =>
    phone.name.toLowerCase().includes(filteredBook.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(data => (
        <li key={data.id} className={css.contact}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
}
