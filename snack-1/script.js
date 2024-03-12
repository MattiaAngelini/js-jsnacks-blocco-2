//L'utente inserisce un numero nel prompt,
// se è pari stampa il numero, se è dispari stampa il numero successivo

//START

//Creo prompt per inserimento numero utente;
let userNumber = parseInt(prompt("Inserisci un numero"));

//Creo condizione: se il numero dell'utente è dispari aggiungo +1 al valore
// stampato per avere numero successivo, altrimenti stamperà quello pari.
if (userNumber % 2 !== 0) {
    console.log(userNumber + 1);
} else {
    console.log(userNumber);
}