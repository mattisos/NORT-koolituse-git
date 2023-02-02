const matkad = [
    'Jalgsimatk Kõrvemaal',
    'Süstamatk Soomaal',
    'Rattamatk Pärnumaal',

]

function teeMatkaHTML(index) {
    let matk = matkad[index]
    return '<div class="rida"><img src="nool.png">' + matk + '</div>'
}

let matkadeLoeteluHTML = ''
for (let i = 0; i < matkad.length; i++) {
    matkadeLoeteluHTML += teeMatkaHTML(i)
}

document.getElementById('matkad').innerHTML = matkadeLoeteluHTML