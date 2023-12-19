
/* 

L'utente clicca un bottone che genera una griglia di gioco.
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const buttonStart = document.getElementById ('start');
console.log(buttonStart);

const container = document.querySelector ('.container');
console.log(container);

buttonStart.addEventListener ("click", function (){

    let grid = document.createElement('div');
    grid.classList.add('grid-numbers');
    container.append(grid);
    console.log(grid);

    for ( i = 1; i <= 100 ; i++ ) {

        const cell = document.createElement ('div');
        cell.classList.add('cell-style');
        cell.innerHTML= i;
        grid.append(cell);
        console.log(cell);

        buttonStart.classList.add('button-start-display');

        cell.addEventListener ("click", function (){
            cell.classList.toggle('cell-color');
        })

        console.log(cell[i]);
    }

})