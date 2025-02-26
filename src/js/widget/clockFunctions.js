const { ipcRenderer } = require('electron')
let isInverted = false
let isShowingExtra = false
let isShowingSnapBar = false

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

document.getElementById('showExtra').addEventListener('click', () => {
    if (!isShowingExtra) {
        document.getElementById('extraButtons').style.display = "flex";
        isShowingExtra = true
    } else {
        document.getElementById('extraButtons').removeAttribute('style')
        isShowingExtra = false
    }
})

document.getElementById('pinAndTransp').addEventListener('click', () => {
    ipcRenderer.send('pinHideCW')
    document.getElementById('bAlign').style.display = 'none'
    document.getElementById('extraButtons').style.display = 'none'
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

document.getElementById('openSnap').addEventListener('click', () => {
    if (!isShowingSnapBar) {
        document.getElementById('snapBar').style.right = '23px'
        isShowingSnapBar = true
    } else {
        document.getElementById('snapBar').removeAttribute('style')
        isShowingSnapBar = false  
    }
})

document.getElementById('openSettings').addEventListener('click', () => {
    ipcRenderer.send('openSettings')
})

//Snap
document.getElementById('posiStart').addEventListener('click', () => {
    ipcRenderer.send('posiStart')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

document.getElementById('posiTL').addEventListener('click', () => {
    ipcRenderer.send('posiTL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

document.getElementById('posiTR').addEventListener('click', () => {
    ipcRenderer.send('posiTR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

document.getElementById('posiBL').addEventListener('click', () => {
    ipcRenderer.send('posiBL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

document.getElementById('posiBR').addEventListener('click', () => {
    ipcRenderer.send('posiBR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

document.getElementById('posiBC').addEventListener('click', () => {
    ipcRenderer.send('posiBC')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
})

//End Snap

ipcRenderer.on('itsOpened', () => {
    ipcRenderer.send('focusSettings')
})

ipcRenderer.on('reappearButtons', () => {
        document.getElementById('bAlign').removeAttribute('style')
    document.getElementById('extraButtons').removeAttribute('style')
    if (isShowingExtra) {
        document.getElementById('extraButtons').style.display = "flex";
    }
}) 
