document.getElementById('openSettings').addEventListener('click', () => {
        ipcRenderer.send('openSettings')
})

ipcRenderer.on('itsOpened', () => {
    ipcRenderer.send('focusSettings')
})