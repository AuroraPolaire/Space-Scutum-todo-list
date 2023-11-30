import axios from 'axios';

axios.defaults.baseURL = 'https://6566552aeb8bb4b70ef33077.mockapi.io';

export const fetchAllToDos = async () => {
  const { data } = await axios.get(`/todos`);
  return data;
};

export const fetchToDos = async page => {
  const { data } = await axios.get(
    `/todos?page=${page}&limit=6&orderby=id&order=desc`
  );
  return data;
};

export const createToDos = async todo => {
  const { data } = await axios.post(`/todos`, { text: todo, state: false });
  return data;
};

export const editToDos = async ({ id, text, state }) => {
  const result = await axios.put(`/todos/${id}`, { text, state });
  return result.data;
};

export const deleteToDos = async id => {
  const { data } = await axios.delete(`/todos/${id}`);
  return data;
};
