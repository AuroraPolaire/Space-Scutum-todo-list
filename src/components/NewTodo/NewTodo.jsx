import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createTODOs, getAllTODOs, getTODOs } from '../../redux/todoOperations';
import { TextField } from '@mui/material';
import { StyledNewTodoContainer, StyledSubmitButton } from './NewTodo.styled';
import { forgetNewToDo, rememberNewToDo } from '../../redux/todoSlice';
import { selectFilterState, selectNewToDo } from '../../redux/todoSelector';

function NewTodo({ page }) {
  const dispatch = useDispatch();
  const todoText = useSelector(selectNewToDo);
  const filterState = useSelector(selectFilterState);
  const [newTodo, setNewToDo] = useState(todoText);

  const handleNewTodo = text => {
    setNewToDo(text);
    dispatch(rememberNewToDo(text));
  };

  const handleSubmit = () => {
    if (newTodo.length === 0) return;
    dispatch(createTODOs(newTodo)).then(() => {
      dispatch(getAllTODOs());
      dispatch(getTODOs({ page: page, state: filterState }));
      dispatch(forgetNewToDo());
      setNewToDo('');
    });
  };

  return (
    <StyledNewTodoContainer>
      <TextField
        id="outlined-multiline-static"
        label="New todo:"
        fullWidth
        multiline
        rows={4}
        value={newTodo}
        onChange={e => handleNewTodo(e.currentTarget.value)}
      />
      <StyledSubmitButton
        disabled={newTodo.length === 0}
        variant="outlined"
        onClick={() => handleSubmit()}
      >
        Submit
      </StyledSubmitButton>
    </StyledNewTodoContainer>
  );
}

export default NewTodo;

NewTodo.propTypes = {
  page: PropTypes.number.isRequired,
};
