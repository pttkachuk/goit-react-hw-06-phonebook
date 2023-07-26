import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledBtn,
  StyledContactDiv,
  StyledContactForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './ContactFormStyled';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onNumberChange = event => {
    setNumber(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.some(value => value.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContacts({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledContactDiv>
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            value={name}
            onChange={onNameChange}
            type="text"
            name="name"
            placeholder="Your name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Number</StyledSpan>
          <StyledInput
            value={number}
            onChange={onNumberChange}
            type="tel"
            name="number"
            placeholder="Your number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    </StyledContactDiv>
  );
}
