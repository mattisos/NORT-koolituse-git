const pildiAadressid = [
    './pildid/KTM.jpg',
    './pildid/Ducati.jpg',
    './pildid/BMW.jpg',
]

function teePildiHTML(pildiAadress) {
    //return '<img src=""' + pildiAadress + '">'
            //return 
    return `
    <div class="pildiYmbris">
    <img src="${pildiAadress}">
    </div>
    `
}

let pildiGaleriiHTML = ''

for (let yksAadress of pildiAadressid) {
//for (let i = 0; i < pildiAadressid.length; i++) {
    pildiGaleriiHTML += teePildiHTML(yksAadress)
}

document.getElementById('valjund').innerHTML = pildiGaleriiHTML