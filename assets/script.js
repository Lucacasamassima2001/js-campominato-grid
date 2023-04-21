// CREARE CON JS UNA GRIGLIA 

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// GENERARE AL GRIGLIA
const elegrid = document.querySelector(".grid");
for(let i = 1; i <= 100; i++){
    elegrid.innerHTML += `<div class="cell"></div>`;
}


// APPLICARE EVENT LISTENER A OGNI CELL
const listcells = document.querySelectorAll(`.cell`);

for(let i = 0; i < listcells.length ; i++){
    const cell = listcells[i];
    cell.addEventListener("click",
    function colour(){
        this.classList.toggle("clicked");
        cell.innerHTML = i + 1;
        console.log("cella numero: " + (i + 1))
    }
    )
}




