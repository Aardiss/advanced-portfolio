<template> 
  <card slim>
    <edit-line 
    slot="title" 
    v-model="categoryTitle" 
    :editModeByDefault="empty"
    @remove="$emit('remove', $event)"
    @approve="$emit('approve', $event)"
    />
    <template slot="content">
      <ul class="skills" v-if="empty == false">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill 
          :skill="skill" 
          :skills="skills"
          @remove="$emit('remove-skill', $event)"
          @approve="$emit('edit-skill', $event)"
          />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line 
        @approve="$emit('create-skill', $event)"
        :blocked="empty" :skills="skills"/>
      </div>
    </template>
  </card>
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

  const skills = [
  {id: 0, title: "Html", percent: 80},
  {id: 1, title: "Css", percent: 20},
  {id: 2, title: "JavaScript", percent: 50},
]
export default {
  components: {
    card: () => import("../Card"), 
    editLine: () => import("../editLine"),
    skill: () => import("../skill"),
    skillAddLine: () => import("../skillAddLine")
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: ""
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      categoryTitle: this.title 
    }
  }
}
</script>

<style lang="postcss">
  .item {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .bottom-line {
    padding-top: 70px;
    margin-top: auto;
    padding-left: 25%;
  }
</style>