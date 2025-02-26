let showSeconds = localStorage.getItem('showSeconds')
let ampm = localStorage.getItem('ampm')
let stackHour = localStorage.getItem('stackHour')
if (stackHour) {
    document.body.classList.add('stackHour')
} else {
    document.body.classList.remove('stackHour')
}

let showYear = localStorage.getItem('showYear')
let hideWeekDay = localStorage.getItem('hideWeekDay')
let hideDayMonth = localStorage.getItem('hideDayMonth')
let shortDate = localStorage.getItem('shortDate')
let usDate = localStorage.getItem('usDate')

let gmt = localStorage.getItem('gmt')
let IANAList
let usingLocal = false
let triesToUseLocal = 0

if (gmt == '-03:00' || gmt == undefined) {
    IANAList = 'America%2FSao_Paulo'
} else if (gmt == '-02:00') {
    IANAList = 'America%2FNoronha'
} else if (gmt == '-04:00') {
    IANAList = 'America%2FCampo_Grande'
} else if (gmt == '-05:00') {
    IANAList = 'America%2FRio_Branco'
}

let offlineMode = localStorage.getItem('offlineMode')
let cannotUseLocal = localStorage.getItem('cannotUseLocal')

async function getTimeAndDate() {
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
        let shortYear = year.toString()
        shortYear = shortYear.slice(2)
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

        const shortDaysOfWeek = {
            "sunday": "Dom",
            "monday": "Seg",
            "tuesday": "Ter",
            "wednesday": "Qua",
            "thursday": "Qui",
            "friday": "Sex",
            "saturday": "Sáb"
        };

        const addZero = (n) => {
            return ('0' + n).slice(-2)
        }

        //Time
        if (ampm) {
            if (hour > 12) {
                changedHour = hour - 12
            } else {
                changedHour = hour
            }

            if (stackHour) {
                if (showSeconds) {
                    document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}:</span>${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
                } else {
                    document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}</span><span textType="subtitle">${noon}</span></div>`;
                }
            } else {
                if (showSeconds) {
                    document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}:${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
                } else {
                    document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}<span textType="subtitle">${noon}</span></div>`;
                }
            }
        } else {
            if (stackHour) {
                if (showSeconds) {
                    document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span><div><span>${addZero(minute)}</span>:${addZero(seconds)}</div>`;
                } else {
                    document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span>${addZero(minute)}`;
                }
            } else {
                if (showSeconds) {
                    document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
                } else {
                    document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}`;
                }
            }
        }

        //Date
        if (usDate) {
            if (shortDate) {
                if (hideWeekDay) {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = ''
                        } else {
                            document.getElementById('date').innerHTML = `${shortYear}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}`
                        } else {
                            document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}/${shortYear}`
                        }
                    }
                } else {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}`
                        } else {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${shortYear}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${addZero(month)}/${addZero(day)}`
                        } else {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${addZero(month)}/${addZero(day)}/${shortYear}`
                        }
                    }
                }

            } else {
                if (hideWeekDay) {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = ''
                        } else {
                            document.getElementById('date').innerHTML = `${year}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)}`
                        } else {
                            document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)} de ${year}`
                        }
                    }
                } else {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}`
                        } else {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ano de ${year}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${extMonth[month]}, dia ${addZero(day)}`
                        } else {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${extMonth[month]}, dia ${addZero(day)} de ${year}`
                        }
                    }
                }

            }
        } else {
            if (shortDate) {
                if (hideWeekDay) {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = ''
                        } else {
                            document.getElementById('date').innerHTML = `${shortYear}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}`
                        } else {
                            document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}/${shortYear}`
                        }
                    }
                } else {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}`
                        } else {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${shortYear}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${addZero(day)}/${addZero(month)}`
                        } else {
                            document.getElementById('date').innerHTML = `${shortDaysOfWeek[DOW.toLowerCase()]}, ${addZero(day)}/${addZero(month)}/${shortYear}`
                        }
                    }
                }

            } else {
                if (hideWeekDay) {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = ''
                        } else {
                            document.getElementById('date').innerHTML = `${year}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]}`
                        } else {
                            document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]} de ${year}`
                        }
                    }
                } else {
                    if (hideDayMonth) {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}`
                        } else {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${year}`
                        }
                    } else {
                        if (!showYear) {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${addZero(day)} de ${extMonth[month]}`
                        } else {
                            document.getElementById('date').innerHTML = `${daysOfWeek[DOW.toLowerCase()]}, ${addZero(day)} de ${extMonth[month]} de ${year}`
                        }
                    }
                }

            }
        }

        triesToUseLocal = 0

        if (usingLocal) {
            usingLocal = false
            let notNotify = localStorage.getItem('notNotify')
            if (!notNotify) {
                ipcRenderer.send('alertOnline')
            }
        }

        document.getElementById('hour').classList.remove('loading')
        document.getElementById('date').classList.remove('loading')

    } catch (err) {
        if (!cannotUseLocal) {
            if (!usingLocal && triesToUseLocal >= 3) {
                usingLocal = true
                let notNotify = localStorage.getItem('notNotify')
                if (!notNotify) {
                    ipcRenderer.send('alertLocal')
                }
            } else if (!usingLocal && triesToUseLocal < 3) {
                triesToUseLocal++
            }

            let d = new Date
            let hour = d.getHours()
            let minute = d.getMinutes()
            let seconds = d.getSeconds()

            let day = d.getDate()
            let month = d.getMonth() + 1
            let year = d.getFullYear()
            let changedHour
            let noon
            if (hour >= 12) {
                noon = 'PM'
            } else {
                noon = 'AM'
            }
            let weekDay = d.getDay()

            const addZero = (n) => {
                return ('0' + n).slice(-2)
            }

            console.error('Erro ao obter hora:', err);
            console.warn(`Erro registado em ${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`)

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

            let daysOfWeek, shortDaysOfWeek
            switch (weekDay) {
                case 0:
                    daysOfWeek = "Domingo";
                    shortDaysOfWeek = "Dom";
                    break;
                case 1:
                    daysOfWeek = "Segunda";
                    shortDaysOfWeek = "Seg";
                    break;
                case 2:
                    daysOfWeek = "Terça";
                    shortDaysOfWeek = "Ter";
                    break;
                case 3:
                    daysOfWeek = "Quarta";
                    shortDaysOfWeek = "Qua";
                    break;
                case 4:
                    daysOfWeek = "Quinta";
                    shortDaysOfWeek = "Qui";
                    break;
                case 5:
                    daysOfWeek = "Sexta";
                    shortDaysOfWeek = "Sex";
                    break;
                case 6:
                    daysOfWeek = "Sábado";
                    shortDaysOfWeek = "Sáb";
                    break;
                default:
                    daysOfWeek = "Dia inválido";
                    shortDaysOfWeek = "D.I."
            }


            let shortYear = year.toString()
            shortYear = shortYear.slice(2)

            //Time
            if (ampm) {
                if (hour > 12) {
                    changedHour = hour - 12
                } else {
                    changedHour = hour
                }

                if (stackHour) {
                    if (showSeconds) {
                        document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}:</span>${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
                    } else {
                        document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}</span><span textType="subtitle">${noon}</span></div>`;
                    }
                } else {
                    if (showSeconds) {
                        document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}:${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
                    } else {
                        document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}<span textType="subtitle">${noon}</span></div>`;
                    }
                }
            } else {
                if (stackHour) {
                    if (showSeconds) {
                        document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span><div><span>${addZero(minute)}</span>:${addZero(seconds)}</div>`;
                    } else {
                        document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span>${addZero(minute)}`;
                    }
                } else {
                    if (showSeconds) {
                        document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
                    } else {
                        document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}`;
                    }
                }
            }

            //Date
            if (usDate) {
                if (shortDate) {
                    if (hideWeekDay) {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = ''
                            } else {
                                document.getElementById('date').innerHTML = `${shortYear}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}`
                            } else {
                                document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}/${shortYear}`
                            }
                        }
                    } else {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}`
                            } else {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${shortYear}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(month)}/${addZero(day)}`
                            } else {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(month)}/${addZero(day)}/${shortYear}`
                            }
                        }
                    }

                } else {
                    if (hideWeekDay) {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = ''
                            } else {
                                document.getElementById('date').innerHTML = `${year}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)}`
                            } else {
                                document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)} de ${year}`
                            }
                        }
                    } else {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${daysOfWeek}`
                            } else {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ano de ${year}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ${extMonth[month]}, dia ${addZero(day)}`
                            } else {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ${extMonth[month]}, dia ${addZero(day)} de ${year}`
                            }
                        }
                    }

                }
            } else {
                if (shortDate) {
                    if (hideWeekDay) {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = ''
                            } else {
                                document.getElementById('date').innerHTML = `${shortYear}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}`
                            } else {
                                document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}/${shortYear}`
                            }
                        }
                    } else {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}`
                            } else {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${shortYear}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(day)}/${addZero(month)}`
                            } else {
                                document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(day)}/${addZero(month)}/${shortYear}`
                            }
                        }
                    }

                } else {
                    if (hideWeekDay) {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = ''
                            } else {
                                document.getElementById('date').innerHTML = `${year}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]}`
                            } else {
                                document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]} de ${year}`
                            }
                        }
                    } else {
                        if (hideDayMonth) {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${daysOfWeek}`
                            } else {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ${year}`
                            }
                        } else {
                            if (!showYear) {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ${addZero(day)} de ${extMonth[month]}`
                            } else {
                                document.getElementById('date').innerHTML = `${daysOfWeek}, ${addZero(day)} de ${extMonth[month]} de ${year}`
                            }
                        }
                    }

                }
            }


            document.getElementById('hour').classList.remove('loading')
            document.getElementById('date').classList.remove('loading')
        } else {
            if (!usingLocal) {
                usingLocal = true
                let notNotify = localStorage.getItem('notNotify')
                if (!notNotify) {
                    ipcRenderer.send('alertNoTime')
                }
            }
            document.getElementById('hour').classList.add('loading')
            document.getElementById('date').classList.add('loading')
            document.getElementById('hour').innerHTML = ''
            document.getElementById('date').innerHTML = ''
        }
    }
}

function justOfflineDate() {
    let d = new Date
    let hour = d.getHours()
    let minute = d.getMinutes()
    let seconds = d.getSeconds()

    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let changedHour
    let noon
    if (hour >= 12) {
        noon = 'PM'
    } else {
        noon = 'AM'
    }
    let weekDay = d.getDay()

    const addZero = (n) => {
        return ('0' + n).slice(-2)
    }

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

    let daysOfWeek, shortDaysOfWeek
    switch (weekDay) {
        case 0:
            daysOfWeek = "Domingo";
            shortDaysOfWeek = "Dom";
            break;
        case 1:
            daysOfWeek = "Segunda";
            shortDaysOfWeek = "Seg";
            break;
        case 2:
            daysOfWeek = "Terça";
            shortDaysOfWeek = "Ter";
            break;
        case 3:
            daysOfWeek = "Quarta";
            shortDaysOfWeek = "Qua";
            break;
        case 4:
            daysOfWeek = "Quinta";
            shortDaysOfWeek = "Qui";
            break;
        case 5:
            daysOfWeek = "Sexta";
            shortDaysOfWeek = "Sex";
            break;
        case 6:
            daysOfWeek = "Sábado";
            shortDaysOfWeek = "Sáb";
            break;
        default:
            daysOfWeek = "Dia inválido";
            shortDaysOfWeek = "D.I."
    }


    let shortYear = year.toString()
    shortYear = shortYear.slice(2)

    //Time
    if (ampm) {
        if (hour > 12) {
            changedHour = hour - 12
        } else {
            changedHour = hour
        }

        if (stackHour) {
            if (showSeconds) {
                document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}:</span>${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
            } else {
                document.getElementById('hour').innerHTML = `<span>${addZero(changedHour)}</span><div><span>${addZero(minute)}</span><span textType="subtitle">${noon}</span></div>`;
            }
        } else {
            if (showSeconds) {
                document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}:${addZero(seconds)}<span textType="subtitle">${noon}</span></div>`;
            } else {
                document.getElementById('hour').innerHTML = `<div>${addZero(changedHour)}:${addZero(minute)}<span textType="subtitle">${noon}</span></div>`;
            }
        }
    } else {
        if (stackHour) {
            if (showSeconds) {
                document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span><div><span>${addZero(minute)}</span>:${addZero(seconds)}</div>`;
            } else {
                document.getElementById('hour').innerHTML = `<span>${addZero(hour)}</span>${addZero(minute)}`;
            }
        } else {
            if (showSeconds) {
                document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`;
            } else {
                document.getElementById('hour').innerHTML = `${addZero(hour)}:${addZero(minute)}`;
            }
        }
    }

    //Date
    if (usDate) {
        if (shortDate) {
            if (hideWeekDay) {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = ''
                    } else {
                        document.getElementById('date').innerHTML = `${shortYear}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}`
                    } else {
                        document.getElementById('date').innerHTML = `${addZero(month)}/${addZero(day)}/${shortYear}`
                    }
                }
            } else {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}`
                    } else {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${shortYear}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(month)}/${addZero(day)}`
                    } else {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(month)}/${addZero(day)}/${shortYear}`
                    }
                }
            }

        } else {
            if (hideWeekDay) {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = ''
                    } else {
                        document.getElementById('date').innerHTML = `${year}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)}`
                    } else {
                        document.getElementById('date').innerHTML = `${extMonth[month]}, dia ${addZero(day)} de ${year}`
                    }
                }
            } else {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${daysOfWeek}`
                    } else {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ano de ${year}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ${extMonth[month]}, dia ${addZero(day)}`
                    } else {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ${extMonth[month]}, dia ${addZero(day)} de ${year}`
                    }
                }
            }

        }
    } else {
        if (shortDate) {
            if (hideWeekDay) {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = ''
                    } else {
                        document.getElementById('date').innerHTML = `${shortYear}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}`
                    } else {
                        document.getElementById('date').innerHTML = `${addZero(day)}/${addZero(month)}/${shortYear}`
                    }
                }
            } else {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}`
                    } else {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${shortYear}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(day)}/${addZero(month)}`
                    } else {
                        document.getElementById('date').innerHTML = `${shortDaysOfWeek}, ${addZero(day)}/${addZero(month)}/${shortYear}`
                    }
                }
            }

        } else {
            if (hideWeekDay) {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = ''
                    } else {
                        document.getElementById('date').innerHTML = `${year}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]}`
                    } else {
                        document.getElementById('date').innerHTML = `${addZero(day)} de ${extMonth[month]} de ${year}`
                    }
                }
            } else {
                if (hideDayMonth) {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${daysOfWeek}`
                    } else {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ${year}`
                    }
                } else {
                    if (!showYear) {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ${addZero(day)} de ${extMonth[month]}`
                    } else {
                        document.getElementById('date').innerHTML = `${daysOfWeek}, ${addZero(day)} de ${extMonth[month]} de ${year}`
                    }
                }
            }

        }
    }

    document.getElementById('hour').classList.remove('loading')
    document.getElementById('date').classList.remove('loading')
}

function getMainSettings() {
    showSeconds = localStorage.getItem('showSeconds')
    ampm = localStorage.getItem('ampm')
    stackHour = localStorage.getItem('stackHour')
    if (stackHour) {
        document.body.classList.add('stackHour')
    } else {
        document.body.classList.remove('stackHour')
    }

    showYear = localStorage.getItem('showYear')
    hideWeekDay = localStorage.getItem('hideWeekDay')
    hideDayMonth = localStorage.getItem('hideDayMonth')
    shortDate = localStorage.getItem('shortDate')
    usDate = localStorage.getItem('usDate')

    gmt = localStorage.getItem('gmt')
    if (gmt == '-03:00' || gmt == undefined) {
        IANAList = 'America%2FSao_Paulo'
    } else if (gmt == '-02:00') {
        IANAList = 'America%2FNoronha'
    } else if (gmt == '-04:00') {
        IANAList = 'America%2FCampo_Grande'
    } else if (gmt == '-05:00') {
        IANAList = 'America%2FRio_Branco'
    }

    offlineMode = localStorage.getItem('offlineMode')
    cannotUseLocal = localStorage.getItem('cannotUseLocal')
}

setInterval(() => {
    if (!offlineMode) {
        getTimeAndDate()
    } else {
        justOfflineDate()
    }
    getMainSettings()
}, 1000);