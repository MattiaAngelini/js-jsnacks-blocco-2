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

        // Creo ciclo for per cercare nell'array 
        //e assegno ad una costante il valore di quell'indice.
        for (let i = 0; i < numbersContainer.length; i++) {
            const number = numbersContainer[i];

            // Verifico se il number che contiene valore indice (quindi numeri array),
            // è pari o dispari e lo aggiungo con concatenazione innerHTML al div corrispondente.
            // (aggiunge spazio per distanziare risultati in dom)
            if (number % 2 === 0) {
                boxGreen.innerHTML += number + " ";
            } else {
                boxRed.innerHTML += number + " ";
            }
        }
        


