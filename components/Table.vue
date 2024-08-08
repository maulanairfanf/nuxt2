<template>
  <section class="container">
    <b-table
      :data="todos"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :pagination-rounded="isPaginationRounded"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="id"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
      :pagination-order="paginationOrder"
      :page-input-position="inputPosition"
      :debounce-page-input="inputDebounce"
    >
      <b-table-column
        field="id"
        label="ID"
        width="40"
        sortable
        numeric
        v-slot="props"
      >
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="title" label="Title" sortable v-slot="props">
        {{ props.row.title }}
      </b-table-column>

      <b-table-column
        field="completed"
        label="Completed"
        sortable
        v-slot="props"
        width="100"
      >
        {{ props.row.completed ? "Yes" : "No" }}
      </b-table-column>

      <b-table-column
        field="actions"
        label="Actions"
        width="150"
        v-slot="props"
      >
        <b-button type="is-primary" @click="viewTodoDetails(props.row)"
          >Details</b-button
        >
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
import todoMixin from "~/mixins/todoMixin";

export default {
  name: "Table",
  mixins: [todoMixin],
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
      hasInput: false,
      paginationOrder: "",
      inputPosition: "",
      inputDebounce: "",
    };
  },
  methods: {
    viewTodoDetails(todo) {
      this.$store.dispatch("todo/addTodo", todo);
      this.$router.replace("/state-todo");
    },
  },
};
</script>

<style scoped>
.pagination-link.is-current {
  background-color: #ffd000 !important;
  border-color: #ffd000 !important;
  color: #fff;
}
</style>
