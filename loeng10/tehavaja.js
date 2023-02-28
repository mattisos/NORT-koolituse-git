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

function muudaKasTehtudVaartusVastupidisek(index) {
    const ylesanne = ylesanded[index]
    ylesanne.kasTehtud = !ylesanne.kasTehtud
    valjastaYlesanded()
}

//parameeter - objekt ylesanne
// tagastab - teksti kujul ühe ülesande htmli
function koostaYlesandeHTML(ylesanne, index) {
    let margitud = ''
    let tehtud = ''


    if (ylesanne.kasTehtud){
        margitud = 'checked'
        tehtud ='tehtud'
    }

    const ylesanneHTML = `
    <div class="ylesanne row ${tehtud}">
        <div class"kasTehtud col-1"><input onclick="muudaKasTehtudVaartusVastupidisek(${index})" type="checkbox" name="kasTehtud" ${margitud}></div>
        <div class="kirjeldus col-5">${ylesanne.kirjeldus}</div>
        <div class="kategooria col-3">${ylesanne.kategooria}</div>
        <div class="olulisus col-2">${ylesanne.olulisus}</div>
    </div>
    `
    return ylesanneHTML
}

function valjastaYlesanded() {

    let koguValjundHTML = ''

    let index = 0
    for (let ylesanne of ylesanded) {
    koguValjundHTML += koostaYlesandeHTML(ylesanne, index)
    index++
    }
    
    document.getElementById('valjund').innerHTML = koguValjundHTML

}


function lisaUusYlesanne() {
    const ylesandeTekst = document.getElementById('ylesanne').value 
    const olulisus = document.getElementById('olulisus').value
    const ylesanne = {
        kirjeldus: ylesandeTekst,
        olulisus:3,
        kasTehtud: false,
        kategooria: 'heaolu'
    }

    ylesanded.push(ylesanne)
    valjastaYlesanded()
}

valjastaYlesanded()