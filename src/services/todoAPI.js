import axios from 'axios';

axios.defaults.baseURL = 'https://6566552aeb8bb4b70ef33077.mockapi.io';

export const fetchAllToDos = async () => {
  const { data } = await axios.get(`/todos`);
  return data;
};

export const fetchUnsortedToDos = async page => {
  const { data } = await axios.get(
    `/todos?page=${page}&limit=6&orderby=id&order=desc`
  );
  return data;
};

export const fetchToDos = async ({ page, state }) => {
  let result;
  if (state === 'all') {
    result = await axios.get(
      `/todos?page=${page}&limit=6&orderby=id&order=desc`
    );
  } else {
    result = await axios.get(
      `/todos?page=${page}&limit=6&orderby=id&order=desc&state=${state}`
    );
  }
  return result.data;
};

export const fetchCompletedAmount = async () => {
  const { data } = await axios.get(`/todos?state=true`);
  return data;
};

export const fetchUncompletedAmount = async () => {
  const { data } = await axios.get(`/todos?state=false`);
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
