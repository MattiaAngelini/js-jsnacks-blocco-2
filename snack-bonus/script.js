//- Chiedi un numero di 4 cifre all’utente 
//e calcola la somma di tutte le cifre che compongono il numero.

//Creo prompt per inserimento numero a 4 cifre
const userNumber = prompt("Inserisci un numero a 4 cifre");

//Creo una variabile somma con valore 0,
//per poterla sommare ai numeri dell'indice
let sum = 0;

//creo ciclo for per stampare ogni singolo numero inserito.
for(let i = 0; i < userNumber.length; i++) {
    //sommo variabile sum (valore zero) con i valori degli indici ricavati
    //nel ciclo for (per farlo li converto da stringa a numero). 
    sum += parseInt(userNumber[i]);
} 

console.log(sum)



