const pildid = [
    '<a href="https://img12.img-bcg.eu/auto24/560/365/164928365.jpg"><img src="./164928365.jpg" class="pilt"></a>'

]

function teePildiHTML(index) {
    let pilt = pildid[index]
    return '<div class="rida">' + pilt + '</div>'
}


let piltideLoeteluHTML = ''
for (let i = 0; i < pildid.length; i++) {
    piltideLoeteluHTML += teePildiHTML(i)
}

document.getElementById('pildid').innerHTML = piltideLoeteluHTML