<template>
  <div id="q-app"
    class="bg-blue-grey-10 text-white"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created: async function() {
    await this.$store.dispatch("checkNewestGameVersionAsync");
    if (!this.$store.getters.getIsCurrentVersionUpToDate) {
      await this.$store.dispatch("downloadNewestGameVersionAsync");
    }
  }
}
</script>

<style>
</style>
