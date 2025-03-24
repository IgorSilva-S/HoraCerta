const { exec } = require('child_process');

function handleSquirrelEvent() {
    const squirrelEvent = process.argv[1]; // Captura o evento recebido

    if (squirrelEvent === '--squirrel-uninstall') {
        exec('reg delete "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Hora Certa" /f');
    }
}

module.exports = handleSquirrelEvent;