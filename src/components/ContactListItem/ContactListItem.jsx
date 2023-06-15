import PropTypes from 'prop-types';
import { Button, Item, Thumb } from './ContactListItem.styled';

export const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item key={id}>
      <Thumb>
        <p>{name}: </p>
        <p>{number}</p>
      </Thumb>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};