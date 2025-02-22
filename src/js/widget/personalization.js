function getPersonalizations() {
    let theme = localStorage.getItem('theme')
    let align = localStorage.getItem('align')
    let bAlign = localStorage.getItem('bAlign')

    //Theme
    document.body.classList.remove('mUI')
    document.body.classList.remove('oUI')
    document.body.classList.remove('px')
    document.body.classList.remove('wiiM')

    if (theme == 'mUI') {
        document.body.classList.add('mUI')
    } else if (theme == 'oUI') {
        document.body.classList.add('oUI')
    } else if (theme == 'px') {
        document.body.classList.add('px')
    } else if (theme == 'wiiM') {
        document.body.classList.add('wiiM')
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
}, 1000);