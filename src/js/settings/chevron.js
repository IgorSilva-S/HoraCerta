// Hour
let isHourChevronOpened = false
document.getElementById('hourSButton').addEventListener('click', () => {
    if (!isHourChevronOpened) {
        document.getElementById('hourSection').style.display = 'block'
        document.getElementById('exposeHourSection').classList.add('openExpose')
        document.getElementById('hourSButton').style.borderRadius = '4px 4px 0 0'
        isHourChevronOpened = true
    } else {
        document.getElementById('hourSection').removeAttribute('style')
        document.getElementById('exposeHourSection').classList.remove('openExpose')
        document.getElementById('hourSButton').removeAttribute('style')
        isHourChevronOpened = false
    }
})

// Date
let isDateChevronOpened = false
document.getElementById('dateSButton').addEventListener('click', () => {
    if (!isDateChevronOpened) {
        document.getElementById('dateSection').style.display = 'block'
        document.getElementById('exposeDateSection').classList.add('openExpose')
        document.getElementById('dateSButton').style.borderRadius = '4px 4px 0 0'
        isDateChevronOpened = true
    } else {
        document.getElementById('dateSection').removeAttribute('style')
        document.getElementById('exposeDateSection').classList.remove('openExpose')
        document.getElementById('dateSButton').removeAttribute('style')
        isDateChevronOpened = false
    }
})

// Web
let isWebChevronOpened = false
document.getElementById('webSButton').addEventListener('click', () => {
    if (!isWebChevronOpened) {
        document.getElementById('webSection').style.display = 'block'
        document.getElementById('exposeWebSection').classList.add('openExpose')
        document.getElementById('webSButton').style.borderRadius = '4px 4px 0 0'
        isWebChevronOpened = true
    } else {
        document.getElementById('webSection').removeAttribute('style')
        document.getElementById('exposeWebSection').classList.remove('openExpose')
        document.getElementById('webSButton').removeAttribute('style')
        isWebChevronOpened = false
    }
})

// GMT
let isGMTChevronOpened = false
document.getElementById('GMTSButton').addEventListener('click', () => {
    if (!isGMTChevronOpened) {
        document.getElementById('GMTSection').style.display = 'block'
        document.getElementById('exposeGMTSection').classList.add('openExpose')
        document.getElementById('GMTSButton').style.borderRadius = '4px 4px 0 0'
        isGMTChevronOpened = true
    } else {
        document.getElementById('GMTSection').removeAttribute('style')
        document.getElementById('exposeGMTSection').classList.remove('openExpose')
        document.getElementById('GMTSButton').removeAttribute('style')
        isGMTChevronOpened = false
    }
})

// Theme
let isThemeChevronOpened = false
document.getElementById('themeSButton').addEventListener('click', () => {
    if (!isThemeChevronOpened) {
        document.getElementById('themeSection').style.display = 'block'
        document.getElementById('exposeThemeSection').classList.add('openExpose')
        document.getElementById('themeSButton').style.borderRadius = '4px 4px 0 0'
        isThemeChevronOpened = true
    } else {
        document.getElementById('themeSection').removeAttribute('style')
        document.getElementById('exposeThemeSection').classList.remove('openExpose')
        document.getElementById('themeSButton').removeAttribute('style')
        isThemeChevronOpened = false
    }
})

// Alignment
let isAlignChevronOpened = false
document.getElementById('alignSButton').addEventListener('click', () => {
    if (!isAlignChevronOpened) {
        document.getElementById('alignSection').style.display = 'block'
        document.getElementById('exposeAlignSection').classList.add('openExpose')
        document.getElementById('alignSButton').style.borderRadius = '4px 4px 0 0'
        isAlignChevronOpened = true
    } else {
        document.getElementById('alignSection').removeAttribute('style')
        document.getElementById('exposeAlignSection').classList.remove('openExpose')
        document.getElementById('alignSButton').removeAttribute('style')
        isAlignChevronOpened = false
    }
})

//About
let isAboutChevronOpened = false
document.getElementById('aboutSButton').addEventListener('click', () => {
    if (!isAboutChevronOpened) {
        document.getElementById('aboutSection').style.display = 'block'
        document.getElementById('exposeAboutSection').classList.add('openExpose')
        document.getElementById('aboutSButton').style.borderRadius = '4px 4px 0 0'
        isAboutChevronOpened = true
    } else {
        document.getElementById('aboutSection').removeAttribute('style')
        document.getElementById('exposeAboutSection').classList.remove('openExpose')
        document.getElementById('aboutSButton').removeAttribute('style')
        isAboutChevronOpened = false
    }
})