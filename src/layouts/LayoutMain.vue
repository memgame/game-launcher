<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-primary text-white q-electron-drag">
      <q-bar class="q-electron-drag">
        <q-icon name="laptop_chromebook" />
        <div>Google Chrome</div>

        <q-space />

        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </q-bar>
      <q-toolbar>
        <q-toolbar-title>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <drawer-menu />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import DrawerMenu from 'components/DrawerMenu'
console.log(DrawerMenu)
export default {
  components: {
    DrawerMenu
  },
  data () {
    return {
      left: true,
      drawer: true,
      miniState: true
    }
  },
    methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>