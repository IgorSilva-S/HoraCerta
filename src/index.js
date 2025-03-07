const { app, BrowserWindow, screen, Tray, Notification, ipcMain, shell } = require('electron');
const path = require('node:path');
const started = require('electron-squirrel-startup');
let tray, settingsOpened = false, pinned = false, pinnedTransparent = false, isBlur = false
const isDevelopment = true

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().bounds;

  const windowWidth = 500;
  const windowHeight = 320;

  const x = Math.round((width - windowWidth) / 2);
  const yDiv = Math.round(height / 14)

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
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
    },
    resizable: false,
    icon: path.join(__dirname, 'icon/favicon.ico')
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  mainWindow.on('minimize', () => {
    mainWindow.setSkipTaskbar(false)
    if (tray) {
      tray.destroy()
      tray = null
    }
  })


  mainWindow.on('restore', () => {
    mainWindow.setSkipTaskbar(true)
    if (tray) {
      tray.destroy()
      tray = null
    }
  })

  mainWindow.on('blur', () => {
    isBlur = true
    if (!tray) {
      tray = new Tray(path.join(__dirname, 'icon/favicon.ico'))
      tray.setToolTip('Hora Certa')
      tray.on('click', () => {
        mainWindow.focus()
        mainWindow.restore()
        if (pinnedTransparent) {
          mainWindow.setIgnoreMouseEvents(false)
          mainWindow.setAlwaysOnTop(false)
          pinnedTransparent = false
          mainWindow.webContents.send('reappearButtons')
        }
      })
    }
  })

  mainWindow.on('focus', () => {
    isBlur = false
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

  ipcMain.on('openSettings', () => {
    if (!settingsOpened) {
      createSettingsWindow()
      settingsOpened = true
    } else {
      mainWindow.webContents.send('itsOpened')
    }
  })

  ipcMain.on('pinCW', () => {
    if (!pinned) {
      mainWindow.setAlwaysOnTop(true)
      pinned = true
    } else {
      mainWindow.setAlwaysOnTop(false)
      pinned = false
    }
  })

  ipcMain.on('pinHideCW', () => {
    mainWindow.setAlwaysOnTop(true)
    mainWindow.setIgnoreMouseEvents(true)
    pinnedTransparent = true
    new Notification({ title: "Widget fixado e ignorado", body: "O widget foi fixado na tela e começou a ignorar eventos do mouse, para desativar essa função, clique no icone do aplicativo na bandeja do sistema" }).show()
  })

  ipcMain.on('alertLocal', () => {
    new Notification({ title: "Horário dessincronizado por erro", body: "Houve um erro de sincronização do relógio e o horário está sincronizado com o PC local. Confira a sua conexão com à internet" }).show()
  })

  ipcMain.on('alertNoTime', () => {
    new Notification({ title: "Horário dessincronizado por erro", body: "Houve um erro de sincronização do relógio, por configuração, o horário não estará disponível até reconectar. Confira a sua conexão com à internet" }).show()
  })

  ipcMain.on('alertOnline', () => {
    new Notification({ title: "Horário ressincronizado", body: "O relógio conseguiu se conectar à internet e, foi feita a sinconização com o servidor com sucesso" }).show()
  })

  ipcMain.on('posiStart', () => {
    mainWindow.setPosition(x, yDiv)
  })

  ipcMain.on('posiTL', () => {
    mainWindow.setPosition(10, 10)
  })

  ipcMain.on('posiTR', () => {
    let deskX = width - 510
    mainWindow.setPosition(deskX, 10)
  })

  ipcMain.on('posiBL', () => {
    let deskY = height - 380
    mainWindow.setPosition(10, deskY)
  })

  ipcMain.on('posiBR', () => {
    let deskX = width - 510
    let deskY = height - 380
    mainWindow.setPosition(deskX, deskY)
  })

  ipcMain.on('posiBC', () => {
    let plusToAlign = Math.round(height / 14)
    let deskY = height - 380
    deskY = deskY - plusToAlign
    mainWindow.setPosition(x, deskY)
  })

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i' && !isDevelopment) {
      event.preventDefault()
    }
  })
};

const createSettingsWindow = () => {

  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    minWidth: 700,
    minHeight: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00000000',
      symbolColor: '#74b1be',
      height: 40
    },
    autoHideMenuBar: 'true',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'icon/favicon.ico')
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'settings.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  ipcMain.on('focusSettings', () => {
    if (mainWindow) {
      mainWindow.focus()
      mainWindow.restore()
    }
  })

  ipcMain.on('openGFHelp', () => {
    createHelpWindow('helpPages/googleFonts.html')
  })

  ipcMain.on('openGitHub', () => {
    shell.openExternal("https://github.com/IgorSilva-S/HoraCerta");
  })

  mainWindow.on('close', () => {
    settingsOpened = false
    mainWindow = null
  })

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i' && !isDevelopment) {
      event.preventDefault()
    }
  })
};

const createHelpWindow = (file) => {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 379,
    height: 600,
    minWidth: 379,
    minHeight: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00000000',
      symbolColor: '#74b1be',
      height: 40
    },
    autoHideMenuBar: 'true',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'icon/favicon.ico')
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, file));

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i' && !isDevelopment) {
      event.preventDefault()
    }
  })

  ipcMain.on('openGoogleFonts', () => {
    shell.openExternal("https://fonts.google.com");
  })
}

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

const exeName = path.basename(process.execPath)
app.setLoginItemSettings({
  openAtLogin: true,
  path: exeName,
})