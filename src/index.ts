const { app, BrowserWindow } = require("electron")

function createWindow() {

    const window = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile("D:\\Development\\Workspace\\TypeScript\\spotify-mgk-rate\\src\\frontend\\index.html")

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})