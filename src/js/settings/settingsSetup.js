// Setup

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