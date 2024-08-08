<template>
  <div class="container">
    <h1>Todo Details</h1>
    <div v-if="todo">
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>Completed:</strong> {{ todo.completed ? "Yes" : "No" }}</p>
    </div>
    <div v-else>
      <p>No todo selected.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todo() {
      return this.$store.getters["todo/todo"];
    },
  },
};
</script>

<style scoped></style>
