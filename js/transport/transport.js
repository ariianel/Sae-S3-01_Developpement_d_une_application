//              DEBUT CODE ACCES                //
$(document).ready(function () {
    // Sélectionnez les boutons que vous souhaitez animer
    var buttons = $('.btn-carre');
    var buttonContainer = $('.btn-group-vertical');
    var containerWidth = buttonContainer.width();
  
    // Créez un observateur Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Si le bouton est dans la fenêtre d'affichage
          var button = entry.target;
          var initialMargin = $(button).css('margin-left');
          var initialOpacity = 0;
          
          // Appliquez une animation pour augmenter progressivement l'opacité
          $(button).css('margin-left', '25%');
          $(button).animate({ 'margin-left': initialMargin, 'opacity': 1 }, 1000);
  
          // Arrêtez d'observer ce bouton pour éviter de répéter l'animation
          observer.unobserve(button);
        }
      });
    }, {
      threshold: 0.8 // Déclenchez l'animation lorsque la moitié de l'élément est visible
    });
  
    // Ajoutez chaque bouton à l'observateur
    buttons.each(function (index) {
      observer.observe(this);
    });
  
    // Fixez la largeur du conteneur pour éviter les changements pendant l'animation
    buttonContainer.css('width', containerWidth + 'px');
  });
  
  
  
  $(document).ready(function () {
    // Sélectionnez les éléments d'image et de texte à l'intérieur de .image-avec-texte
    var elementsToAnimate = $('.image-avec-texte img, .image-avec-texte p');
  
    // Réglez l'opacité initiale des éléments à 0 pour les rendre invisibles
    elementsToAnimate.css('opacity', '0');
  
    // Fonction pour animer les éléments lorsque la page est défilée
    function animateElements() {
        elementsToAnimate.each(function () {
            var element = $(this);
            var delay = element.index() * 300; // Espacement entre les animations
  
            setTimeout(function () {
                // Utilisez jQuery pour animer l'opacité de 0 à 1 pour les rendre progressivement visibles
                element.animate({ 'opacity': '1' }, 1000); // Ajustez la durée de l'animation ici
            }, delay);
        });
    }
  
    // Appelez la fonction pour lancer l'animation lorsque la page est défilée
    animateElements(); // Lancez l'animation au chargement de la page
  });
  
  
  
  
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