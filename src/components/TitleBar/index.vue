<template>
  <q-header
    id="app-title-bar"
    bordered
    class="text-white q-electron-drag">
    <q-toolbar>
      <q-btn
        dense
        flat
        @click="() => {}"
        class="btn-play q-electron-drag--exception"
        label="Play"
        v-if="$route.path != '/login'"
      />
      <q-space />

      <q-btn dense flat icon="minimize" @click="minimize" class="q-electron-drag--exception"/>
      <q-btn dense flat icon="close" @click="closeApp" class="q-electron-drag--exception"/>
    </q-toolbar>
  </q-header>
</template>

<script src="./TitleBar.component.js" />

<style lang="stylus" scoped>
.q-toolbar {
    min-height: 40px;
}

.btn-play {
  padding: 3px 30px 3px 20px
}
/*
.btn-play::before {
  background-color: transparent;
}
*/

.btn-play::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0,0,0,0.45);
  width: 100%;
  height: 100%;
  content: "";
  background-size: 400% 400%;
  /*
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    2px calc(100% - 2px),
    calc(100% - 2px) calc(100% - 2px),
    calc(100% - 2px) 2px,
    2px 2px,
    2px 100%,
    0 100%
  );
  */
  clip-path: polygon(
    0% 0%,
    0% 100%,
    2px 100%,
    2px 2px,
    80% 2px,
    calc(100% - 3.5px) 50%,
    80% calc(100% - 2px),
    2px calc(100% - 2px),
    2px 100%,
    calc(80% + 1.5px) 100%,
    100% 50%,
    calc(80% + 1.5px) 0);
}


.btn-play {
  /* box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5); */
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.25))
}

.btn-play:hover {
  /* box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75); */
  filter: drop-shadow(0 0 5px rgba(0,0,0,1))
}

.btn-play:hover::after {
  background: linear-gradient(120deg, #730000, black, #730000, black, #730000, black);
  animation: backgroundAnim 3s linear infinite;
  background-size: 400% 400%;
}

/*
@keyframes backgroundAnim {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
*/

@keyframes backgroundAnim {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>