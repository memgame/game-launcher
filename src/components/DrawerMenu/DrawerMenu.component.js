export default {
    name: 'drawer-menu',
    data () {
        return {
            drawer: true,
            miniState: true,
            items: [
                {
                    title: 'Home',
                    icon: 'home',
                    path: '/home',
                    click: () => this.$router.push('home')
                },
                { 
                    title: 'Store',
                    icon: 'store',
                    path: '/store',
                    click: () => this.$router.push('store')
                },
                { 
                    title: 'Settings',
                    icon: 'settings',
                    path: '/settings',
                    click: () => this.$router.push('settings')
                },
                {
                    title: 'Logout',
                    icon: 'highlight_off',
                    click: () => this.$router.push('logout')
                }
            ]
        }
    }
}