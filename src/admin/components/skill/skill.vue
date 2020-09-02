<template>
  <div class="skill-component" v-if="currentSkill.editmode === false">
    <div class="title">{{skill.title}}</div>
    <div class="percent">{{skill.percent}}</div>
    <div class="buttons">
      <icon symbol="pencil" class="btn" @click="currentSkill.editmode = true" grayscale />
      <icon symbol="trash" class="btn"  @click="$emit('remove', currentSkill)" grayscale />
    </div>
  </div>
  <div class="skill-component" v-else>
    <div class="title">
      <app-input noSlidePaddings v-model="currentSkill.title" />
    </div>
    <div class="percent">
      <app-input v-model="currentSkill.percent" type="number" min="0" max="100" maxlength="3" />
    </div>
    <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" class="btn" @click="$emit('approve', currentSkill)" />
        </div>
        <div class="button-icon">
          <icon symbol="cross" class="btn" @click="currentSkill.editmode = false" />
        </div>      
    </div>
  </div>
</template>

<script>
export default {
  mixins: [require('simple-vue-validator').mixin],
validators: {
  'currentSkill.title'(value) {
    return Validator.value(value).required('Поле не может быть пустым!');
  }
},
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    },
    skills: {
      type: Array,
      default: () => []
    },    
    editModeByDefault: Boolean,
  },
  data() {
    return {
      
      currentSkill: {
        id: this.skill.id,
        title: this.skill.title,
        percent: this.skill.percent,
        category: this.skill.category,
        editmode: false
      },
    };
  },
  methods: {
    onApprove() {
      if (this.skill.title.trim() === this.currentSkill.title.trim() 
      && this.skill.percent === parseInt(this.currentSkill.percent)) {
        this.editmode = false;
      } else {
        this.skill = this.currentSkill;
        this.$emit("approve", this.skill);
        this.editmode = false;
      }      
    },
    onRemove() {
      if (this.editmode == true) {
        this.editmode = false;
      } 
    },
    onDelete() {
      for(let i = 0; i < this.skills.length; i++) {
        if (this.skills[i].title === this.currentSkill.title
        && this.skills[i].percent === this.currentSkill.percent)
        this.skills.splice(i, 1);
      }
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" src="./skill.pcss"></style>