let snapped = localStorage.getItem('snapped')

if (snapped == 'start') {
    ipcRenderer.send('posiStart')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'cnt')
        localStorage.setItem('vAlign', 'cnt')
    }
} else if (snapped == 'tl') {
    ipcRenderer.send('posiTL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'lft')
        localStorage.setItem('vAlign', 'top')
    }
} else if (snapped == 'tr') {
    ipcRenderer.send('posiTR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'rgt')
        localStorage.setItem('vAlign', 'top')
    }
} else if (snapped == 'bl') {
    ipcRenderer.send('posiBL')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'lft')
        localStorage.setItem('vAlign', 'btm')
    }
} else if (snapped == 'br') {
    ipcRenderer.send('posiBR')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'rgt')
        localStorage.setItem('vAlign', 'btm')
    }
} else if (snapped == 'bc') {
    ipcRenderer.send('posiBC')
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
    let notAlignSnap = localStorage.getItem('notAlignSnap')
    if (!notAlignSnap) {
        localStorage.setItem('align', 'cnt')
        localStorage.setItem('vAlign', 'cnt')
    }
} else if (snapped == 'custom') {
    let posiJSON = localStorage.getItem('customSnap')
    posiJSON = JSON.parse(posiJSON)
    let posiX = posiJSON.x
    let posiY = posiJSON.y
    ipcRenderer.send('windowPosition', { posiX, posiY })
    document.getElementById('snapBar').removeAttribute('style')
    isShowingSnapBar = false
}

let moveButtonFunc = localStorage.getItem('moveType')
if (moveButtonFunc == undefined) {
    document.getElementById('moveButton').classList.add('moveArea')
    moveButtonType = 'move'
} else if (moveButtonFunc == 'advanced') {
    document.getElementById('moveButton').classList.remove('moveArea')
    moveButtonType = 'advanced'
} else if (moveButtonFunc == 'simple') {
    document.getElementById('moveButton').classList.remove('moveArea')
    moveButtonType = 'simple'
}