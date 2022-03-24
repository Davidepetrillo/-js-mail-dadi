let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let domanda = prompt("Inserisci la tua email");

// creo una variabile che mi permette di uscire dal ciclo false con un valore dalla quale poter valutare il mio if successivamente basato soltanto su 2 possibilità : true or false
let emailInserita = false;

for (let i =0; i < mail.length; i++){
    if (domanda == mail[i]){
    emailInserita = true; }
}
// nel caso quindi la mia mail corrisponda ad una di quelle all'interno dell'array la mia variabile diventa true e el caso è true l'accesso è consentit0
if (emailInserita == true) {
    document.getElementById("output").innerHTML = "L'accesso è cosentito";
} // nel caso invece non diventi true e resti false (quindi la mia mail non corrisponde a quelle inserite già nell'array)
else if(emailInserita == false) {
    // chiedo all'utente se vuole inserire l'email nel database
    let emailSbagliata = prompt("Mi dispiace ma non puoi accedere. Vorresti aggiungere la tua email all'interno del nostro database?");
    if (emailSbagliata == "si") { 
        //  nel caso dice si lo aggiungo all'array e gli mostro il risultato
        mail.push(domanda);
        document.getElementById("output").innerHTML = `Questo è l'elenco delle mail inserite nel nostro database fino a questo momento :
         ${mail}
         Grazie per essere entrato a far parte del nostro mondo.`;
    } else if (emailSbagliata == "no") { 
        // nel caso dice no lo ringrazio comunque
        document.getElementById("output").innerHTML = "Grazie per aver usufruito dei nostri servizi.";
    } else {
        document.getElementById("output").innerHTML = "Mi dispiace ma la sua risposta non può essere interpretata. La preghiamo di rispondere 'si' oppure 'no'";
    }
} 




