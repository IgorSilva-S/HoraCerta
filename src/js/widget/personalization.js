function getPersonalizations() {
    let theme = localStorage.getItem('theme')
    let align = localStorage.getItem('align')
    let vAlign = localStorage.getItem('vAlign')
    let bAlign = localStorage.getItem('bAlign')

    //Theme
    document.body.removeAttribute('class')
    if (stackHour) {
        document.body.classList.add('stackHour')
    } else {
        document.body.classList.remove('stackHour')
    }

    if (theme == 'mUI') {
        document.body.classList.add('mUI')
    } else if (theme == 'oUI') {
        document.body.classList.add('oUI')
    } else if (theme == 'px') {
        document.body.classList.add('px')
    } else if (theme == 'wiiM') {
        document.body.classList.add('wiiM')
    } else if (theme == 's3k') {
        document.body.classList.add('s3k')
    } else if (theme == 'lines') {
        document.body.classList.add('lines')
    } else if (theme == 'royal') {
        document.body.classList.add('royal')
    }

    let hideButtons = localStorage.getItem('hideButtons')
    if (hideButtons) {
        document.getElementById('bAlign').style.display = 'none'
        document.getElementById('extraButtons').style.display = 'none'
        document.getElementById('moveArea').style.display = 'flex'
        isShowingExtra = false
    } else {
        document.getElementById('bAlign').removeAttribute('style')
        if (!isShowingExtra) {
            document.getElementById('extraButtons').removeAttribute('style')
        }
        document.getElementById('moveArea').style.display = 'none'
    }

    //Alignment
    document.body.removeAttribute('style')
    document.getElementById('hour').removeAttribute('style')
    document.getElementById('date').removeAttribute('style')
    if (align == 'lft') {
        document.body.style.alignItems = 'flex-start'
        document.getElementById('hour').style.textAlign = 'left'
        document.getElementById('date').style.textAlign = 'left'
    } else if (align == 'rgt') {
        document.body.style.alignItems = 'flex-end'
        document.getElementById('hour').style.textAlign = 'right'
        document.getElementById('date').style.textAlign = 'right'
    }

    if (vAlign == 'top') {
        document.body.style.justifyContent = 'flex-start'
    } else if (vAlign == 'btm') {
        document.body.style.justifyContent = 'flex-end'
    }

    //Button Alignment
    document.getElementById('bAlign').removeAttribute('class')
    if (bAlign == 'right' || bAlign == undefined) {
        document.getElementById('bAlign').className = 'buttonsAlignRight'
        document.getElementById('extraButtons').className = 'ebRight'
    } else if (bAlign == 'left') {
        document.getElementById('bAlign').className = 'buttonsAlignLeft'
        document.getElementById('extraButtons').className = 'ebLeft'
    } else if (bAlign == 'top') {
        document.getElementById('bAlign').className = 'buttonsAlignTop'
        document.getElementById('extraButtons').className = 'ebTop'
    } else if (bAlign == 'bottom') {
        document.getElementById('bAlign').className = 'buttonsAlignBottom'
        document.getElementById('extraButtons').className = 'ebBottom'
    }
}

setInterval(() => {
    getPersonalizations()
}, 10);