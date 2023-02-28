const url = 'http://localhost:8080';
const app = document.querySelector('#app');

async function kysiMatkad() {
  const response = await fetch(url);
  const data = await response.json();

let matkadHTML = '';
  
  matkadHTML += `<div class="matkad">`
  for (let i = 0; i < data.matkad.length; i++) {
    matkadHTML += `<div class="matk">
      <span class="pealkiri">${data.matkad[i].pealkiri}</span>
      <span class="kestvus">Kestvus ${data.matkad[i].kestvus}</span>
      <span class"pikkus">Pikkus ${data.matkad[i].pikkus}</span>
      <span class="kirjeldus">Kirjeldus ${data.matkad[i].kirjeldus}</span>
    </div>`;
  }
  matkadHTML += `</div>`

  app.innerHTML = matkadHTML;
}

kysiMatkad();