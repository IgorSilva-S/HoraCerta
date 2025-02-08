let showSeconds = localStorage.getItem('showSeconds')
let ampm = localStorage.getItem('ampm')
let showYear = localStorage.getItem('showYear')
let hideDate = localStorage.getItem('hideDate')
let gmt = localStorage.getItem('gmt')
let IANAList

if (gmt == '-03:00' || gmt == undefined) {
    IANAList = 'America%2FSao_Paulo'
} else if (gmt == '-02:00') {
    IANAList = 'America%2FNoronha'
} else if (gmt == '-04:00') {
    IANAList = 'America%2FCampo_Grande'
} else if (gmt == '-05:00') {
    IANAList = 'America%2FRio_Branco'
}

async function obterHora() {
    try {
        const response = await fetch(`https://www.timeapi.io/api/time/current/zone?timeZone=${IANAList}`);

        const data = await response.json();

        const hour = data.hour;
        let changedHour
        const minute = data.minute;
        const seconds = data.seconds;
        let noon
        if (hour >= 12) {
            noon = 'PM'
        } else {
            noon = 'AM'
        }

        const day = data.day;
        const month = data.month;
        const year = data.year;
        const DOW = data.dayOfWeek

        const extMonth = [
            null,
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ];

        const daysOfWeek = {
            "sunday": "Domingo",
            "monday": "Segunda",
            "tuesday": "Terça",
            "wednesday": "Quarta",
            "thursday": "Quinta",
            "friday": "Sexta",
            "saturday": "Sábado"
        };

        const addZero = (n) => {
            return ('0' + n).slice(-2)
        }

        if (ampm) {
            if (hour > 12) {
                changedHour = hour - 12
            } else {
                changedHour = hour
            }

            if (showSeconds) {
                document.getElementById('hour').innerHTML = `${addZero(changedHour)}:${addZero(minute)}:${addZero(seconds)}<span textType="subtitle">${noon}</span>`;
            } else {
                document.getElementById('hour').innerHTML = `${addZero(changedHour)}:${addZero(minute)}<span textType="subtitle">${noon}</span>`;
            }
        } else {
            if (showSeconds) {
                document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
            } else {
                document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}`;
            }
        }

        if (!hideDate) {
            if (showYear) {
                document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${addZero(day)} de ${extMonth[month]} de ${year}`
            } else {
                document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${addZero(day)} de ${extMonth[month]}`
            }
        }

        document.getElementById('internetAlert').style.display = 'none'
    } catch (erro) {
        console.error('Erro ao obter hora:', erro);
        document.getElementById('hour').innerHTML = '';
        document.getElementById('date').innerHTML = 'Não foi possível carregar a hora'
        document.getElementById('internetAlert').removeAttribute('style')
    }
}

setInterval(() => {
    obterHora()
}, 1000);