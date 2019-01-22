import { mapGetters } from 'vuex'
import SystemInformation from '@/components/SystemInformation'
import ServerSettings from '@/components/ServerSettings'
import config from '../../../../config/config'

export default {
  name: 'page-settings',
  components: { SystemInformation, ServerSettings },
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