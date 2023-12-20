
/* 

L'utente clicca un bottone che genera una griglia di gioco.
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/
const buttonStart = document.getElementById('start');
const container = document.querySelector('.container');

buttonStart.addEventListener("click", function () {
    let grid = document.createElement('div');
    grid.classList.add('grid-numbers');
    container.appendChild(grid);

    buttonStart.classList.add('button-start-display');

    const bombs = generateBombs();
    const maxClicks = 100 - bombs.length;
    let clicks = 0;

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell-style');
        cell.innerHTML = i;
        grid.appendChild(cell);

        cell.addEventListener("click", function () {
            if (bombs.includes(i)) {
                cell.classList.add('cell-bomb');
                endGame(false);
            } else {
                cell.classList.add('cell-color');
                clicks++;
                if (clicks === maxClicks) {
                    endGame(true);
                }
            }
        });
    }

    function generateBombs() {
        const bombs = [];
        while (bombs.length < 16) {
            const bomb = Math.floor(Math.random() * 100) + 1;
            if (!bombs.includes(bomb)) {
                bombs.push(bomb);
            }
        }
        return bombs;
    }

    function endGame(isWin) {
        const message = isWin ? "Hai vinto!" : "Hai perso!";
        alert(`${message}\nPunteggio: ${isWin ? "Massimo" : "Sconfitta"}`);
        buttonStart.classList.add('button-start-display');
    }
});
