// mixins/todoMixin.js
export default {
  data() {
    return {
      todos: [],
      todoError: null,
      todoPending: false,
    };
  },
  methods: {
    async fetchTodos() {
      this.todoPending = true;
      try {
        const response = await this.$axios.$get("/todos");
        this.todos = response;
      } catch (error) {
        this.todoError = error;
      } finally {
        this.todoPending = false;
      }
    },
  },
  created() {
    this.fetchTodos();
  },
};
