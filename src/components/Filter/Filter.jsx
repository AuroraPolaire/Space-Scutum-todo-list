import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTODOs,
  getCompletedToDosAmount,
  getTODOs,
  getUncompletedToDosAmount,
} from '../../redux/todoOperations';
// import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';
import { setPageNumber } from '../../redux/todoSlice';
import { selectPageNumber } from '../../redux/todoSelector';

const Filter = () => {
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState('all');
  const page = useSelector(selectPageNumber);

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

// Filter.propTypes = {
//   page: PropTypes.number.isRequired,
// };