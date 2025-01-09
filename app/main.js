const {app, BrowserWindow, dialog} = require("electron");
const fs = require("fs");


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

const getFileFromUser = () => {
    const files = dialog.showOpenDialog({properties: ["openFile"]})
        .then((response) => {
            if (!response.filePaths) {console.log("Nada foi selecionado!")};
            console.log(`Teste: ${response.filePaths}`);

        });
    
    //if (!files) return;

    // const file = files[0];
    // const content = fs.readFileSync(file).toString();

    // console.log(`Teste: ${files}`);
    // console.log(files[0]);
}