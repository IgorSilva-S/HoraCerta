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
    let newAppTheme = localStorage.getItem('appTheme')
    if (newAppTheme != appSelTheme) {
        appSelTheme = newAppTheme
        appTheme()
    }
}, 1);