<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <h3>Content</h3>
    </headline>
  </div>
</template>

<script>
import headline from "./components/headline";


export default {
  components: {
    headline,
  },
};
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>