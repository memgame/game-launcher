<template>
  <q-page class="flex flex-center">
    <div>Page Login</div>
    <q-btn @click="() => { $router.push('/home') }" color="white" text-color="black" label="Standard" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageLogin'
}
</script>
