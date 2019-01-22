export default {
    firebase: {
        apiKey: "AIzaSyBjLeNuaiLRCjYAehwq6sJKSCMxM312VIA",
        authDomain: "game-launcher-1439e.firebaseapp.com",
        databaseURL: "https://game-launcher-1439e.firebaseio.com",
        projectId: "game-launcher-1439e",
        storageBucket: "game-launcher-1439e.appspot.com",
        messagingSenderId: "148629216769"
    },
    game: {
        folderName: 'game',
        win32: {
            startfile: 'mem-client-game.exe'
        },
        darwin: {
            startfile: 'mem-client-game.app/Contents/MacOS/mem-client-game'
        },
        zipFileName: 'mem-client-game.zip'
    },
    tmpFolderName: 'tmp',
    server: {
        ip: 'localhost',
        port: '8080',
        roomName: 'match'
    }
}