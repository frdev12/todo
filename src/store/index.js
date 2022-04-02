import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    storageName: 'VueToDo',
    filterType: 'all',
  },

  mutations: {
    setTodo(state, payload) {
      state.todos.push({
        id: payload.maxId + 1,
        todo: payload.todo,
        completed: false,
      });
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload.key, 1);
    },
    deleteCompletedTodos(state) {
      state.todos = state.todos.filter(item => !item.completed);
    },
    getFromStorage(state) {
      state.todos = JSON.parse(localStorage.getItem(state.storageName)) || [];
      state.todos.forEach((item, key) => {
        item.id = key + 1;
      });
    },
    saveToStorage(state) {
      localStorage.setItem(state.storageName, JSON.stringify(state.todos));
    },
    setFilterType(state, payload) {
      state.filterType = payload.filterType;
    }
  },

  actions: {
    setTodo(context, payload) {
      context.commit('setTodo', {todo: payload.todo, maxId: context.getters.getMaxId});
    }
  },

  getters: {
    filteredTodos(state) {
      if (state.filterType === 'active') {
        return state.todos.filter(item => !item.completed);
      }
      if (state.filterType === 'completed') {
        return state.todos.filter(item => item.completed);
      }
      return state.todos;
    },
    getMaxId(state) {
      if (state.todos.length > 0) {
        return Math.max(...state.todos.map(item => item.id));
      }
      return 0;
    },
    countTodoLeft(state) {
      return state.todos.filter(item => !item.completed).length;
    },
    filterType(state) {
      return state.filterType;
    },
    isOneCompleted(state) {
      return state.todos.some(item => item.completed);
    }
  }
})
