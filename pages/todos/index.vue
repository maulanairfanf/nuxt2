// pages/index.vue
<template>
  <div class="container">
    <Table />
  </div>
</template>

<script>
import Table from "@/components/Table";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: {
    Table,
  },
  async fetch() {
    this.todos = await this.$axios.$get("/todos");
  },
};
</script>
