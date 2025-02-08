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
    localStorage.setItem('theme', 'w11')
})

document.getElementById('w10theme').addEventListener('click', () => {
    localStorage.setItem('theme', 'w10')
})

document.getElementById('oUItheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'oUI')
})

document.getElementById('pxtheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'px')
})

document.getElementById('wiiMtheme').addEventListener('click', () => {
    localStorage.setItem('theme', 'wiiM')
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