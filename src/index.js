const { app, BrowserWindow, screen, Tray, ipcMain } = require('electron');
const path = require('node:path');
const started = require('electron-squirrel-startup');
let tray

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {

  // Pegando as dimensões da tela principal
  const { width, height } = screen.getPrimaryDisplay().bounds;

  const windowWidth = 480;
  const windowHeight = 220;

  // Calculando a posição central
  const x = Math.round((width - windowWidth) / 2);
  const yDiv = Math.round(height / 10)

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    titleBarStyle: 'hidden',
    transparent: 'true',
    x: x,
    y: yDiv,
    minimizable: false,
    frame: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  mainWindow.on('minimize', () => {
    mainWindow.setSkipTaskbar(false)
  })


  mainWindow.on('restore', () => {
    mainWindow.setSkipTaskbar(true)
  })

  mainWindow.on('blur', () => {
    tray = new Tray('src/icon/icon.ico')
    tray.setToolTip('Hora Certa')
    tray.on('click', () => {
      mainWindow.focus()
    })
  })

  mainWindow.on('focus', () => {
    if (tray) {
      tray.destroy()
      tray = null
    }
  })

  ipcMain.on('minimizeCW', () => {
    mainWindow.minimize()
  })

  ipcMain.on('closeCW', () => {
    app.quit()
  })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
try {
  require('electron-reloader')(module);
} catch { }