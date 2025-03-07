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
document.getElementById('BRT').addEventListener('click', () => {
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
})

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
        useLine: document.getElementById('useLine').checked
    }

    localStorage.setItem('customTheme', JSON.stringify(customThemeJSON))
})

document.getElementById('resetCustomTheme').addEventListener('click', () => {
    localStorage.removeItem('customTheme')
})
// End Custom Theme

document.getElementById('shadesOfBlue').addEventListener('click', () => {
    localStorage.setItem('appTheme', 'SOB')
    appTheme()
})

document.getElementById('nonColor').addEventListener('click', () => {
    localStorage.setItem('appTheme', 'nonColor')
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
    if (isChecked) {
        localStorage.setItem('alignSnap', true)
    } else {
        localStorage.removeItem('alignSnap')
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