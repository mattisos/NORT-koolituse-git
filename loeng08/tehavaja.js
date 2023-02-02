const ylesanded = [
    'Ülesanne 1',
    'Ülesanne 2',
    'Ülesanne 2.1',
    'Ülesanne 3',
    'Ülesanne 4',
]

function valjastaYlesanne(index) {
    return '<li>' + ylesanded[index] + '</li>'
}

function lisaYlesanne() {
    //Lugeda sisestusvälja väärtust
    let uusYlesanne = document.getElementById('uusYlesanne').value
    //Lisa loetud üledanne massiivi
    ylesanded.push(uusYlesanne)
    // Loo uuesti kogu väljund
    valjastaYlesanded()
    // Tühjenda sisestuskast
    document.getElementById('uusYlesanne').value = ''
}

function valjastaYlesanded() {
    let valjundElement = document.getElementById('valjund')
    let valjundHTML = ''

    valjundHTML += '<ol>'

    for (let i=0; i < ylesanded.length; i++) {
        valjundHTML += valjastaYlesanne(i)
    }

    valjundHTML += '</ol>'

    valjundElement.innerHTML = valjundHTML
}

valjastaYlesanded()
