const { ipcRenderer }= require('electron')

document.getElementById('openGF').addEventListener('click', () => {
    ipcRenderer.send('openGoogleFonts')
})