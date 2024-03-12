//- Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
//e in verde i numeri pari.

//START

//inizio creando array di numeri
const numbersContainer = [34,23,1,43,22,44,21,54,43];

// creo due variabili per selezionare e poi assegnare style ai due div.
const boxRed = document.querySelector("#box-red");
boxRed.style.color = ("red");

const boxGreen = document.querySelector("#box-green");
boxGreen.style.color = ("green")




