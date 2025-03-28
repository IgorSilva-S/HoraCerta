const { ipcRenderer } = require("electron")

/*Hour settings*/
document.getElementById('showSec').addEventListener('click', () => {
    let isChecked = document.getElementById('showSec').checked
    if (isChecked) {
        localStorage.setItem('showSeconds', true)
    } else {
        localStorage.removeItem('showSeconds')
    }
})

document.getElementById('amPmTime').addEventListener('click', () => {
    let isChecked = document.getElementById('amPmTime').checked
    if (isChecked) {
        localStorage.setItem('ampm', true)
    } else {
        localStorage.removeItem('ampm')
    }
})

document.getElementById('stackHour').addEventListener('click', () => {
    let isChecked = document.getElementById('stackHour').checked
    if (isChecked) {
        localStorage.setItem('stackHour', true)
    } else {
        localStorage.removeItem('stackHour')
    }
})

/*Date settings*/
document.getElementById('showYear').addEventListener('click', () => {
    let isChecked = document.getElementById('showYear').checked
    if (isChecked) {
        localStorage.setItem('showYear', true)
    } else {
        localStorage.removeItem('showYear')
    }
})

document.getElementById('showWeekDay').addEventListener('click', () => {
    let isChecked = document.getElementById('showWeekDay').checked
    if (!isChecked) {
        localStorage.setItem('hideWeekDay', true)
    } else {
        localStorage.removeItem('hideWeekDay')
    }
})

document.getElementById('showDayMonth').addEventListener('click', () => {
    let isChecked = document.getElementById('showDayMonth').checked
    if (!isChecked) {
        localStorage.setItem('hideDayMonth', true)
    } else {
        localStorage.removeItem('hideDayMonth')
    }
})

document.getElementById('shortDate').addEventListener('click', () => {
    let isChecked = document.getElementById('shortDate').checked
    if (isChecked) {
        localStorage.setItem('shortDate', true)
    } else {
        localStorage.removeItem('shortDate')
    }
})

document.getElementById('usDate').addEventListener('click', () => {
    let isChecked = document.getElementById('usDate').checked
    if (isChecked) {
        localStorage.setItem('usDate', true)
    } else {
        localStorage.removeItem('usDate')
    }
})

/*Web Settings*/
document.getElementById('notifyError').addEventListener('click', () => {
    let isChecked = document.getElementById('notifyError').checked
    if (!isChecked) {
        localStorage.setItem('notNotify', true)
    } else {
        localStorage.removeItem('notNotify')
    }
})

document.getElementById('useLocalHour').addEventListener('click', () => {
    let isChecked = document.getElementById('useLocalHour').checked
    if (!isChecked) {
        localStorage.setItem('cannotUseLocal', true)
    } else {
        localStorage.removeItem('cannotUseLocal')
    }
})

document.getElementById('offlineMode').addEventListener('click', () => {
    let isChecked = document.getElementById('offlineMode').checked
    if (isChecked) {
        localStorage.setItem('offlineMode', true)
    } else {
        localStorage.removeItem('offlineMode')
    }
})

/*GMT Settings*/
document.getElementById('gmt').addEventListener('change', () => {
    localStorage.setItem('gmt', document.getElementById('gmt').value)
})
/*document.getElementById('BRT').addEventListener('click', () => {
    localStorage.setItem('gmt', '-03:00')
})

document.getElementById('FNT').addEventListener('click', () => {
    localStorage.setItem('gmt', '-02:00')
})

document.getElementById('AMT').addEventListener('click', () => {
    localStorage.setItem('gmt', '-04:00')
})

document.getElementById('ACT').addEventListener('click', () => {
    localStorage.setItem('gmt', '-05:00')
})*/

/*Theme Settings*/
document.getElementById('w11theme').addEventListener('click', () => {
    localStorage.setItem('theme', 'fUI')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('w10theme').addEventListener('click', () => {
    localStorage.setItem('theme', 'mUI')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('oUItheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'oUI')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('pxtheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'px')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('wiiMtheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'wiiM')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('s3kTheme').addEventListener('click', () => {
    localStorage.setItem('theme', 's3k')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('loveloLineTheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'lines')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('royalTheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'royal')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('aeroTheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'aero')
    document.getElementById('customThemeSection').style.display = 'none'
})

document.getElementById('customTheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'custom')
    document.getElementById('customThemeSection').removeAttribute('style')
})


// Custom Theme

document.getElementById('gfHelp').addEventListener('click', () => {
    ipcRenderer.send('openGFHelp')
})

document.getElementById('lightFont').addEventListener('change', () => {
    document.getElementById('lfColor').style.backgroundColor = document.getElementById('lightFont').value
})

document.getElementById('darkFont').addEventListener('change', () => {
    document.getElementById('dfColor').style.backgroundColor = document.getElementById('darkFont').value
})

document.getElementById('lineColor').addEventListener('change', () => {
    document.getElementById('lColor').style.backgroundColor = document.getElementById('lineColor').value
})

document.getElementById('saveCustomTheme').addEventListener('click', () => {
    let fontUrlVal = document.getElementById('gfontsUrl').value
    let fontNameVal = document.getElementById('gfontsName').value
    if (fontUrlVal == '' || fontUrlVal == " ") {
        fontUrlVal = "https://fonts.googleapis.com/css2?family=Sigmar&display=swap"
    }

    if (fontNameVal == '' || fontNameVal == " ") {
        fontNameVal = "'Times New Roman', Times, serif"
    }

    let customThemeJSON = {
        fontURL: fontUrlVal,
        fontName: fontNameVal,
        hourSize: document.getElementById('hourSize').value,
        dateSize: document.getElementById('dateSize').value,
        lightColor: document.getElementById('lightFont').value,
        darkColor: document.getElementById('darkFont').value,
        useLine: document.getElementById('useLine').checked,
        lineSize: document.getElementById('lineSize').value,
        lineColorCheck: document.getElementById('lineColorCheck').checked,
        lineColor: document.getElementById('lineColor').value
    }

    localStorage.setItem('customTheme', JSON.stringify(customThemeJSON))
})

document.getElementById('resetCustomTheme').addEventListener('click', () => {
    localStorage.removeItem('customTheme')
    document.getElementById('gfontsUrl').value = ''
    document.getElementById('gfontsName').value = ''
    document.getElementById('hourSize').value = 120
    document.getElementById('dateSize').value = 28
    document.getElementById('lightFont').value = '#000000'
    document.getElementById('lfColor').style.backgroundColor = '#000'
    document.getElementById('darkFont').value = '#ffffff'
    document.getElementById('dfColor').style.backgroundColor = "#fff"
    document.getElementById('useLine').checked = false
    document.getElementById('lineSize').value = 100
    document.getElementById('lineColorCheck').checked = false
    document.getElementById('lineColor').value = '#ffffff'
    document.getElementById('lColor').style.backgroundColor = "#fff"
})

// End Custom Theme

document.getElementById('shadesOfBlue').addEventListener('click', () => {
    localStorage.setItem('appTheme', 'SOB')
    appTheme()
})

document.getElementById('fluentTheme').addEventListener('click', () => {
    localStorage.setItem('appTheme', 'fluentTheme')
    appTheme()
})

document.getElementById('metroTheme').addEventListener('click', () => {
    localStorage.setItem('appTheme', 'metroTheme')
    appTheme()
})

/*Alignment settings*/
document.getElementById('cnt').addEventListener('click', () => {
    localStorage.setItem('align', 'cnt')
})

document.getElementById('lft').addEventListener('click', () => {
    localStorage.setItem('align', 'lft')
})

document.getElementById('rgt').addEventListener('click', () => {
    localStorage.setItem('align', 'rgt')
})

document.getElementById('calign').addEventListener('click', () => {
    localStorage.setItem('vAlign', 'cnt')
})

document.getElementById('talign').addEventListener('click', () => {
    localStorage.setItem('vAlign', 'top')
})

document.getElementById('balign').addEventListener('click', () => {
    localStorage.setItem('vAlign', 'btm')
})

document.getElementById('alignSnap').addEventListener('click', () => {
    let isChecked = document.getElementById('alignSnap').checked
    if (!isChecked) {
        localStorage.setItem('notAlignSnap', true)
    } else {
        localStorage.removeItem('notAlignSnap')
    }
})

document.getElementById('rbutton').addEventListener('click', () => {
    localStorage.setItem('bAlign', 'right')
})

document.getElementById('lbutton').addEventListener('click', () => {
    localStorage.setItem('bAlign', 'left')
})

document.getElementById('tbutton').addEventListener('click', () => {
    localStorage.setItem('bAlign', 'top')
})

document.getElementById('bbutton').addEventListener('click', () => {
    localStorage.setItem('bAlign', 'bottom')
})

/*Widget settings*/
document.getElementById('openAdvancedMove').addEventListener('click', () => {
    ipcRenderer.send('openAdvancedMove')
})

document.getElementById('defaultMove').addEventListener('click', () => {
    localStorage.removeItem('moveType')
})

document.getElementById('advancedModeWidget').addEventListener('click', () => {
    localStorage.setItem('moveType', 'advanced')
})

document.getElementById('simpleMove').addEventListener('click', () => {
    localStorage.setItem('moveType', 'simple')
})

// document.getElementById('uninstallWidget').addEventListener('click', () => {
//     document.getElementById('promptTitle').innerText = 'Desinstalar Hora Certa'
//     document.getElementById('promptInfo').innerText = 'Tem certeza de que quer desinstalar o Hora Certa? Os dados e customizações serão perdidos. Essa é uma ação sem volta!'
//     document.getElementById('promptSec').innerText = 'Desinstalar'
//     document.getElementById('promptFirst').innerText = 'Cancelar'
//     document.getElementById('promptCont').style.display = 'flex'
//     typePrompt = 'uninstall'
// })



document.getElementById('removeAutoBoot').addEventListener('click', () => {
    ipcRenderer.send('removeBootEntry')
})

document.getElementById('customSnap').addEventListener('click', () => {
    let isChecked = document.getElementById('customSnap').checked
    if (!isChecked) {
        localStorage.setItem('notUseCustSnap', true)
    } else {
        localStorage.removeItem('notUseCustSnap')
    }
})

document.getElementById('autoBoot').addEventListener('click', () => {
    let isChecked = document.getElementById('autoBoot').checked
    if (!isChecked) {
        localStorage.setItem('notAutoBoot', true)
        ipcRenderer.send('disableAutoBoot')
    } else {
        localStorage.removeItem('notAutoBoot')
        ipcRenderer.send('enableAutoBoot')
    }
})

/*About settings*/
let numberClicked = 0
document.getElementById('versionNumber').addEventListener('click', () => {
    if (numberClicked < 11) {
        numberClicked++
    } else {
        ipcRenderer.send('enableDevelopmentVar')
        localStorage.setItem('developer', true)
    }
})

document.getElementById('openGitHub').addEventListener('click', () => {
    ipcRenderer.send('openGitHub')
})

/*Prompt*/
let typePrompt = 'closeAll'

document.getElementById('promptSec').addEventListener('click', () => {
    if (typePrompt == 'closeAll') {
        document.getElementById('prompt').style.opacity = '0'
        setTimeout(() => {
            document.getElementById('prompt').removeAttribute('style')
            document.getElementById('promptCont').style.display = 'none'
        }, 200);
    } else if (typePrompt == 'uninstall') {
        const loadingSpinner = document.getElementById("loadingSpinner");

        const uniStart = parseInt("E100", 16);
        const uniEnd = parseInt("E176", 16);
        let uniActual = uniStart;

        function loadingSpinnerAnim() {
            if (uniActual <= uniEnd) {
                loadingSpinner.innerHTML = `&#x${uniActual.toString(16).toUpperCase()};`;
                uniActual++;
            } else {
                uniActual = uniStart;
            }
        }

        setInterval(loadingSpinnerAnim, 33)
        loadingSpinner.style.display = 'block'
        document.getElementById('promptTitle').innerText = 'Desinstalando Hora Certa'
        document.getElementById('promptInfo').style.display = 'none'
        document.getElementById('buttonOptions').style.display = 'none'
        ipcRenderer.send('startUninstall')
    }
})

document.getElementById('promptFirst').addEventListener('click', () => {
    if (typePrompt == 'closeAll') {
        document.getElementById('prompt').style.opacity = '0'
        setTimeout(() => {
            document.getElementById('prompt').removeAttribute('style')
            document.getElementById('promptCont').style.display = 'none'
        }, 200);
    } else if (typePrompt == 'uninstall') {
        document.getElementById('prompt').style.opacity = '0'
        setTimeout(() => {
            document.getElementById('prompt').removeAttribute('style')
            document.getElementById('promptCont').style.display = 'none'
        }, 200);
    }
})