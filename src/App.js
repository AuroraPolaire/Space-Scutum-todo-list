import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { getAllTODOs, getTODOs } from './redux/todoOperations';
import ToDoList from './components/ToDoList/ToDoList';
import NewTodo from './components/NewTodo/NewTodo';
import { selectTotalAmount } from './redux/todoSelector';
import { StyledApp } from './App.styled';
import { GlobalContainer } from './GlobalContainer/GlobalContainer';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  const totalTodos = useSelector(selectTotalAmount);
  console.log(totalTodos);

  const [totalPages, setTotalPages] = useState(Math.ceil(totalTodos / 5));
  const [pageNumber, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getAllTODOs());
    dispatch(getTODOs(pageNumber));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalTodos / 5));
  }, [totalTodos]);

  return (
    <>
      <Header />
      <GlobalContainer>
        <StyledApp>
          <NewTodo pageNumber={pageNumber} />
          <ToDoList page={pageNumber} />
          <div className="pagination_container">
            <Pagination
              count={totalPages}
              page={pageNumber}
              onChange={handlePageChange}
            />
          </div>
        </StyledApp>
      </GlobalContainer>
    </>
  );
}

export default App;
