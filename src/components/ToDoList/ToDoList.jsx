import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { selectTodos } from '../../redux/todoSelector';
import {
  deleteTODOs,
  getAllTODOs,
  editTODOs,
  getTODOs,
} from '../../redux/todoOperations';
import { Button, Checkbox, TextField } from '@mui/material';
import { StyledToDoBox } from './TodoList.styled';
import { decreaseDoneAmount, increaseDoneAmount } from '../../redux/todoSlice';

function ToDoList({ page }) {
  const todoList = useSelector(selectTodos);
  const dispatch = useDispatch();

  const [changeTodo, setChangeTodo] = useState(
    new Array(todoList.length).fill(false)
  );
  const [changedText, setChangedText] = useState('');

  const handleEditClick = index => {
    setChangeTodo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleTextChange = e => {
    console.log(e.currentTarget.value);
    setChangedText(e.currentTarget.value);
  };

  const handleSaveClick = (id, changedText, text, index) => {
    let newText = changedText.length > 0 ? changedText : text;
    dispatch(editTODOs({ id, text: newText }));
    setChangeTodo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleCheckboxChange = (id, text, checked) => {
    if (checked === true) {
      dispatch(increaseDoneAmount());
    } else if (checked === false) {
      dispatch(decreaseDoneAmount());
    }

    dispatch(editTODOs({ id, text, state: checked }));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTODOs(id)).then(() => {
      dispatch(getAllTODOs()), dispatch(getTODOs(page));
    });
  };

  return (
    todoList !== undefined && (
      <StyledToDoBox>
        {todoList.slice(0, 6).map(({ id, text, state }, index) => (
          <div key={id} className="todo_list">
            <div className="todo__text-checkbox-container">
              <Checkbox
                checked={state}
                onChange={e =>
                  handleCheckboxChange(id, text, e.currentTarget.checked)
                }
                inputProps={{ 'aria-label': 'controlled' }}
              />
              {changeTodo[index] ? (
                <TextField
                  className="textarea"
                  id="outlined-multiline-static"
                  label="Edit:"
                  // style={{ minWidth: '200px' }}
                  multiline
                  rows={3}
                  defaultValue={text}
                  onChange={e => handleTextChange(e)}
                />
              ) : (
                <div className="todo__text">{text}</div>
              )}
            </div>
            <div className="button-group">
              <Button
                variant="contained"
                onClick={() => handleEditClick(index)}
              >
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
              <Button
                variant="contained"
                disabled={!changeTodo[index]}
                onClick={() => handleSaveClick(id, changedText, text, index)}
              >
                <SaveAltIcon />
                Save
              </Button>
              <Button
                variant="contained"
                href="#contained-buttons"
                onClick={() => handleDeleteTodo(id)}
              >
                <DeleteOutlineIcon />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </StyledToDoBox>
    )
  );
}

export default ToDoList;

ToDoList.propTypes = {
  page: PropTypes.number.isRequired,
};
