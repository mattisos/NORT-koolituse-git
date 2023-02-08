let matkad = [
    {
        nimi: 'Rattamatk Pärnumaal',
        kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        pildiAadress: './Assets/header image.png',
    },
    {
        nimi: 'Kanuumatk Taevaskojas',
        kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        pildiAadress: './Assets/header image.png',
    },
    {
        nimi: 'Räätsamatk Kõrvemaal',
        kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita maxime quas animi porro, dicta asperiores enim nihil fugit, rerum quaerat. Reiciendis quae aut, nisi illo inventore incidunt et non!',
        pildiAadress: './Assets/header image.png',
    }
]

function koostaMatkaHTML(matk) {
        return `
        <div class="card">
            <img class=""card-img-top" src="${matk.pildiAadress}">
            <div class="card-body">
                <h4>${matk.nimi}</h4>
                 <p>
                    ${matk.kirjeldus}
                 </p>
                </div>
            </div>
    `
} 

let matkadeHTML = ''

for (let matk of matkad) {
    matkadeHTML += koostaMatkaHTML(matk)
}

document.querySelector('.matkad').innerHTML = matkadeHTML