/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const ora = new Date().getHours()
console.log(ora)

const saluto = (name) => {
    if (ora <= 13 && ora > 4){
        return `Buongiorno ${name}`

    }else if(ora > 17 ){
        return `Buonasera ${name}`
        
    }else {
        return `Buon pomeriggio ${name}`
    }
       
    
        
}   
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(saluto(name))