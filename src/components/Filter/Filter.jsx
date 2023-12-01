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
    handleSorting(filterState, page);
  }, [page, filterState]);

  const handleSorting = (state, pageNumber) => {
    switch (state) {
      case 'all':
        dispatch(setPageNumber(1));
        dispatch(getAllTODOs());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      case 'true':
        dispatch(setPageNumber(1));
        dispatch(getCompletedToDosAmount());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      case 'false':
        dispatch(setPageNumber(1));
        dispatch(getUncompletedToDosAmount());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      default:
        return;
    }
  };

  const handleFilter = state => {
    setFilterState(state);
    // handleSorting(state, 1);
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
