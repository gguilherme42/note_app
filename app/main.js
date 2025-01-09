const {app, BrowserWindow, dialog} = require("electron");
const fs = require("fs");

const getFileFromUser = () => {
    return dialog.showOpenDialog(
        {
            properties: ["openFile"],
            filters: [
                {name: "Text Files", extensions: ["txt"]},
                {name: "Markdown Files", extensions: ["md", "markdonw"]}

            ]
        }
    )
        .then((response) => {
            if (!response.filePaths) return "";

            console.log(fs.readFileSync(response.filePaths[0]).toString());
            return response.filePaths[0];
        });
    
    //if (!files) return;
    // const file = files[0];
    // const content = fs.readFileSync(file).toString();
    // console.log(`Teste: ${files}`);
    // console.log(files[0]);  -- the book suggest this code, but it doesn't work properly because "dialog.showOpenDialog" returns a promise object.
}



let mainWindow = null;



app.on("ready", () => {
    mainWindow = new BrowserWindow({show: false});

    mainWindow.webContents.loadFile("app/index.html");

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
        getFileFromUser();
    });


    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});

