import { useDispatch, useSelector } from 'react-redux';
import { selectPageNumber, selectTotalAmount } from '../redux/todoSelector';
import { setPageNumber } from '../redux/todoSlice';
import { useEffect, useState } from 'react';

const usePagination = () => {
  const dispatch = useDispatch();
  const totalTodos = useSelector(selectTotalAmount);
  const rememberedPageNumber = useSelector(selectPageNumber);

  const [totalPages, setTotalPages] = useState(Math.ceil(totalTodos / 6));
  const [pageNumber, setPage] = useState(rememberedPageNumber);

  useEffect(() => {
    setTotalPages(Math.ceil(totalTodos / 6));
  }, [totalTodos]);

  const handlePageChange = (event, value) => {
    dispatch(setPageNumber(value));
    setPage(value);
  };

  return { pageNumber, handlePageChange, totalPages };
};

export default usePagination;
