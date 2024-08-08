<template>
  <section>
    <div class="container mb-5">
      <h1 class="title">{{ title }}</h1>
      <b-button type="is-primary" @click="handleClick">Open Toastify</b-button>
      <b-button
        type="is-secondary has-text-white"
        @click="handleClickSnackBarPrimary"
        >Open Snackbar Primary</b-button
      >
    </div>
    <Flex />
    <Grid />
  </section>
</template>

<script>
import Flex from "@/components/Flex";
import Grid from "@/components/Grid";

export default {
  name: "IndexPage",
  data() {
    return {
      title: "Hello Bulma with Buefy",
    };
  },
  components: {
    Flex,
    Grid,
  },
  methods: {
    handleClick() {
      this.$buefy.toast.open("Something happened");
    },

    handleClickSnackBarPrimary() {
      this.$buefy.snackbar.open({
        message: "Primary Taskbar",
        type: "is-secondary",
        position: "is-top",
        actionText: "Open Toastify",
        cancelText: "Cancel",
        indefinite: true,
        onAction: () => {
          this.$buefy.toast.open({
            message: "Toastify Open",
            queue: false,
          });
        },
      });
    },
  },
};
</script>

<style scoped></style>
