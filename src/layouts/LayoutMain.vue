<template>
  <q-layout view="hHh LpR fFf">
    <title-bar />
    <drawer-menu />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TitleBar from 'components/TitleBar'
import DrawerMenu from 'components/DrawerMenu'

export default {
  components: {
    TitleBar,
    DrawerMenu
  }
}
</script>