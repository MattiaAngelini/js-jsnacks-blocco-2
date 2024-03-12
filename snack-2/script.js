//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//Creo due prompt per inserimento parole utente;
const userWord1 = prompt("Inserisci una parola");
const userWord2 = prompt("Inserisci un'altra parola");

//Creo condizioni: se la lunghezza del testo inserito primo prompt
//è più lungo del secondo stampo primo prompt, altrimenti se viceversa stampo
//valore del secondo prompt, se infine uguali stampo stessa lunghezza ;
if (userWord1.length < userWord2.length) {
    console.log(userWord1);
    console.log(userWord2);
} else if (userWord1.length > userWord2.length) {
    console.log(userWord2);
    console.log(userWord1);
} else  {
    console.log("stessa lunghezza");
}


