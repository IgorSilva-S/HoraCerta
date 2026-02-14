let appSelTheme = localStorage.getItem('appTheme')

function appTheme() {
    if (appSelTheme == 'SOB' || appSelTheme == undefined) {
        document.getElementById('appTheme').href = 'css/default.css'
    } else if (appSelTheme == 'fluentTheme') {
        document.getElementById('appTheme').href = 'css/defaultColors.css'
    } else if (appSelTheme == 'metroTheme') {
        document.getElementById('appTheme').href = 'css/metroColors.css'
    }
}

appTheme()

setInterval(() => {
    if (localStorage.getItem('settingsSysBackdrop') == 'true') {
        document.getElementById('micaEffect').innerHTML = `
            body, .titleBar, .title {
                background-color: #0000 !important;
            }
        `

    } else {
        document.getElementById('micaEffect').innerHTML = ''
        localStorage.setItem('settingsSysBackdrop', false)
    }
}, 2);

setInterval(() => {
    let newAppTheme = localStorage.getItem('appTheme')
    if (newAppTheme != appSelTheme) {
        appSelTheme = newAppTheme
        appTheme()
    }
}, 1);