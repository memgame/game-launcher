import { mapGetters } from 'vuex'
import SystemInformation from '@/components/SystemInformation'
import config from '../../../../config/config'

export default {
  name: 'page-settings',
  components: { SystemInformation },
  props: [],
  data() {
    return {
      config
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