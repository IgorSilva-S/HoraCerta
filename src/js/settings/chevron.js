// Hour
let isHourChevronOpened = false
document.getElementById('hourSButton').addEventListener('click', () => {
    if (!isHourChevronOpened) {
        document.getElementById('hourSection').style.display = 'block'
        document.getElementById('exposeHourSection').classList.add('openExpose')
        isHourChevronOpened = true
    } else {
        document.getElementById('hourSection').removeAttribute('style')
        document.getElementById('exposeHourSection').classList.remove('openExpose')
        isHourChevronOpened = false
    }
})

// Date
let isDateChevronOpened = false
document.getElementById('dateSButton').addEventListener('click', () => {
    if (!isDateChevronOpened) {
        document.getElementById('dateSection').style.display = 'block'
        document.getElementById('exposeDateSection').classList.add('openExpose')
        isDateChevronOpened = true
    } else {
        document.getElementById('dateSection').removeAttribute('style')
        document.getElementById('exposeDateSection').classList.remove('openExpose')
        isDateChevronOpened = false
    }
})

// Web
let isWebChevronOpened = false
document.getElementById('webSButton').addEventListener('click', () => {
    if (!isWebChevronOpened) {
        document.getElementById('webSection').style.display = 'block'
        document.getElementById('exposeWebSection').classList.add('openExpose')
        isWebChevronOpened = true
    } else {
        document.getElementById('webSection').removeAttribute('style')
        document.getElementById('exposeWebSection').classList.remove('openExpose')
        isWebChevronOpened = false
    }
})

// GMT
let isGMTChevronOpened = false
document.getElementById('GMTSButton').addEventListener('click', () => {
    if (!isGMTChevronOpened) {
        document.getElementById('GMTSection').style.display = 'block'
        document.getElementById('exposeGMTSection').classList.add('openExpose')
        isGMTChevronOpened = true
    } else {
        document.getElementById('GMTSection').removeAttribute('style')
        document.getElementById('exposeGMTSection').classList.remove('openExpose')
        isGMTChevronOpened = false
    }
})

// Theme
let isThemeChevronOpened = false
document.getElementById('themeSButton').addEventListener('click', () => {
    if (!isThemeChevronOpened) {
        document.getElementById('themeSection').style.display = 'block'
        document.getElementById('exposeThemeSection').classList.add('openExpose')
        isThemeChevronOpened = true
    } else {
        document.getElementById('themeSection').removeAttribute('style')
        document.getElementById('exposeThemeSection').classList.remove('openExpose')
        isThemeChevronOpened = false
    }
})

// Alignment
let isAlignChevronOpened = false
document.getElementById('alignSButton').addEventListener('click', () => {
    if (!isAlignChevronOpened) {
        document.getElementById('alignSection').style.display = 'block'
        document.getElementById('exposeAlignSection').classList.add('openExpose')
        isAlignChevronOpened = true
    } else {
        document.getElementById('alignSection').removeAttribute('style')
        document.getElementById('exposeAlignSection').classList.remove('openExpose')
        isAlignChevronOpened = false
    }
})