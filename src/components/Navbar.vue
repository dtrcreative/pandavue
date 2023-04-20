<template>
  <div class="navbar">
    <div @click="$router.push('/')">i113_Panda_main</div>
    <div class="navbar__btns">
      <panda-button style="margin-right: 10px" @click="$router.push('/login')">LogIn</panda-button>
      <panda-button style="margin-right: 10px" @click="$router.push('/panda')">Panda</panda-button>
    </div>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
export default {
  name: "MainVue",
  components: {PandaButton}
}
</script>
export default {
}
<style scoped>

.navbar {
  height: 50px;
  background-color: bisque;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.89);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

</style>