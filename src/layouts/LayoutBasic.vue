<template>
  <q-layout view="hHh LpR fFf">
    <title-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TitleBar from 'components/TitleBar'

export default {
  components: {
    TitleBar
  }
}
</script>