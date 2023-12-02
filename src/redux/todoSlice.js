import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  createTODOs,
  deleteTODOs,
  editTODOs,
  getAllTODOs,
  getCompletedToDosAmount,
  getTODOs,
  getUncompletedToDosAmount,
} from './todoOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
    todosAmount: 0,
    todosDone: 0,
    newToDO: '',
    page: 1,
    filterState: 'all',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filterState = payload;
      localStorage.setItem('filterState', payload);
    },
    setPageNumber(state, { payload }) {
      state.page = payload;
    },
    forgetNewToDo(state) {
      state.newToDO = '';
    },
    rememberNewToDo(state, { payload }) {
      state.newToDO = payload;
    },
    increaseDoneAmount(state) {
      state.todosDone += 1;
    },
    decreaseDoneAmount(state) {
      state.todosDone -= 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllTODOs.fulfilled, (state, { payload }) => {
        state.todosAmount = payload.length;
        const done = payload.reduce((acc, todo) => {
          if (todo.state === true) {
            return acc + 1;
          }
          return acc;
        }, 0);
        state.todosDone = done;
        state.isLoading = false;
      })
      .addCase(createTODOs.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(getTODOs.fulfilled, (state, { payload }) => {
        state.todosList = payload;
        state.isLoading = false;
      })
      .addCase(getCompletedToDosAmount.fulfilled, (state, { payload }) => {
        state.todosAmount = payload.length;
        state.isLoading = false;
      })
      .addCase(getUncompletedToDosAmount.fulfilled, (state, { payload }) => {
        state.todosAmount = payload.length;
        state.isLoading = false;
      })
      .addCase(editTODOs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todosList = state.todosList.map(todo =>
          todo.id === payload.id ? payload : todo
        );
      })
      .addCase(deleteTODOs.fulfilled, (state, { payload }) => {
        const index = state.todosList.findIndex(todo => todo.id === payload.id);
        if (index !== -1) {
          state.todosList.splice(index, 1);
        }
        state.isLoading = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleRejected(state, action);
        }
      ),
});

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['newToDO', 'page', 'filterState'],
};

export const {
  setPageNumber,
  increaseDoneAmount,
  decreaseDoneAmount,
  rememberNewToDo,
  forgetNewToDo,
  setFilter,
} = todoSlice.actions;
export const todoReducer = persistReducer(persistConfig, todoSlice.reducer);
