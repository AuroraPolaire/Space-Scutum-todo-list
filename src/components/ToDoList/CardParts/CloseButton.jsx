import React from 'react';
import PropTypes from 'prop-types';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const CloseButton = ({ index, setChangeTodo, changeTodo }) => {
  const handleEditClick = index => {
    setChangeTodo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Button variant="contained" onClick={() => handleEditClick(index)}>
      {changeTodo[index] === true ? (
        <>
          <CloseIcon />
          Close
        </>
      ) : (
        <>
          <BorderColorIcon />
          Edit
        </>
      )}
    </Button>
  );
};

export default CloseButton;

CloseButton.propTypes = {
  index: PropTypes.number.isRequired,
  changeTodo: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setChangeTodo: PropTypes.func.isRequired,
};
