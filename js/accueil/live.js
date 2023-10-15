function afficherDateEnTempsReel() {
    var day = document.getElementById('day');
    var hour = document.getElementById('hour');
    
    function mettreAJourDate() {
      var date = new Date();
      //var options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      //var dateFormatee = date.toLocaleDateString('fr-FR', options);
      
      //dateElement.textContent = dateFormatee;

      day.textContent = date.toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'});
      hour.textContent = date.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
    }
    
    // Mettez à jour la date initiale
    mettreAJourDate();
    
    // Mettez à jour la date chaque seconde
    setInterval(mettreAJourDate, 1000);
}
  
afficherDateEnTempsReel();