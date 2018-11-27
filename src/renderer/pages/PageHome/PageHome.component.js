import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'page-home',
  components: {},
  props: [],
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['getIsGameRunning'])
  },
  mounted() {

  },
  methods: {
    ...mapActions(['downloadNewestGameVersion', 'startGame'])
  }
}