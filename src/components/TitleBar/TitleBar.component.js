import { mapActions, mapGetters } from 'vuex'
import ProgressDownload from './ProgressDownload'
import ProgressInstall from './ProgressInstall'
import updateGradient from './updateGradient'

var gradientInterval = setInterval(updateGradient, 30);

export default {
  name: 'title-bar',
  components: {
    ProgressDownload,
    ProgressInstall
  },
  computed: {
    ...mapGetters(['getIsCurrentVersionUpToDate', 'getIsGettingNewestGameVersion', 'getIsDownloadingGame', 'getIsInstallingGame'])
  },
  methods: {
    ...mapActions(['startGameAsync']),
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}