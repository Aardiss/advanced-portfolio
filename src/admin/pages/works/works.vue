<template lang="pug">
  .works-section
    .container
      h1.page-title Блок «Работы»
    .works-container
      .container
        ul.works
          li.works__item(v-for="work in works") {{work}}
            
</template>

<script>
export default {
  data() {
    return {
      works: []
    }
  },
  created() {
    this.works = require('../../../data/works.json');
  }
}
</script>

<style lang="postcss" scoped src="./works.pcss"></style>