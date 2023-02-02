let varv = prompt ('Arva ära minu lemmik värv')
while ( varv !== 'Roheline' ) {
    varv = prompt ('Vale! Arva uuesti, mis on minu lemmik värv')
}

document.getElementById('valjund').innerHTML = '<h2> Jah, minu lemmik värv on roheline!</h2>'