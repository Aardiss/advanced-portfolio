<template>
  <div
    :class="[ 'skill-add-line-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input v-model="newSkill.title" placeholder="Новый навык" />
    </div>
    <div class="percent">
      <app-input v-model="newSkill.percent" type="number" min="0" max="100" maxlength="3" />
    </div>
    <div class="button">
      <round-button 
      class="round-button-component" 
      type="round" 
      data-text="+" 
      @click="onAddNew"></round-button>
    </div>
  </div>
</template>

<script>
import button from "../button";
import input from "../input";

export default {
  props: {
    blocked: Boolean,
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newSkill: {
        id: 0,
        title: this.title,
        percent: this.percent
      }
    }
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  methods: {
    onAddNew() {
      this.skills.push({ 
      id: this.skills.length, 
      title: this.newSkill.title, 
      percent: this.newSkill.percent
      }),
      this.newSkill.id = null,
      this.newSkill.title = null,
      this.newSkill.percent = null
    }
  }
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>