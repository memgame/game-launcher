import { remote } from 'electron'
import { mapActions, mapGetters } from 'vuex'


var colors = new Array(
    [8, 171, 172],
    [62, 35, 255],
    [9, 171, 174],
    [45, 175, 230]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.01;

function updateGradient() {
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    var appTitleBar = document.getElementById('app-title-bar')

    if (appTitleBar) {
        appTitleBar.style.background = "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

var gradientInterval = setInterval(updateGradient, 30);



export default {
    name: 'title-bar',
    components: {},
    props: [],
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getIsCurrentVersionUpToDate', 'getIsGettingNewestGameVersion'])
    },
    mounted() {

    },
    methods: {
        ...mapActions(['startGameAsync']),
        play() {
            console.log('play')
            this.$router.push('play')
        },
        minimize() {
            console.log('minimize')
            remote.getCurrentWindow().minimize()
        },
        close() {
            console.log('close')
            remote.app.quit()
        }
    },
    beforeDestory() {
        window.clearInterval(gradientInterval)
    }
}