let nimi = prompt ("Mis on sinu nimi?")

let valjundElement = document.getElementById ('valjund')
valjundElement.innerHTML = "Tähed sinu nimes: <br>"

for (let i=nimi.length-1; i >= 0; i--){
    valjundElement.innerHTML += nimi[i] + '<br>'
}

valjundElement.innerHTML += '<br>'

for (let i=0; i < nimi.length; i++) {
    valjundElement.innerHTML += nimi[i] + '<br>'
}

let taht = document.getElementById('valjund').innerHTML
document.getElementById('valjund').innerHTML = taht.replace ('õ','*')


