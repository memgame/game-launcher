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
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple v-for="item in items" :key="item.title">
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