const { ipcRenderer } = require('electron')
let isInverted = false

document.getElementById('switchColors').addEventListener('click', () => {
    if (!isInverted) {
        document.getElementById('hour').classList.add('inverted')
        document.getElementById('date').classList.add('inverted')
        document.getElementById('line').className = 'lineInverted'
        isInverted = true
    } else {
        document.getElementById('hour').classList.remove('inverted')
        document.getElementById('date').classList.remove('inverted')
        document.getElementById('line').className = 'line'
        isInverted = false
    }
})

document.getElementById('pinClock').addEventListener('click', () => {
    ipcRenderer.send('pinCW')
})

document.getElementById('minimizeClock').addEventListener('click', () => {
    ipcRenderer.send('minimizeCW')
})

document.getElementById('closeClock').addEventListener('click', () => {
    ipcRenderer.send('closeCW')
})

document.getElementById('openSettings').addEventListener('click', () => {
    ipcRenderer.send('openSettings')
})

ipcRenderer.on('itsOpened', () => {
    ipcRenderer.send('focusSettings')
})