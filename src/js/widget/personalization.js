function getPersonalizations() {
    let theme = localStorage.getItem('theme')
    let align = localStorage.getItem('align')
    let vAlign = localStorage.getItem('vAlign')
    let bAlign = localStorage.getItem('bAlign')
    let moveType = localStorage.getItem('moveType')
    let notUseCustSnap = localStorage.getItem('notUseCustSnap')

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
    } else if (theme == 'aero') {
        document.body.classList.add('aero')
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

            document.getElementById('customFontLink').href = customThemeJSON.fontURL
            if (customThemeJSON.useLine == true) {
                if (customThemeJSON.lineColorCheck == true) {
                    styleTag.innerHTML = `
    
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
    
                .custom .line,
                .custom .lineInverted {
                    width: ${customThemeJSON.lineSize}%;
                    height: 3px;
                    background-color: ${customThemeJSON.lineColor};
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
                
                }
            `
                } else {
                    styleTag.innerHTML = `
    
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
                    width: ${customThemeJSON.lineSize}%;
                    height: 3px;
                    background-color: ${customThemeJSON.lightColor};
                    border-radius: 120px;
                    transition-duration: .2s;
                }
    
                .custom .lineInverted {
                    width: ${customThemeJSON.lineSize}%;
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
                }
            } else {
                styleTag.innerHTML = `
    
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
            try {
                document.getElementById('customThemeStyle').remove()
            } catch { }
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

    //Widget
    document.getElementById('posiCust').removeAttribute('style')
    if (isFullMove) {
        document.body.classList.add('fullMove')
    }

    if (moveType == undefined) {
        document.getElementById('moveButton').classList.add('moveArea')
        moveButtonType = 'move'
    } else if (moveType == 'advanced') {
        document.getElementById('moveButton').classList.remove('moveArea')
        moveButtonType = 'advanced'
    } else if (moveType == 'simple') {
        document.getElementById('moveButton').classList.remove('moveArea')
        moveButtonType = 'simple'
    }

    if (notUseCustSnap) {
        document.getElementById('posiCust').style.display = 'none'
    }
}

setInterval(() => {
    getPersonalizations()
}, 10);