import Pagination from '@mui/material/Pagination';
import ToDoList from './components/ToDoList/ToDoList';
import NewTodo from './components/NewTodo/NewTodo';
import { StyledApp } from './App.styled';
import { GlobalContainer } from './GlobalContainer/GlobalContainer';
import Header from './components/Header/Header';
import usePagination from './hooks/usePagination';
import Filter from './components/Filter/Filter';

function App() {
  const { pageNumber, handlePageChange, totalPages } = usePagination();

  return (
    <>
      <Header />
      <GlobalContainer>
        <StyledApp>
          <NewTodo page={pageNumber} />
          <Filter page={pageNumber} />
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
