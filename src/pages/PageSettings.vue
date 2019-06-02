<template>
  <q-page class="flex flex-center">
    <server-settings />
  </q-page>
</template>

<style>
</style>

<script>
import ServerSettings from '../components/ServerSettings'
export default {
  name: 'page-settings',
  components: {
    ServerSettings
  }
}
</script>
