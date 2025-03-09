const { ipcRenderer } = require("electron")

ipcRenderer.send('widgetFullMove')

document.getElementById('closeAM').addEventListener('click', () => {
    document.getElementById('adBar').className = 'closingBar'
    setTimeout(() => {
        ipcRenderer.send('closeAdvancedMove')
        ipcRenderer.send('widgetDefaultMove')
    }, 200);
})

document.getElementById('openWidgetSnap').addEventListener('click', () => {
    ipcRenderer.send('openSnap')
})

document.getElementById('openSettings').addEventListener('click', () => {
    ipcRenderer.send('openSettings')
})

document.getElementById('savePrecisePosition').addEventListener('click', () => {
    let posiX = document.getElementById('wPosiX').value
    let posiY = document.getElementById('wPosiY').value
    if (posiX < 0 || posiX == '') {
        posiX = 0
    }
    if (posiY < 0 || posiY == '') {
        posiY = 0
    }

    try {
        posiX = parseInt(posiX)
    } catch {
        posiX = 0
    }

    try {
        posiY = parseInt(posiY)
    } catch {
        posiY = 0
    }

    ipcRenderer.send('windowPosition', {posiX, posiY})
})

document.getElementById('saveSnap').addEventListener('click', () => {
    let posiX = document.getElementById('wPosiX').value
    let posiY = document.getElementById('wPosiY').value
    if (posiX < 0 || posiX == '') {
        posiX = 0
    }
    if (posiY < 0 || posiY == '') {
        posiY = 0
    }


    let posiJSON = {
        x: posiX,
        y: posiY
    }
    localStorage.setItem('customSnap', JSON.stringify(posiJSON))
})