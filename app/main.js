const {app, BrowserWindow, dialog} = require("electron");

const getFileFromUser = () => {
    const files = dialog.showOpenDialog({properties: ["openFile"]});

    if (!files) return;

    console.log(files);
}

let mainWindow = null;

app.on("ready", () => {
    mainWindow = new BrowserWindow({show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.webContents.loadFile("app/index.html");

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
        getFileFromUser();
    });

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});