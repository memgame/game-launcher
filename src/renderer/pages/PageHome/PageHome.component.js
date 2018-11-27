import { mapActions } from 'vuex'

export default {
  name: 'page-home',
  components: {},
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    ...mapActions(['downloadNewestGameVersion'])
  }
}