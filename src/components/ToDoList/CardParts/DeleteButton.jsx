import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {
  deleteTODOs,
  getAllTODOs,
  getTODOs,
} from '../../../redux/todoOperations';
import { selectFilterState } from '../../../redux/todoSelector';

const DeleteButton = ({ page, id }) => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilterState);

  const handleDeleteTodo = id => {
    dispatch(deleteTODOs(id)).then(() => {
      dispatch(getAllTODOs());
      dispatch(getTODOs({ page: page, state: filterState }));
    });
  };

  return (
    <Button variant="contained" onClick={() => handleDeleteTodo(id)}>
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
