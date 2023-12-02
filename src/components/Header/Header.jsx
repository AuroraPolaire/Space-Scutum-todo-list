import React from 'react';
import { StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectTodosDone, selectTotalStats } from '../../redux/todoSelector';

const Header = () => {
  const totalTodos = useSelector(selectTotalStats);
  const done = useSelector(selectTodosDone);
  return (
    <StyledHeader>
      <h2 className="title">Your To Do List</h2>
      <div>
        <div>
          ToDos : <b>{totalTodos}</b>
        </div>
        <div>
          Finished : <b>{done}</b>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
