// CREARE CON JS UNA GRIGLIA 

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// GENERARE AL GRIGLIA E  SELEZIONO BOTTONE
const elegrid = document.querySelector(".grid");
const btnplay = document.querySelector(".play")
const easy = parseInt(100);
const medium = parseInt(81);
const hard = parseInt(49);

// BOTTONE CON FUNZIONE

btnplay.addEventListener("click",
function creategrid(){
    let diffoption = document.querySelector("#options");
    let value = diffoption.options[diffoption.selectedIndex].value;
    console.log(value);
    if(value <= 100){
        elegrid.classList.remove("gridmedium","gridhard")
        elegrid.classList.add("grideasy");
    } if(value <= 81){
        elegrid.classList.remove("grideasy","gridhard")
        elegrid.classList.add("gridmedium")
    }if (value <= 49){
        
        elegrid.classList.add("gridhard")
       
    }


    elegrid.innerHTML = ""
        for(let i = 1; i <= value; i++){
            elegrid.innerHTML += `<div class="cell"></div>`;
        } 
        
        
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
    
}
)



    
    




// function creategrid(){
    
//     elegrid.innerHTML = ""
    
//     if(diffoption === easy){
//         for(let i = 1; i <= 60; i++){
        
        
//             elegrid.innerHTML += `<div class="cell"></div>`;
//         } 
        
//         const listcells = document.querySelectorAll(`.cell`);
//         for(let i = 0; i < listcells.length ; i++){
//             const cell = listcells[i];
//             cell.addEventListener("click",
//             function colour(){
//                 this.classList.toggle("clicked");
//                 cell.innerHTML = i + 1;
//                 console.log("cella numero: " + (i + 1))
//             }
//             )
//         }
//     }  
// }











