import PropTypes from 'prop-types';
import { Label, Text } from './FilterContact.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};