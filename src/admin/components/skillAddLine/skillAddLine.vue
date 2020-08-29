<template>
  <div
    :class="[ 'skill-add-line-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input 
      v-model="newSkill.title" 
      placeholder="Новый навык"
      :errorMessage="validation.firstError('newSkill.title')" />
    </div>
    <div class="percent">
      <app-input 
      v-model="newSkill.percent" 
      type="number" 
      min="0" 
      max="100" 
      maxlength="3" 
      :errorMessage="validation.firstError('newSkill.percent')" />
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
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "newSkill.title": value => {
      return Validator.value(value).required("Введите навык");
    },
     "newSkill.percent": value => {
      return Validator.value(value).required("Введите % навыка");
    }
  },  
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
      },
      isValid: Boolean
    }
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  methods: {
    checkValid: function() {
      this.isValid = true;
      if (!this.newSkill.title || !this.newSkill.percent) {
          this.isValid = false;
          console.log(this.isValid)
        }
      },
    pushNew: function() {
      if (this.isValid == true) {
          this.skills.push({ 
          id: this.skills.length, 
          title: this.newSkill.title, 
          percent: this.newSkill.percent
        })
      }
      this.newSkill.id = null,
      this.newSkill.title = null,
      this.newSkill.percent = null      
    },
    onAddNew() {
      this.checkValid();
      this.pushNew();
    }
  }
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>