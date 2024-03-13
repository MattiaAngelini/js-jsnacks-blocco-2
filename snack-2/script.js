//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//Creo due prompt per inserimento parole utente;
const userWord1 = prompt("Inserisci una parola");
const userWord2 = prompt("Inserisci un'altra parola");

//Creo condizioni: se la lunghezza del testo inserito primo prompt
//è più lungo del secondo stampo primo prompt, altrimenti se viceversa stampo
//valore del secondo prompt, se infine uguali stampo stessa lunghezza ;

let userMessage;

if (userWord1.length < userWord2.length) {
    userMessage = userWord1 + ' ' + userWord2;
} else if (userWord1.length > userWord2.length) {
    userMessage = userWord2 + ' ' + userWord1;
} else {
    userMessage = "stessa lunghezza";
}

console.log(userMessage);