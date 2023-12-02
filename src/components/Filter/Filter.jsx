import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTODOs,
  getCompletedToDosAmount,
  getTODOs,
  getUncompletedToDosAmount,
} from '../../redux/todoOperations';
import { StyledFilter } from './Filter.styled';
import { setPageNumber, setFilter } from '../../redux/todoSlice';
import { selectFilterState, selectPageNumber } from '../../redux/todoSelector';

const Filter = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPageNumber);
  const state = useSelector(selectFilterState);
  const [filterState, setFilterState] = useState(state);

  useEffect(() => {
    if (filterState === 'all') {
      dispatch(getAllTODOs());
      dispatch(getTODOs({ page: page, state: filterState }));
    } else if (filterState === 'true') {
      dispatch(getCompletedToDosAmount());
      dispatch(getTODOs({ page: page, state: filterState }));
    } else if (filterState === 'false') {
      dispatch(getUncompletedToDosAmount());
      dispatch(getTODOs({ page: page, state: filterState }));
    }
  }, [filterState, page]);

  const handleFilter = state => {
    dispatch(setPageNumber(1));
    dispatch(setFilter(state));
    setFilterState(state);
  };

  return (
    <StyledFilter>
      <div
        className={
          filterState === 'all' ? 'filter__buttom chosen' : 'filter__buttom'
        }
        onClick={() => {
          handleFilter('all');
        }}
      >
        All
      </div>
      <div
        className={
          filterState === 'true' ? 'filter__buttom chosen' : 'filter__buttom'
        }
        onClick={() => {
          handleFilter('true');
        }}
      >
        Completed
      </div>
      <div
        className={
          filterState === 'false' ? 'filter__buttom chosen' : 'filter__buttom'
        }
        onClick={() => {
          handleFilter('false');
        }}
      >
        Not completed
      </div>
    </StyledFilter>
  );
};

export default Filter;
