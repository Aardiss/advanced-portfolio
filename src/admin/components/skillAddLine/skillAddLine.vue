<template>
  <div
    :class="[ 'skill-add-line-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input placeholder="Новый навык" />
    </div>
    <div class="percent">
      <app-input type="number" min="0" max="100" maxlength="3" />
    </div>
    <div class="button">
      <round-button v-on="$listeners" type="round" data-text="+" class="round-button-component"></round-button>
    </div>
  </div>
</template>

<script>
import button from "../button";
import input from "../input";

export default {
  props: {
    blocked: Boolean
  },
  components: {
    appInput: input,
    roundButton: button,
  },
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>