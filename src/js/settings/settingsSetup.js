// Setup
function appTheme() {
    let appTheme = localStorage.getItem('appTheme')
    if (appTheme == 'SOB' || appTheme == undefined) {
        document.getElementById('appTheme').href = 'css/settings/settings.css'
    } else if (appTheme = 'nonColor') {
        document.getElementById('appTheme').href = 'css/settings/settingsDC.css'
    }
}

appTheme()

//Hour
let showSec = localStorage.getItem('showSeconds')
if (showSec) {
    document.getElementById('showSec').checked = true
}

let amPmTime = localStorage.getItem('ampm')
if (amPmTime) {
    document.getElementById('amPmTime').checked = true
}

let stackHour = localStorage.getItem('stackHour')
if (stackHour) {
    document.getElementById('stackHour').checked = true
}
//Date
let showYear = localStorage.getItem('showYear')
if (showYear) {
    document.getElementById('showYear').checked = true
}

let showWeekDay = localStorage.getItem('hideWeekDay')
if (showWeekDay) {
    document.getElementById('showWeekDay').checked = false
}

let showDayMonth = localStorage.getItem('hideDayMonth')
if (showDayMonth) {
    document.getElementById('showDayMonth').checked = false
}

let shortDate = localStorage.getItem('shortDate')
if (shortDate) {
    document.getElementById('shortDate').checked = true
}

let usDate = localStorage.getItem('usDate')
if (usDate) {
    document.getElementById('usDate').checked = true
}

//Web
let cannotUseLocal = localStorage.getItem('cannotUseLocal')
if (cannotUseLocal) {
    document.getElementById('useLocalHour').checked = false
}

let notNotify = localStorage.getItem('notNotify')
if (notNotify) {
    document.getElementById('notifyError').checked = false
}

let offMode = localStorage.getItem('offlineMode')
if (offMode) {
    document.getElementById('offlineMode').checked = true
}

//GMT
let gmt = localStorage.getItem('gmt')
if (gmt == '-03:00' || gmt == undefined) {
    document.getElementById('BRT').checked = true
} else if (gmt == '-02:00') {
    document.getElementById('FNT').checked = true
} else if (gmt == '-04:00') {
    document.getElementById('AMT').checked = true
} else if (gmt == '-05:00') {
    document.getElementById('ACT').checked = true
}

//Theme
let themeSelected = localStorage.getItem('theme')
if (themeSelected == 'fUI' || themeSelected == undefined) {
    document.getElementById('w11theme').checked = true
} else if (themeSelected == 'mUI') {
    document.getElementById('w10theme').checked = true
} else if (themeSelected == 'oUI') {
    document.getElementById('oUItheme').checked = true
} else if (themeSelected == 'px') {
    document.getElementById('pxtheme').checked = true
} else if (themeSelected == 'wiiM') {
    document.getElementById('wiiMtheme').checked = true
} else if (themeSelected == 's3k') {
    document.getElementById('s3kTheme').checked = true
} else if (themeSelected == 'lines') {
    document.getElementById('loveloLineTheme').checked = true
} else if (themeSelected == 'lines') {
    document.getElementById('loveloLineTheme').checked = true
} else if (themeSelected == 'royal') {
    document.getElementById('royalTheme').checked = true
} else if (themeSelected == 'aero') {
    document.getElementById('aeroTheme').checked = true
} else if (themeSelected == 'custom') {
    document.getElementById('customTheme').checked = true
    document.getElementById('customThemeSection').removeAttribute('style')
}

let customThemeSettings = localStorage.getItem('customTheme')
customThemeSettings = JSON.parse(customThemeSettings)
try {
    document.getElementById('gfontsUrl').value = customThemeSettings.fontURL
    document.getElementById('gfontsName').value = customThemeSettings.fontName
    document.getElementById('hourSize').value = customThemeSettings.hourSize
    document.getElementById('dateSize').value = customThemeSettings.dateSize
    document.getElementById('lightFont').value = customThemeSettings.lightColor
    document.getElementById('lfColor').style.backgroundColor = customThemeSettings.lightColor
    document.getElementById('darkFont').value = customThemeSettings.darkColor
    document.getElementById('dfColor').style.backgroundColor = customThemeSettings.darkColor
    document.getElementById('useLine').checked = customThemeSettings.useLine
    document.getElementById('lineSize').value = customThemeSettings.lineSize
    document.getElementById('lineColorCheck').checked = customThemeSettings.lineColorCheck
    document.getElementById('lineColor').value = customThemeSettings.lineColor
    document.getElementById('lColor').style.backgroundColor = customThemeSettings.lineColor
} catch { }

let appThemeSelected = localStorage.getItem('appTheme')
if (appThemeSelected == 'SOB' || appThemeSelected == undefined) {
    document.getElementById('shadesOfBlue').checked = true
} else if (appThemeSelected = 'nonColor') {
    document.getElementById('nonColor').checked = true
}

//Alignment
let alignSetting = localStorage.getItem('align')
if (alignSetting == 'cnt' || alignSetting == undefined) {
    document.getElementById('cnt').checked = true
} else if (alignSetting == 'lft') {
    document.getElementById('lft').checked = true
} else if (alignSetting == 'rgt') {
    document.getElementById('rgt').checked = true
}

let vAlignSetting = localStorage.getItem('vAlign')
if (vAlignSetting == 'cnt' || vAlignSetting == undefined) {
    document.getElementById('calign').checked = true
} else if (vAlignSetting == 'top') {
    document.getElementById('talign').checked = true
} else if (vAlignSetting == 'btm') {
    document.getElementById('balign').checked = true
}

let notAlignSnap = localStorage.getItem('notAlignSnap')
if (notAlignSnap) {
    document.getElementById('alignSnap').checked = false
}

let bAlignSetting = localStorage.getItem('bAlign')
if (bAlignSetting == 'right' || bAlignSetting == undefined) {
    document.getElementById('rbutton').checked = true
} else if (bAlignSetting == 'left') {
    document.getElementById('lbutton').checked = true
} else if (bAlignSetting == 'top') {
    document.getElementById('tbutton').checked = true
} else if (bAlignSetting == 'bottom') {
    document.getElementById('bbutton').checked = true
}

function checkAutoAlign() {
    alignSetting = localStorage.getItem('align')
    if (alignSetting == 'cnt' || alignSetting == undefined) {
        document.getElementById('cnt').checked = true
    } else if (alignSetting == 'lft') {
        document.getElementById('lft').checked = true
    } else if (alignSetting == 'rgt') {
        document.getElementById('rgt').checked = true
    }

    vAlignSetting = localStorage.getItem('vAlign')
    if (vAlignSetting == 'cnt' || vAlignSetting == undefined) {
        document.getElementById('calign').checked = true
    } else if (vAlignSetting == 'top') {
        document.getElementById('talign').checked = true
    } else if (vAlignSetting == 'btm') {
        document.getElementById('balign').checked = true
    }
}

setInterval(() => {
    checkAutoAlign()
}, 10);

//Widget
let notUseCustSnap = localStorage.getItem('notUseCustSnap')
if (notUseCustSnap) {
    document.getElementById('customSnap').checked = false
}

let moveType = localStorage.getItem('moveType')
if (moveType == undefined) {
    document.getElementById('defaultMove').checked = true
} else if (moveType == 'advanced') {
    document.getElementById('advancedModeWidget').checked = true
} else if (moveType == 'simple') {
    document.getElementById('simpleMove').checked = true
}