import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectPageNumber, selectTodos } from '../../redux/todoSelector';
import { StyledToDoBox } from './TodoList.styled';
import ToDoCard from './ToDoCard';

function ToDoList() {
  const todoList = useSelector(selectTodos);
  const page = useSelector(selectPageNumber);

  const [changeTodo, setChangeTodo] = useState(
    new Array(todoList.length).fill(false)
  );

  return (
    todoList !== undefined && (
      <StyledToDoBox>
        {todoList.slice(0, 6).map(({ id, text, state }, index) => (
          <ToDoCard
            key={id}
            id={id}
            text={text}
            state={state}
            index={index}
            page={page}
            changeTodo={changeTodo}
            setChangeTodo={setChangeTodo}
          />
        ))}
      </StyledToDoBox>
    )
  );
}

export default ToDoList;

// ToDoList.propTypes = {
//   page: PropTypes.number.isRequired,
// };
