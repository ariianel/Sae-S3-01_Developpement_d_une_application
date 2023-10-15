//              DEBUT CODE ACCES                //
$(document).ready(function () {
  var buttons = $('.btn-carre');

  function moveButtons() {
    buttons.each(function (index) {
      var button = $(this);
      var initialMargin = button.css('margin-left');
      var initialOpacity = 0; // Opacité initiale à 0
      button.css('margin-left', '25%');
      button.css('opacity', initialOpacity); // Opacité initiale à 0
      
      setTimeout(function () {
        button.animate({ 'margin-left': initialMargin, 'opacity': 1 }, 1000); // Animation pour revenir à la position initiale et devenir visible
      }, index * 400);
    });
  }

  moveButtons();
});

function afficherDateEnTempsReel() {
  var dateElement = document.getElementById("date");
  
  function mettreAJourDate() {
    var dateActuelle = new Date();
    var options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);
    
    dateElement.textContent = dateFormatee;
  }
  
  // Mettez à jour la date initiale
  mettreAJourDate();
  
  // Mettez à jour la date chaque seconde
  setInterval(mettreAJourDate, 1000);
}

afficherDateEnTempsReel();
