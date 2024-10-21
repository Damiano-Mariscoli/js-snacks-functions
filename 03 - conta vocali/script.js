/* Scrivi una funzione che accetti una stringa e restituisca un oggetto contenente il numero di vocali e le vocali stesse sotto forma di stringa */

const word = 'ABCDEFGHIKLMNOPQRSTUVXYZ';


// Dichiara la funzione qui.
const vowelsCheck = (word) => {
    word = word.toUpperCase()
    let vowels = ''
    let vowelsNumber = 0
    for (let i = 0;  i < word.length ; i ++){
        let char = word[i]
        if(char === 'A' || char == 'E' ||char == 'I' ||char == 'O' ||char == 'U'){
            vowelsNumber++
            vowels += char
        }
    }return {vowelsNumber, vowels}

}
// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsCheck(word))

//Risultato atteso se si passa 'javascript': {vowels: 3, vowelsString: 'aai'}

