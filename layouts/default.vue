<!-- layouts/default.vue -->
<template>
  <div>
    <header>
      <Navbar />
    </header>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
