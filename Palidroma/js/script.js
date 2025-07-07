
// chiediamo all'utente di inserire una parola
const userWord = prompt(`Inserisci una parola:`);

//funzione per verificare se la parola è palindroma
function isPalindroma(userInput) {

  //converto la parola tutta in minuscolo per evitare problemi di maiuscole
  userInput = userInput.toLowerCase();

  //inverto la parola 
  const userInputInverted = userInput.split("").reverse().join("");

  // verifico se la parola è uguale alla sua versione invertita
  return userInput === userInputInverted;
}

