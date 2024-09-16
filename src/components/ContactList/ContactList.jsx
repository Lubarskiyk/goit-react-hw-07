import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectFilters } from "../../redux/filtersSlice.js";
import { getIsContacts } from "../../redux/selectors.js";

export default function ContactList() {
  const phoneBook = useSelector(getIsContacts);
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
