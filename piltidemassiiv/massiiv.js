const pildid = [
    '<a href="https://img12.img-bcg.eu/auto24/560/365/164928365.jpg">BMW</a>',
    '<a href="https://img12.img-bcg.eu/auto24/560/978/141876978.jpg">DUCATI</a>',
    'KTM',
    '<a href="https://img12.img-bcg.eu/auto24/560/365/164928365.jpg">BMW<img src="/piltidemassiiv/164928365.jpg"></a>'

]

function teeMatkaHTML(index) {
    let pilt = pildid[index]
    return '<div class="rida">' + pilt + '</div>'
}


let piltideLoeteluHTML = ''
for (let i = 0; i < pildid.length; i++) {
    piltideLoeteluHTML += teeMatkaHTML(i)
}

document.getElementById('pildid').innerHTML = piltideLoeteluHTML