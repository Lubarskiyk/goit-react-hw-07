import "./App.css";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
