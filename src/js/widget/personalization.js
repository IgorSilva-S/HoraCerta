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
    } else if (theme == 'custom') {
        let customThemeJSON = localStorage.getItem('customTheme')
        customThemeJSON = JSON.parse(customThemeJSON)
        if (customThemeJSON != undefined) {

            document.body.classList.add('custom')

            try {
                document.getElementById('customThemeStyle').remove()
            } catch { }
            let styleTag = document.createElement('style')
            styleTag.setAttribute('id', 'customThemeStyle')
            if (customThemeJSON.useLine == true) {
                styleTag.innerHTML = `
                @import url('${customThemeJSON.fontURL}')
    
                .custom .hour {
                    font-size: ${customThemeJSON.hourSize}px;
                    font-family: ${customThemeJSON.fontName};
                    color: ${customThemeJSON.lightColor}
                }
    
                .custom .date {
                    font-size: ${customThemeJSON.dateSize}px;
                    font-family: ${customThemeJSON.fontName};
                    color: ${customThemeJSON.lightColor}
                }
    
                .custom .inverted {
                    color: ${customThemeJSON.darkColor}
                }
    
                .custom .line {
                    width: 100%;
                    height: 3px;
                    background-color: ${customThemeJSON.lightColor};
                    border-radius: 120px;
                    transition-duration: .2s;
                }
    
                .custom .lineInverted {
                    width: 100%;
                    height: 3px;
                    background-color: ${customThemeJSON.darkColor};
                    border-radius: 120px;
                    transition-duration: .2s;
                }
    
                @media (prefers-color-scheme: dark) {
                    .custom .hour {
                        color: ${customThemeJSON.darkColor}
                    }
                
                    .custom .date {
                        color: ${customThemeJSON.darkColor}
                    }
                
                    .custom .inverted {
                        color: ${customThemeJSON.lightColor}
                    }
                
                    .custom .line {
                        background-color: ${customThemeJSON.darkColor};
                    }
                
                    .custom .lineInverted {
                        background-color: ${customThemeJSON.lightColor};
                    }
                }
            `
            } else {
                styleTag.innerHTML = `
                @import url('${customThemeJSON.fontURL}')
    
                .custom .hour {
                    font-size: ${customThemeJSON.hourSize}px;
                    font-family: ${customThemeJSON.fontName};
                    color: ${customThemeJSON.lightColor}
                }
    
                .custom .date {
                    font-size: ${customThemeJSON.dateSize}px;
                    font-family: ${customThemeJSON.fontName};
                    color: ${customThemeJSON.lightColor}
                }
    
                .custom .inverted {
                    color: ${customThemeJSON.darkColor}
                }
    
                @media (prefers-color-scheme: dark) {
                    .custom .hour {
                        color: ${customThemeJSON.darkColor}
                    }
                
                    .custom .date {
                        color: ${customThemeJSON.darkColor}
                    }
                
                    .custom .inverted {
                        color: ${customThemeJSON.lightColor}
                    }
                
                }
            `
            }

            document.body.insertAdjacentElement("beforebegin", styleTag);
        } else {
            document.body.classList.add('custom')
        }
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