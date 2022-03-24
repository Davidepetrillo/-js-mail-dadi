const sceltaGiocatore = Math.floor(Math.random()*6 +1);
const sceltaGiocatoreNumerica = parseInt(sceltaGiocatore);
const sceltaComputer = Math.floor(Math.random()*6 +1);
const sceltaComputerNumerica = parseInt(sceltaComputer);

document.getElementById("scelta1").innerHTML = `Il giocatore ha lanciato il numero ${sceltaGiocatoreNumerica}`;
document.getElementById("scelta2").innerHTML = `Il computer ha lanciato il numero ${sceltaComputerNumerica}`;

if (sceltaGiocatoreNumerica > sceltaComputerNumerica) {
    document.getElementById("risultato").innerHTML = "Il giocatore ha vinto";
} else if (sceltaGiocatoreNumerica < sceltaComputerNumerica) {
    document.getElementById("risultato").innerHTML = "Il Computer ha vinto";
} else {
    document.getElementById("risultato").innerHTML = "Questo round è finito in pareggio";
}

