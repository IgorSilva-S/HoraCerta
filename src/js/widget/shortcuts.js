let keys = []

window.addEventListener('keydown', (e) => {
    let kName = e.key
    keys[kName] = true
    shortcuts()
})

window.addEventListener('keyup', (e) => {
    let kName = e.key
    keys[kName] = false
    shortcuts()
})

function shortcuts() {

    if (keys['Control'] == true && (keys['s'] == true || keys['S'] == true)) {
        if (!isShowingSnapBar) {
            document.getElementById('snapBar').style.right = '23px'
            isShowingSnapBar = true
        } else {
            document.getElementById('snapBar').removeAttribute('style')
            isShowingSnapBar = false  
        }
    }

    if (keys['Control'] == true && (keys['c'] == true || keys['C'] == true)) {
        if (!isInverted) {
            document.getElementById('hour').classList.add('inverted')
            document.getElementById('date').classList.add('inverted')
            document.getElementById('line').className = 'lineInverted'
            isInverted = true
        } else {
            document.getElementById('hour').classList.remove('inverted')
            document.getElementById('date').classList.remove('inverted')
            document.getElementById('line').className = 'line'
            isInverted = false
        }
    }
}