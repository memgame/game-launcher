<template>
  <v-app dark>
    <navigation-side v-if="$route.path != '/login'"/>
    <title-bar/>
    <content-container/>
  </v-app>
</template>

<script>
import NavigationSide from "@/components/NavigationSide";
import TitleBar from "@/components/TitleBar";
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "game-launcher",
  components: {
    NavigationSide,
    ContentContainer,
    TitleBar
  },
  created: async function() {
    console.log("hey app created");
    await this.$store.dispatch("checkNewestGameVersionAsync");
    if (!this.$store.getters.getIsCurrentVersionUpToDate) {
      console.log("need to update");
      await this.$store.dispatch("downloadNewestGameVersionAsync");
    }
    console.log("done checking");
  }
};
</script>

<style>
/* CSS */
html,
body,
#app {
  min-height: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
