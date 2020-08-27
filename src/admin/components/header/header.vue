<template>
  <div class="header-component">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
  </div>
</template>

<script>
import headline from "../../components/headline/headline";
import navigation from "../../components/navigation/navigation";
import user from "../../components/user/user";
export default {
  components : { headline, navigation, user },
};
</script>