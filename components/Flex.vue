<template lang="">
  <div class="container">
    <div
      class="is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center is-align-items-center"
    >
      <div class="m-4 p-4" v-for="index in 8" :key="index">
        <b-image
          style="width: 300px"
          src="https://picsum.photos/600/400"
          alt="A random image"
          ratio="6by4"
          :rounded="false"
        ></b-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
