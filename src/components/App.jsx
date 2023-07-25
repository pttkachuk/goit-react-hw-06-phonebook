import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import { StyledMainContainer } from './FileContainer/StyledContainer';

export default function App() {
  return (
    <StyledMainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      <ContactList />
    </StyledMainContainer>
  );
}
