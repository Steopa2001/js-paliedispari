
//chiediamo all'utente pari o dispari
const userChoice = prompt(`Scegli: pari o dispari`).toLowerCase();
console.log(userChoice)

const userNumber = parseInt(prompt(`Inserisci un numero da 1 a 5`));
console.log(userNumber);

//funzione per generare un numero random da 1 a 5
function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

//genero numero per il computer 
const pcNumber = randomNumber();
console.log(`Numero pc:`, pcNumber);

//sommo i due numeri
const sum = userNumber + pcNumber;
console.log(`Somma:`,sum);

//funzione per stabilire se la somma dei due numeri è pari o dispari
function sumEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'pari'
  } else {
    return 'dispari'
  }
}



