import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'display-name',
    components: { },
    props: [],
    data () {
        return {
            isInEditModus: false,
            newDisplayName: ''
        }
    },
    computed: {
        ...mapGetters(['getDisplayName', 'getDisplayNameRaw'])
    },
    mounted () {
        this.newDisplayName = this.getDisplayNameRaw
    },
    methods: {
        ...mapActions(['changeDisplayName']),
        openEditModus () {
            this.newDisplayName = this.getDisplayNameRaw
            this.isInEditModus = true
        },
        closeEditModus () {
            this.isInEditModus = false
        },
        tryChangeDisplayName () {
            this.changeDisplayName(this.newDisplayName)
            this.closeEditModus()
        }
    }
}