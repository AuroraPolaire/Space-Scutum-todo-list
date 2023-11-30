import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { getAllTODOs, getTODOs } from './redux/todoOperations';
import ToDoList from './components/ToDoList/ToDoList';
import NewTodo from './components/NewTodo/NewTodo';
import { StyledApp } from './App.styled';
import { GlobalContainer } from './GlobalContainer/GlobalContainer';
import Header from './components/Header/Header';
import usePagination from './hooks/usePagination';

function App() {
  const dispatch = useDispatch();

  const { pageNumber, handlePageChange, totalPages } = usePagination();

  useEffect(() => {
    dispatch(getAllTODOs());
    dispatch(getTODOs(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Header />
      <GlobalContainer>
        <StyledApp>
          <NewTodo page={pageNumber} />
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
