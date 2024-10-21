/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const checkChar = (names ,  char) => {
    char = char.toUpperCase()

    for (let i = 0; i < names.length; i++){
        if (char === names[i][0].toUpperCase() ) {
            console.log(names[i])
        }
    }

}

// Invoca la funzione qui e stampa il risultato in console
checkChar(names , 'a')


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]