let showSeconds = localStorage.getItem('showSeconds')
let showYear = localStorage.getItem('showYear')
let hideDate = localStorage.getItem('hideDate')

async function obterHora() {
    try {
        const response = await fetch('https://www.timeapi.io/api/time/current/zone?timeZone=America%2FSao_Paulo');

        const data = await response.json();

        const hour = data.hour;
        const minute = data.minute;
        const seconds = data.seconds;

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

        if (showSeconds) {
            document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
        } else {
            document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}`;
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