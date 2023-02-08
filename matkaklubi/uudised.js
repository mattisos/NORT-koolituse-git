let uudised = [
    {
        pealkiri: 'Uudis nr 1',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        autor: 'Madis Maasikas',
        pildiAadress: './Assets/header image.png',
        kuupaev: '07.02.2023',
    },
    {
        pealkiri: 'Uudis nr 2',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        autor: 'Jüri Juurikas',
        pildiAadress: './Assets/header image.png',
        kuupaev: '07.02.2023',
    },
    {
        pealkiri: 'Uudis nr 3',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        autor: 'Lea Leevike',
        pildiAadress: './Assets/header image.png',
        kuupaev: '07.02.2023',
    },
    {
        pealkiri: 'Uudis nr 4',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        autor: 'Madis Maasikas',
        pildiAadress: './Assets/header image.png',
        kuupaev: '07.02.2023',
    },
]

function koostaUudiseHTML(uudis) {
    return `
    <div class="card">
        <img class=""card-img-top" src="${uudis.pildiAadress}">
        <div class="card-body">
            <h4>${uudis.pealkiri}</h4>
            <h6>${uudis.autor}</h6>
             <p>
                ${uudis.sisu}
             </p>
             <p class="kp">${uudis.kuupaev}</p>
            </div>
        </div>
    </div>
`
} 

let uudisteHTML = ''

for (let uudis of uudised) {
uudisteHTML += koostaUudiseHTML(uudis)
}

document.querySelector('.uudised').innerHTML = uudisteHTML