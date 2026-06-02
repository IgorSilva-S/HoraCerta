const { ipcRenderer } = require('electron')
let isInverted = false
let isShowingExtra = false
let isShowingSnapBar = false
let isFullMove = false
let moveButtonType = 'move'
let isPinned = false

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
    if (!isPinned) {
        document.getElementById('pinnedExtra').style.display = 'block'
        isPinned = true
    } else {
        document.getElementById('pinnedExtra').style.display = 'none'
        isPinned = false
    }
})

document.getElementById('minimizeClock').addEventListener('click', () => {
    ipcRenderer.send('minimizeCW')
})

document.getElementById('closeClock').addEventListener('click', () => {
    ipcRenderer.send('closeCW')
})

document.getElementById('moveButton').addEventListener('click', () => {
    if (moveButtonType == 'advanced') {
        ipcRenderer.send('openAdvancedMove')
    } else if (moveButtonType == 'simple') {
        isFullMove = true
        document.getElementById('bAlign').style.display = 'none'
        document.getElementById('extraButtons').style.display = 'none'
        document.getElementById('unmoveButton').style.display = 'flex'
    }
})

document.getElementById('unmoveButton').addEventListener('click', () => {
    document.getElementById('bAlign').removeAttribute('style')
    document.getElementById('extraButtons').removeAttribute('style')
    if (isShowingExtra) {
        document.getElementById('extraButtons').style.display = "flex";
    }
    isFullMove = false
    document.getElementById('unmoveButton').removeAttribute('style')
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

document.getElementById('helpClock').addEventListener('click', () => {
    ipcRenderer.send('openClockHelp')
})

//Snap
document.getElementById('posiStart').addEventListener('click', () => {
    ipcRenderer.send('posiStart')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'cnt')
        localStorage.setItem('vAlign', 'cnt')
    }
    localStorage.setItem('snapped', 'start')
})

document.getElementById('posiTL').addEventListener('click', () => {
    ipcRenderer.send('posiTL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'lft')
        localStorage.setItem('vAlign', 'top')
    }
    localStorage.setItem('snapped', 'tl')
})

document.getElementById('posiTR').addEventListener('click', () => {
    ipcRenderer.send('posiTR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'rgt')
        localStorage.setItem('vAlign', 'top')
    }
    localStorage.setItem('snapped', 'tr')
})

document.getElementById('posiBL').addEventListener('click', () => {
    ipcRenderer.send('posiBL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'lft')
        localStorage.setItem('vAlign', 'btm')
    }
    localStorage.setItem('snapped', 'bl')
})

document.getElementById('posiBR').addEventListener('click', () => {
    ipcRenderer.send('posiBR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'rgt')
        localStorage.setItem('vAlign', 'btm')
    }
    localStorage.setItem('snapped', 'br')
})

document.getElementById('posiBC').addEventListener('click', () => {
    ipcRenderer.send('posiBC')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'cnt')
        localStorage.setItem('vAlign', 'cnt')
    }
    localStorage.setItem('snapped', 'bc')
})

document.getElementById('posiCust').addEventListener('click', () => {
    let posiJSON = localStorage.getItem('customSnap')
    posiJSON = JSON.parse(posiJSON)
    let posiX = posiJSON.x
    let posiY = posiJSON.y
    ipcRenderer.send('windowPosition', {posiX, posiY})
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false  
    localStorage.setItem('snapped', 'custom')
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

ipcRenderer.on('openSnap', () => {
    if (!isShowingSnapBar) {
        document.getElementById('snapBar').style.right = '23px'
        isShowingSnapBar = true
    } else {
        document.getElementById('snapBar').removeAttribute('style')
        isShowingSnapBar = false  
    }
})

ipcRenderer.on('fullMove', () => {
    document.body.classList.add('fullMove')
    isFullMove = true
})

ipcRenderer.on('defaultMove', () => {
    document.body.classList.remove('fullMove')
    isFullMove = false
})