<template>
    <div class="row">
        <q-circular-progress
            show-value
            font-size="9px"
            :value="getDownloadPercent"
            size="35px"
            :thickness="0.22"
            color="teal"
            track-color="grey-3"
        >
            {{getDownloadPercent}}%
        </q-circular-progress>
        <div class="self-center q-pl-sm">downloading game...</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'progress-download',
  computed: {
    ...mapGetters(['getDownloadPercent'])
  },
}
</script>

<style lang="stylus" scoped></style>