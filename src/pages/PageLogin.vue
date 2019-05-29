<template>
  <q-page class="row">
    <div class="row col-xs-12">
      <div class="col-xs-9 background">
      </div>
      <div class="col-xs-3 flex flex-center">
        <div>Page Login</div>
        <q-btn @click="() => { $router.push('/home') }" color="white" text-color="black" label="Standard" />
      </div>
    </div>
    
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageLogin'
}
</script>

<style lang="stylus" scoped>
.background {
  background-image: url("~assets//backgroundXayah.jpg");
  background-position-x: -100px;
  background-size: cover; 
  box-shadow: 2px 0px 5px 0px rgba(0,0,0,0.75);
  animation: backgroundAnim 5s linear infinite;
}
@keyframes backgroundAnim {
    0% {
        filter: contrast(107%) saturate(105%) hue-rotate(0deg);
    }
    50% {
        filter: contrast(120%) saturate(105%) hue-rotate(5deg);
    }
    100% {
        filter: contrast(107%) saturate(105%) hue-rotate(0deg);
    }
}
</style>
