const state = {
  todo: {},
};

const mutations = {
  ADD_TODO(state, todo) {
    state.todo = todo;
  },
};

const actions = {
  addTodo({ commit }, todo) {
    commit("ADD_TODO", todo);
  },
};

const getters = {
  todo: (state) => state.todo,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
