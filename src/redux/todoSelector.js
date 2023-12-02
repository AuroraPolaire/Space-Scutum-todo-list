export const selectTodos = state => state.todos.todosList;
export const selectIsLoading = state => state.todos.isLoading;
export const selectTotalAmount = state => state.todos.todosAmount;
export const selectTotalStats = state => state.todos.todosStatisticsAll;
export const selectTodosDone = state => state.todos.todosDone;
export const selectNewToDo = state => state.todos.newToDO;
export const selectPageNumber = state => state.todos.page;
export const selectFilterState = state => state.todos.filterState;
