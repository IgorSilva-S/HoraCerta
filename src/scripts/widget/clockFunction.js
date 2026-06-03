const timeZone = {
    "-12": "Etc%2FGMT%2B12",
    "-11": "Etc%2FGMT%2B11",
    "-10": "Etc%2FGMT%2B10",
    "-9": "Etc%2FGMT%2B9",
    "-8": "Etc%2FGMT%2B8",
    "-7": "Etc%2FGMT%2B7",
    "-6": "Etc%2FGMT%2B6",
    "-5": "Etc%2FGMT%2B5",
    "-4": "Etc%2FGMT%2B4",
    "-3": "Etc%2FGMT%2B3",
    "-2": "Etc%2FGMT%2B2",
    "-1": "Etc%2FGMT%2B1",
    "0": "Etc%2FGMT",
    "1": "Etc%2FGMT-1",
    "2": "Etc%2FGMT-2",
    "3": "Etc%2FGMT-3",
    "4": "Etc%2FGMT-4",
    "5": "Etc%2FGMT-5",
    "6": "Etc%2FGMT-6",
    "7": "Etc%2FGMT-7",
    "8": "Etc%2FGMT-8",
    "9": "Etc%2FGMT-9",
    "10": "Etc%2FGMT-10",
    "11": "Etc%2FGMT-11",
    "12": "Etc%2FGMT-12"
};

let gmt = localStorage.getItem('gmt') || "-3"

let IANAList = timeZone[gmt]

let apiLink = `https://www.timeapi.io/api/time/current/zone?timeZone=${IANAList}`

let webUpdate, webData, date, localStart, apiDate, lastResync, loading

let useLine = false

async function fetchTime() {
    loading = true
    webUpdate = await fetch(apiLink)
    webData = await webUpdate.json()
    apiDate = Date.parse(webData.dateTime)
    localStart = performance.now()
    if (webUpdate.ok) {
        lastResync = 0
        loading = false
    }

    const AZ = (n) => {
        return ('0' + n).slice(-2)
    }

    function updateTime() {
        if (!webData) return
        lastResync++
        const timeNow = performance.now() - localStart
        date = apiDate + timeNow
    }

    updateTime()

    const weekExt = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ]

    function writeWatch() {
        let wDate = new Date(date)
        document.getElementById('watchHour').innerText = `${AZ(wDate.getHours())}:${AZ(wDate.getMinutes())}`
        document.getElementById('watchDay').innerText = `${weekExt[wDate.getDay()]}, ${AZ(wDate.getDate())} de janeiro de ${wDate.getFullYear()}`

        if (!loading) {
            document.getElementById('watchHour').classList.remove('loading')
            document.getElementById('watchDay').classList.remove('loading')
        }
    }

    setInterval(() => {
        updateTime()
        writeWatch()
        if (!useLine) {
            document.getElementById('lineSeparator').style.display = 'none'
        } else {
            document.getElementById('lineSeparator').removeAttribute('style')
        }
    }, 1000);
}

fetchTime()