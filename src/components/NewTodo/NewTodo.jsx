import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTODOs, getAllTODOs } from '../../redux/todoOperations';
import { TextField } from '@mui/material';
import { StyledNewTodoContainer, StyledSubmitButton } from './NewTodo.styled';
import { forgetNewToDo, rememberNewToDo } from '../../redux/todoSlice';
import { selectNewToDo } from '../../redux/todoSelector';

function NewTodo() {
  const dispatch = useDispatch();
  const todoText = useSelector(selectNewToDo);
  const [newTodo, setNewToDo] = useState(todoText);

  const handleNewTodo = text => {
    setNewToDo(text);
    dispatch(rememberNewToDo(text));
  };

  const handleSubmit = () => {
    if (newTodo.length === 0) return;
    setNewToDo('');
    dispatch(createTODOs(newTodo)).then(() => dispatch(getAllTODOs()));
    dispatch(forgetNewToDo());
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
