import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTODOs, getAllTODOs } from '../../redux/todoOperations';
import { TextField } from '@mui/material';
import { StyledNewTodoContainer, StyledSubmitButton } from './NewTodo.styled';
import { rememberNewToDo } from '../../redux/todoSlice';
import { selectNewToDo } from '../../redux/todoSelector';

function NewTodo() {
  const dispatch = useDispatch();
  const todoText = useSelector(selectNewToDo);
  const [newTodo, setNewToDo] = useState('');

  const handleNewTodo = text => {
    setNewToDo(text);
    dispatch(rememberNewToDo(text));
  };

  const handleSubmit = () => {
    if (newTodo.length === 0) return;
    dispatch(createTODOs(newTodo)).then(() => dispatch(getAllTODOs()));
  };

  return (
    <StyledNewTodoContainer>
      <TextField
        id="outlined-multiline-static"
        label="New todo:"
        fullWidth
        multiline
        rows={4}
        defaultValue={todoText || ''}
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
