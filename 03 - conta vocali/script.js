/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'ABCDEFGHIKLMNOPQRSTUVXYZ';


// Dichiara la funzione qui.
const vowelsCheck = (word) => {
    word = word.toUpperCase()
    for (let i = 0;  i < word.length ; i ++){
        let vowels = ''
        let char = word[i]
        if(char == 'A' || char == 'E' ||char == 'I' ||char == 'O' ||char == 'U'){
           vowels += char
        }
        console.log(i , char , vowels )
        
    }

}
// Invoca la funzione qui e stampa il risultato in console

vowelsCheck(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)