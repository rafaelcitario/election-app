const { app, BrowserWindow } = require("electron");
app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

function createWindow() {
  const win = new BrowserWindow();
  return win.loadFile("./src/index.html");
}
