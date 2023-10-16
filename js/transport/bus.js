$(document).ready(function() {
    var $bus = $('#bus');
    var animationActivee = false; // Pour vérifier si l'animation a déjà été activée
  
    function animerBus() {
      // Animer le déplacement du bus de sa position actuelle à gauche
      $bus.animate({ 'margin-left': '52%' }, 4000, 'linear', function() {
        // Animation terminée, réinitialisez la position du bus
        $bus.css('margin-left', '52%');
        // Réactivez l'animation lorsque le bus réapparaît sur la page
        animationActivee = false;
      });
    }
  
    // Fonction pour vérifier si le bus est visible sur la page
    function estVisible() {
      var windowHeight = $(window).height();
      var scrollHeight = $(window).scrollTop();
      var elementTop = $bus.offset().top;
      var elementBottom = elementTop + $bus.outerHeight();
  
      return elementBottom >= scrollHeight && elementTop <= scrollHeight + windowHeight;
    }
  
    // Fonction de gestion du scroll
    $(window).scroll(function() {
      if (estVisible() && !animationActivee) {
        animationActivee = true; // Marquer l'animation comme activée
        animerBus(); // Activer l'animation du bus
      }
    });
  });