import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {
  deleteTODOs,
  getAllTODOs,
  getTODOs,
} from '../../../redux/todoOperations';

const DeleteButton = ({ page, id }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = id => {
    dispatch(deleteTODOs(id)).then(() => {
      dispatch(getAllTODOs()), dispatch(getTODOs(page));
    });
  };

  return (
    <Button
      variant="contained"
      href="#contained-buttons"
      onClick={() => handleDeleteTodo(id)}
    >
      <DeleteOutlineIcon />
      Delete
    </Button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
