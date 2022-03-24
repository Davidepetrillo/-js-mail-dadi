let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let domanda = prompt("Inserisci la tua email");

let x = false;

for (let i =0; i < mail.length; i++){
    if (domanda == mail[i]){
    x = true; }
}
if (x == true) {
    document.getElementById("output").innerHTML = "L'accesso è cosentito";
} else if(x == false) {
    let y = prompt("Mi dispiace ma non puoi accedere. Vorresti aggiungere la tua email all'interno del nostro database?");
    if (y == "si") {
        mail.push(domanda);
        document.getElementById("output").innerHTML = `Questo è l'elenco delle mail inserite nel nostro database fino a questo momento :
         ${mail}
         Grazie per essere entrato a far parte del nostro mondo.`;
    } else if (y == "no") {
        document.getElementById("output").innerHTML = "Grazie per aver usufruito dei nostri servizi.";
    } else {
        document.getElementById("output").innerHTML = "Mi dispiace ma la sua risposta non può essere interpretata. La preghiamo di rispondere 'si' oppure 'no'";
    }
} 
/*
if (y == "si") {
    mail.push(domanda);
    document.getElementById("output").innerHTML = domanda;
} else if (y == "no") {
    document.getElementById("output").innerHTML = "Grazie per aver usufruito dei nostri servizi.";
}
*/



