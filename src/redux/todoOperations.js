import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllToDos,
  fetchToDos,
  createToDos,
  editToDos,
  deleteToDos,
  fetchCompletedAmount,
  fetchUncompletedAmount,
} from '../services/todoAPI';

export const getAllTODOs = createAsyncThunk(
  'getAll/todos',
  async (_, thunkAPI) => {
    try {
      const result = await fetchAllToDos();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTODOs = createAsyncThunk(
  'get/todos',
  async ({ page, state }, thunkAPI) => {
    try {
      const result = await fetchToDos({ page: page, state: state });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUnsortedTODOs = createAsyncThunk(
  'getUnsorted/todos',
  async (page, thunkAPI) => {
    try {
      const result = await fetchToDos(page);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCompletedToDosAmount = createAsyncThunk(
  'getCompletedAmount/todos',
  async (page, thunkAPI) => {
    try {
      const result = await fetchCompletedAmount();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUncompletedToDosAmount = createAsyncThunk(
  'getUncompletedAmount/todos',
  async (page, thunkAPI) => {
    try {
      const result = await fetchUncompletedAmount();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTODOs = createAsyncThunk(
  'create/todos',
  async (data, thunkAPI) => {
    try {
      const result = await createToDos(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTODOs = createAsyncThunk(
  'edit/todos',
  async ({ id, text, state }, thunkAPI) => {
    try {
      const result = await editToDos({ id, text, state });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTODOs = createAsyncThunk(
  'delete/todos',
  async (id, thunkAPI) => {
    try {
      const result = await deleteToDos(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
