<template>
  <div class="wrapper">

    <div class="properties-head-text">
      <strong>{{ pandaPropertiesHeader }}</strong>
    </div>
    <div class="properties-wrapper">
      <PandaProperties></PandaProperties>
    </div>

    <div class="properties-head-text">
      <strong>{{ bornListPropertiesHeader }}</strong>
    </div>
    <div class="properties-wrapper">
      <BornListProperties></BornListProperties>
    </div>

    <div class="properties-head-text">
      <strong>{{ telegramPropertiesHeader }}</strong>
    </div>
    <div class="properties-wrapper">
      <TelegramProperties></TelegramProperties>
    </div>

    <div>
      <p-info></p-info>
    </div>

  </div>
</template>

<script>
import PandaProperties from "@/components/profile/user/properties/PandaProperties";
import BornListProperties from "@/components/profile/user/properties/BornListProperties";
import PInfo from "@/components/UI/PInfo";
import TelegramProperties from "@/components/profile/user/properties/TelegramProperties";

export default {
  name: "UserProfile",
  components: {
    TelegramProperties,
    BornListProperties,
    PandaProperties,
    PInfo,
  },
  data() {
    return {
      pandaPropertiesHeader: "Panda",
      bornListPropertiesHeader: "BornList",
      telegramPropertiesHeader: "Telegram",
    }
  }
}
</script>

<style scoped>
.properties-wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 15px;
  background-color: rgba(95, 142, 115, 0.09);
  border: 1px solid teal;
}

.properties-head-text {
  font-size: 1.5em;
  text-shadow: 1px 1px 2px #00800b;
  margin-left: 15px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
</style>