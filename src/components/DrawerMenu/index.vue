<template>
  <q-drawer
    v-model="drawer"

    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"

    :width="200"
    :breakpoint="500"
    show-if-above
    behavior="desktop"
    elevated
    content-class="bg-grey-10 text-white"
  >
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item
          v-for="item in items"
          :key="item.title"
          @click.stop="item.click"
          :active="$route.path == item.path"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script src="./DrawerMenu.component.js" />

<style lang="stylus" scoped></style>