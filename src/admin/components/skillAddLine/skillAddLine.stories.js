import skillAddLine from "./skillAddLine";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick")
}

export default {
  title: "skillAddLine",
  components: { skillAddLine }
}

export const defaultView = () => ({
  components: { skillAddLine },
  data() {
    return {
      newSkill: {
        id: 0,
        title: "Test",
        percent: 10
      }
    }
  },
  template: `
   <skill-add-line @click="onClick" />
  `,
  methods
});