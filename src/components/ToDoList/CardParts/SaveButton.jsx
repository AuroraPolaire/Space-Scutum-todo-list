import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { editTODOs } from '../../../redux/todoOperations';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useDispatch } from 'react-redux';

const SaveButton = ({
  changedText,
  id,
  text,
  index,
  changeTodo,
  setChangeTodo,
}) => {
  const dispatch = useDispatch();

  const handleSaveClick = (id, changedText, text, index) => {
    let newText = changedText.length > 0 ? changedText : text;
    dispatch(editTODOs({ id, text: newText }));
    setChangeTodo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Button
      variant="contained"
      disabled={!changeTodo[index]}
      onClick={() => handleSaveClick(id, changedText, text, index)}
    >
      <SaveAltIcon />
      Save
    </Button>
  );
};

export default SaveButton;

SaveButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changedText: PropTypes.string.isRequired,
  changeTodo: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setChangeTodo: PropTypes.func.isRequired,
};
