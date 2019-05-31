export default {
    name: 'drawer-menu',
    data () {
        return {
            drawer: true,
            miniState: true,
            items: [
                {
                    title: 'Profile',
                    icon: 'person',
                    path: '/profile',
                    click: () => this.$router.push('profile')
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