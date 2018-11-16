<template>
  <v-app dark>
    <navigation-side v-if="$route.path != '/login'" />
    <content-container />
  </v-app>
</template>

<script>
import NavigationSide from '@/components/NavigationSide'
import ContentContainer from '@/components/ContentContainer'

export default {
  name: 'game-launcher',
  components: {
    NavigationSide,
    ContentContainer
  }
}
</script>

<style>
  /* CSS */
    html, body, #app{
        min-height: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
