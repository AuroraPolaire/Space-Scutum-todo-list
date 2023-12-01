import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import {
  getAllTODOs,
  getCompletedToDosAmount,
  getTODOs,
  getUncompletedToDosAmount,
} from '../../redux/todoOperations';
import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

const Filter = ({ page }) => {
  const dispatch = useDispatch();
  //   const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, setFilterState] = useState('all');

  useEffect(() => {
    handleSorting(filterState, page);
  }, [page, filterState]);

  const handleSorting = (state, pageNumber) => {
    switch (state) {
      case 'all':
        dispatch(getAllTODOs());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      case 'true':
        dispatch(getCompletedToDosAmount());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      case 'false':
        dispatch(getUncompletedToDosAmount());
        dispatch(getTODOs({ page: pageNumber, state: state }));
        return;
      default:
        return;
    }
  };

  const handleFilter = state => {
    // setSearchParams({ state: state });
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

Filter.propTypes = {
  page: PropTypes.number.isRequired,
};
