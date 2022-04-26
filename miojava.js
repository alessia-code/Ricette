var valoreSesso=null;
//inizio funzioni per la gestione dei 2 slider di altezza e peso 
function funzioneSliderA(){
    document.getElementById("demoA").innerHTML = document.getElementById("rangeAltezza").value;
}
function funzioneSliderP(){
    document.getElementById("demoP").innerHTML = document.getElementById("rangePeso").value;
}
//fine funzioni per la gestione dei 2 slider di altezza e peso 


function validaForm() {
    if (document.registr.nome.value=="" || !isNaN(document.registr.nome.value) ) {
    alert("Inserire nome corretto");
    return false;
    }
    if (document.registr.cognome.value=="" || !isNaN(document.registr.cognome.value) ) {
        alert("Inserire cognome corretto");
        return false;
    }
    if ((document.registr.email.value=="")) {
    alert("Inserire l’email");
    return false;
    }
    if ((document.registr.emailconferma.value=="") ) {
        alert("Inserire l’email di conferma ");
        return false;
    }
    if ( (document.registr.emailconferma.value != document.registr.email.value )) {
        alert("L’email di conferma è diversa da quella inserita ");
        return false;
    }
    if ((document.registr.password.value=="")) {
        alert("Inserire la password");
        return false;
    }  
    if ((document.registr.passwordconferma.value=="")  ) {
        alert("Inserire la password di conferma");
        return false;
    }
    if ( (document.registr.passwordconferma.value != document.registr.password.value )) {
        alert("la password di conferma è diversa da quella inserita ");
        return false;
    }
    if (document.registr.date.getFullYear==null ){
        alert("Selezionare una data");
        return false;
    }
    if( document.registr.date.getFullYear>2004 )  {
        alert("Per iscriversi al nostro sito è necessario avere almeno 18 anni");
        return false;
    }
    if (valoreSesso==null) {
        alert("Selezionare il sesso");
        return false;
    }
    if (document.registr.attivita.value=="0") {
        alert("Selezionare un'attivita");
        return false;
    } 
    if (!(document.registr.nutrizionista.checked)) {
        alert("spunta");
        return false;
    }
    alert("Dati inseriti correttamente");
    return true;
    }

