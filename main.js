let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let domanda = prompt("Inserisci la tua email");

 
for (let i =0; i < mail.length; i++){
    if (domanda == mail[i]){
         var positivo = console.log("L'accesso è cosentito");
} else if (domanda != mail[i]){
    var negativo = console.log("Mi dispiace ma non puoi accedere");
}
}
