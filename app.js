function nol(son) {
    if (son < 10) {
        son = "0" + son;
        return son;
    } else {
        return son;
    }
}
let oylar = [
    'yanvar',
    'fevral',
    'mart',
    'aprel',
    'may',
    'iyun',
    'iyul',
    'avgust',
    'sentabr',
    'oktabr',
    'noyabr',
    'dekabr'
]
let kunlar = [
    'yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba'
]
setInterval(() => {

    let date = new Date();

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let weekd = date.getDay()

    let hour = date.getHours()
    let minut = date.getMinutes()
    let second = date.getSeconds()
    let msecond = date.getMilliseconds() / 10


    document.querySelector('.sana').textContent = `${day} - ${oylar[month]}`

    document.querySelector('.hkun').textContent = `${kunlar[weekd]}`

    document.querySelector('.yil').textContent = `${year} - yil`

    document.querySelector('.mainHour').textContent = `${nol(hour)}`

    document.querySelector('.mainMinut').textContent = `${nol(minut)}`

    document.querySelector('.days').textContent = `${day} - ${month+1} - ${year}`;

    document.querySelector('.seconds').textContent = `${nol(hour)} : ${nol(minut)} : ${nol(second)} : ${Math.floor(nol(msecond))}`;

}, 10)