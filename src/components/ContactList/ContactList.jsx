import PropTypes from 'prop-types';
import { ListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
      <List>
        {contacts.map(({ id, name, number }) => (
        <ListItem 
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={deleteContact} />
      ))}
      </List>
    );
  };

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
