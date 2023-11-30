import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Checkbox } from '@mui/material';
import {
  decreaseDoneAmount,
  increaseDoneAmount,
} from '../../../redux/todoSlice';
import { editTODOs } from '../../../redux/todoOperations';

const CheckboxItem = ({ id, text, state }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (id, text, checked) => {
    if (checked === true) {
      dispatch(increaseDoneAmount());
    } else if (checked === false) {
      dispatch(decreaseDoneAmount());
    }
    dispatch(editTODOs({ id, text, state: checked }));
  };

  return (
    <Checkbox
      checked={state}
      onChange={e => handleCheckboxChange(id, text, e.currentTarget.checked)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default CheckboxItem;

CheckboxItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
};
