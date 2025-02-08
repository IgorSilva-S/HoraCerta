const { ipcRenderer } = require('electron')
let isInverted = false

document.getElementById('switchColors').addEventListener('click', () => {
    if (!isInverted) {
        document.getElementById('hour').className = 'inverted'
        document.getElementById('date').className = 'inverted'

        isInverted = true
    } else {
        document.getElementById('hour').removeAttribute('class')
        document.getElementById('date').removeAttribute('class')

        isInverted = false
    }
})

document.getElementById('minimizeClock').addEventListener('click', () => {
    ipcRenderer.send('minimizeCW')
})

document.getElementById('closeClock').addEventListener('click', () => {
    ipcRenderer.send('openSettings')
})