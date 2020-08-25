<template>
  <div class="skill-component" v-if="editmode == false">
    <div class="title">{{skill.title}}</div>
    <div class="percent">{{skill.percent}}</div>
    <div class="buttons">
      <icon symbol="pencil" class="btn" @click="editmode = true" grayscale/>
      <!-- <icon symbol="trash" class="btn" @click="$emit('remove', skill.id)" grayscale/> -->
      <icon symbol="trash" class="btn" @click="onDelete" grayscale/>
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
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="onRemove"></icon>
        </div>      
      <!-- <icon symbol="tick" class="btn" @click="$emit('approve', currentSkill)" /> -->
      <!-- <icon symbol="cross" class="btn" @click="editmode = false" /> -->
    </div>
  </div>
</template>

<script>
// import input from "../input";
// import icon from "../icon";

export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    },
    editModeByDefault: Boolean,
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      currentSkill: {
        id: 0,
        title: this.skill.title,
        percent: this.skill.percent
      }
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
      this.$emit("remove", this.currentSkill.id);
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" src="./skill.pcss"></style>