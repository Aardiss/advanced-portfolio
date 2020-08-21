<template> 
  <card slim>
    <edit-line slot="title" v-model="title" :editModeByDefault="empty"/>
    <template slot="content">
      <ul class="skills" v-if="empty == false">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill :skill="skill" />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line :blocked="empty" />
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
    card, 
    editLine,
    skill,
    skillAddLine
  },
  props: {
    empty: Boolean
  },
  data() {
    return {
      title: "",
      skills 
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