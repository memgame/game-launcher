<template>
    <q-page class="row">
    <div class="row col-xs-12">
      <div class="col-xs-9 text-center">
        <display-name />
        <img alt="Quasar logo" src="~assets//quasar-logo-full.svg">
      </div>
      <div class="col-xs-3 text-center">
        <Flag />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Flag from '../components/Flag'
import DisplayName from '../components/DisplayName'
export default {
  name: 'PageProfile',
  components: {
    Flag,
    DisplayName
  },
}
</script>
