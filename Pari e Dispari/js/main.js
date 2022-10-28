// 1. Chiedere all' utente di scegliere tra pari o dispari
// 2. Chiedere all'utente di inserire un numero tra 1 e 5
// 3. Creare una funzione per generare un numero random da 1 a 5 per la CPU
// 4. Sommare i due numeri
// 5. Creare una funzione per stabilire se la somma è pari o dispari
// 6. Dichiarare chi ha vinto in base ha chi ha indovinato o meno

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function evenOrOdd(num){
    if (num%2===0){
        return "pari"
    }else {
        return "dispari"
    }
}
// MAIN  
const userChoice=prompt("Scegli tra pari o dispari");
console.log(userChoice)
const userNumber=Number(prompt("inserisci un numero tra 1 e 5"));
console.log(userNumber)
const cpuNumber=getRndInteger(1, 5);
console.log(cpuNumber)
const sum=userNumber + cpuNumber;
console.log(sum)
console.log(evenOrOdd(sum))
if (evenOrOdd(sum)===userChoice){
    alert("Hai vinto!");
}else{
    alert("Hai perso!");
}


