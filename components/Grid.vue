<template>
  <div class="container">
    <div class="columns is-centered is-desktop is-multiline">
      <div class="column is-one-quarter" v-for="index in 5" :key="index">
        <div
          class="has-text-centered has-text-white has-background-primary has-text-weight-semibold is-rounded"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang=""></style>
