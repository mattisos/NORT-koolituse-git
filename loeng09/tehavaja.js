const ylesanne1 = {
    kirjeldus: 'Tegevus nr 1',
    olulisus: 3,
    kasTehtud: false,
    kategooria: 'kodu',
}

const ylesanne2 = {
    kirjeldus: 'Tegevus nr 2',
    olulisus: 3,
    kasTehtud: true,
    kategooria: 'töö',
}

const ylesanne3 = {
    kirjeldus: 'Tegevus nr 3',
    olulisus: 4,
    kasTehtud: false,
    kategooria: 'trenn',
}

const ylesanded = [
    ylesanne1,
    ylesanne2,
    ylesanne3,
]

function koostaYlesandeHTML(ylesanne) {
    let margitud = ''

    if (ylesanne.kasTehtud){
        margitud = 'checked'
    }

    const ylesanneHTML = `
    <div class="ylesanne row">
        <div class"kasTehtud col-1"><input type="checkbox" name="kasTehtud" ${margitud}></div>
        <div class="kirjeldus col-5">${ylesanne.kirjeldus}</div>
        <div class="kategooria col-3">${ylesanne.kategooria}</div>
        <div class="olulisus col-2">${ylesanne.olulisus}</div>
    </div>
    `
    return ylesanneHTML
}

let koguValjundHTML = ''

for (let ylesanne of ylesanded) {
koguValjundHTML += koostaYlesandeHTML(ylesanne)
}

document.getElementById('valjund').innerHTML = koguValjundHTML