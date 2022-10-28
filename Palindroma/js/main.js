"use strict"
// 1. chiedere all'utente di inserire una parola
// 2. invertire l'ordine delle lettere 
// 3. concatenare le lettere invertite per creare una parola
// 4. confronare le due parole per capire se sono uguali
const word = prompt("inserisci una parola");
function palindrome(wordToCheck){
    let invertedWord ="";
    for (let i = wordToCheck.length-1; i >= 0; i--) {
       invertedWord+=wordToCheck[i]; 
    }
    if (wordToCheck.toLowerCase()===invertedWord.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
if(palindrome(word)===true){
    alert("La parola che hai inserito è un palindromo!");
}else{
    alert("La parola che hai inserito non è un palindromo!");
}
