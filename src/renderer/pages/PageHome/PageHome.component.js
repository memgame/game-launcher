import { mapGetters } from 'vuex'

import Flag from "@/components/Flag";

export default {
  name: 'page-home',
  components: {
    Flag
  },
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
    
  }
}