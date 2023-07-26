import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContact,
  StyledContactList,
  StyledDatas,
  StyledListBtn,
} from './ContactListStyled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <StyledContactList>
      {filteredContacts.map(({ id, number, name }) => {
        return (
          <StyledContact key={id}>
            <StyledDatas>
              {name}: {number}
            </StyledDatas>
            <StyledListBtn
              type="button"
              name="delete"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              Delete
            </StyledListBtn>
          </StyledContact>
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
