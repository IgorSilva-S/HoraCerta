const loadingSpinner = document.getElementById("loadingInternet");
let loadingAnimInt
let isExecuting = false

const uniStart = parseInt("E100", 16);
const uniEnd = parseInt("E176", 16);
let uniActual = uniStart;

function loadingSpinnerAnim() {
    if (uniActual <= uniEnd) {
        loadingSpinner.innerHTML = `&#x${uniActual.toString(16).toUpperCase()};`;
        uniActual++;
    } else {
        uniActual = uniStart;
    }
}

async function startConnectionTest() {
    document.getElementById('loadingContainer').style.display = 'block'
    document.getElementById('connectionTest').innerText = ''
    document.getElementById('connectionTest').style.display = 'none'
    loadingAnimInt = setInterval(loadingSpinnerAnim, 33);
    isExecuting = true
    try {
        const response = await fetch('https://www.timeapi.io/api/time/current/zone?timeZone=America%2FSao_Paulo');
        if (!response.ok) {
            throw new Error(`HTTP Code: ${response.status}`)
        }
        const data = await response.json();
        document.getElementById('connectionTest').removeAttribute('style')
        document.getElementById('connectionTest').textContent = JSON.stringify(data, null, 2)
        document.getElementById('loadingContainer').style.display = 'none'
        clearInterval(loadingAnimInt)
        uniActual = uniStart
        loadingSpinner.innerHTML = '&#xE100;'
        isExecuting = false
    } catch (err) {
        document.getElementById('connectionTest').removeAttribute('style')
        let errorMsg = {
            message: 'Não foi possível pegar a hora do servidor',
            apiLink: 'https://www.timeapi.io/api/time/current/zone?timeZone=America%2FSao_Paulo',
            errorMessage: err.message
        }
        document.getElementById('connectionTest').textContent = JSON.stringify(errorMsg, null, 2)
        document.getElementById('loadingContainer').style.display = 'none'
        clearInterval(loadingAnimInt)
        uniActual = uniStart
        loadingSpinner.innerHTML = '&#xE100;'
        isExecuting = false
    }
}

document.getElementById('startConnectionTest').addEventListener('click', () => {
    if (!isExecuting) {
        startConnectionTest()
    }
})