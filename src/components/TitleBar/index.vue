<template>
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
</template>

<script src="./TitleBar.component.js" />

<style lang="stylus" scoped></style>