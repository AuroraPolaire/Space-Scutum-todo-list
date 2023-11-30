import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  createTODOs,
  deleteTODOs,
  editTODOs,
  getAllTODOs,
  getTODOs,
} from './todoOperations';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
    todosAmount: 0,
    todosDone: 0,
    newToDO: '',
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
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
      .addCase(getAllTODOs.pending, state => {
        state.isLoading = true;
      })
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
      .addCase(getAllTODOs.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(createTODOs.pending, state => {
        state.isLoading = true;
      })
      .addCase(createTODOs.fulfilled, state => {
        // state.todosList.push(payload);
        state.isLoading = false;
      })
      .addCase(createTODOs.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getTODOs.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTODOs.fulfilled, (state, { payload }) => {
        state.todosList = payload;
        state.isLoading = false;
      })
      .addCase(getTODOs.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(editTODOs.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTODOs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todosList = state.todosList.map(todo =>
          todo.id === payload.id ? payload : todo
        );
      })
      .addCase(editTODOs.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteTODOs.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTODOs.fulfilled, (state, { payload }) => {
        const index = state.todosList.findIndex(todo => todo.id === payload.id);
        if (index !== -1) {
          state.todosList.splice(index, 1);
        }
        state.isLoading = false;
      })
      .addCase(deleteTODOs.rejected, state => {
        state.isLoading = false;
        state.error = true;
      }),
});

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['newToDO', 'page'],
};

export const {
  setPageNumber,
  increaseDoneAmount,
  decreaseDoneAmount,
  rememberNewToDo,
  forgetNewToDo,
} = todoSlice.actions;
export const todoReducer = persistReducer(persistConfig, todoSlice.reducer);
