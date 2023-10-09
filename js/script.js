//                 DEBUT DATA                    //
const data = [
  {
  eventType: "Grandir",
  title: "Concert \"Ann O'Aro\"  - Saint Martin des Champs",
  description: "O’Aro, jeune réunionnaise pour qui la voix est un prolongement du corps,  a choisi le maloya (qu’elle découvre avec Danyèl Waro), cette musique jouée et dansée sur son île natale, pour exulter son blues écorché.En créole, Ann O’Aro chante, scande, murmure et surtout raconte ses blessures d’une enfance maltraitée. Cette nouvelle voix de la Réunion capable d’asséner ou de caresser avec une force d’interprétation peu commune...",
  publicationDate: "Publié le 11 juin 2023",
  dateBegin : "13 janv", yearBegin : "2021", dateEnd:"21 dec", yearEnd : "2023"
  },
  {
    eventType: "Grandir",
    title: "Jeu de piste régional et patrimonial Le Mystère Abgrall - Guerlesquin",
    description :" Mettez-vous dans la peau d'un enquêteur et partez à la découverte du patrimoine de la Petite Cité de Caractère en tentant de résoudre le Mystère Abgrall : Erwann Abgrall, un riche excentrique breton, a disparu, laissant derrière lui une fortune immense, bien que d’origine mystérieuse. Maître Braouzec, notaire à Rennes a été chargé de régler la succession du défunt.Ce n’est pas tous les jours qu’un tel dossier arrive sur son bureau !",
    publicationDate: "Publié le 12 juin 2023",
    dateBegin : "14 janv", yearBegin : "2021", dateEnd:"23 dec", yearEnd : "2023"
  },
  {
    eventType: "Grandir",
    title: "Office de Tourisme de Morlaix “Jeux de piste - 'Les aventures de Raymond Troulez' - Morlaix ",
    description :"8 Indices, 8 énigmes à travers la ville ...Pour vous aider, Raymond Troulez a laissé dans sa valise un vieux et précieux carnet. En lisant ses notes et ses croquis, vous allez sillonner le centre-ville à la recherche de 8 indices. À chacune de ces 8 énigmes, vous croiserez l’histoire d’un personnage morlaisien surgi du passé ou du futur ! Carnet : 1.50€ Conseillé à partir de 6 ans.",
    publicationDate: "Publié le 12 juin 2023",
    dateBegin : "01 oct", yearBegin : "2022", dateEnd:"30 sept", yearEnd : "2023"
  },
  {
    eventType: "Art",
    title: "Exposition photos 'Insectes' - Taulé",
    description :"En octobre, il vous reste quelques semaines pour découvrir les gros plans de photos d'insectes prises par l'association Bretagne Vivante. Cette expo dévoile un monde fascinant et caché, une biodiversité riche et discrète. Les photos sont prises principalement en Bretagne et Finistère. Pour voir ou revoir l'expo photo : mardi, mercredi, vendredi de 16 h 30 à 18 h 30, mercredi, samedi matin de 10 h à 12 h et samedi après-midi de 14 h à 16 h 30 (heures d'ouverture au public de la médiathèque).",
    publicationDate: "Publié le 12 juin 2023",
    dateBegin : "01 janv", yearBegin : "2023", dateEnd:"02 nov", yearEnd : "2023"
  },
  {
    eventType: "Art",
    title: "Exposition musée rural de Guimaëc - Guimaëc",
    description :"A partir d'un fond photographique local, de témoignages et de collectages, cette exposition éclaire, en différents tableaux, la vie rude et conviviale des agriculteurs d’autrefois, de 1914 aux années 70. Horaires d'ouverture 2023 : Du 12 avril au 30 juin : mercredi et vendredi de 14H30 à 17h30. Visite sur demande pour les groupes. Tarifs : Individuel : 3€ - Enfant 6 à 12 ans : 2 € Groupe + 10 pers : 2,50 € Groupe enfants : 1,50 €",
    publicationDate: "Publié le 12 juin 2023",
    dateBegin : "03 mars", yearBegin : "2023", dateEnd:"30 sept", yearEnd : "2023"
  },
];
//                   FIN DATA                   //



// Permet de trier en fonction du bouton selectionné
$(document).ready(function () {
    var $list = $(".box .rectangle").hide(),
      $curr;
  
    $(".button")
      .on("click", function () {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $curr = $list.filter("." + this.id).hide();
        $curr.slice(0, 4).show(400);
        $list.not($curr).hide(300);
      })
      .filter(".active")
      .click();
  
    $("#LoadMore").on("click", function () {
      $curr.filter(":hidden").slice(0, 4).slideDown("slow");
    });
});



$(document).ready(function(){
  // Au chargement de la page, activer le bouton "All"
  $("#all").addClass("active");

  // Afficher les rectangles indépendamment de leur type
  $(".rectangle").slice(0, 5).fadeIn();

  $(".loadmore").click(function(event){
      event.preventDefault();  // Empêcher le comportement par défaut du bouton
      $(".rectangle").slice(0, 12).fadeIn();
      $(this).fadeOut();
  });
});


const liItem = document.querySelectorAll('.button');  // Sélectionne les boutons correctement

liItem.forEach(li => {
  li.onclick = function(event) {
      event.preventDefault();  // Empêcher le comportement par défaut du lien
      // Supprimer la classe "active" de tous les boutons
      liItem.forEach(li => {
          li.classList.remove("active");
      });
      // Ajouter la classe "active" au bouton actuel
      this.classList.add("active");
  };
});

// Fonction qui permet d'afficher la date des events
function afficherDateContent() {
  const dateContentElements = document.querySelectorAll('.date-content');

  data.forEach((event, index) => {
      const dateContent = `<h1>${event.dateBegin} <span>${event.yearBegin} </span> <br> ═ <br> ${event.dateEnd} <span> ${event.yearEnd} </span> </h1>`;
      dateContentElements[index].innerHTML = dateContent;
  });
}

//Affiche toutes les infos dans les rectangles
function afficherAllContent() {
  afficherDateContent();
  const infoContents = document.getElementsByClassName('info-content');

  for (let i = 0; i < infoContents.length; i++) {
      const infoContent = infoContents[i];
      const currentData = data[i];

      const eventTypeElement = document.createElement('p');
      eventTypeElement.textContent = currentData.eventType;

      const titleElement = document.createElement('h1');
      titleElement.textContent = currentData.title;

      const descriptionElement = document.createElement('p');
      const italicElement = document.createElement('i');
      italicElement.textContent = currentData.description;
      descriptionElement.appendChild(italicElement);

      const hrElement = document.createElement('hr');

      const publicationDateElement = document.createElement('p');
      const spanElement = document.createElement('span');
      spanElement.textContent = currentData.publicationDate;
      publicationDateElement.appendChild(spanElement);

      const buttonElement = document.createElement('button');
      buttonElement.textContent = 'En savoir plus';

      infoContent.appendChild(eventTypeElement);
      infoContent.appendChild(titleElement);
      infoContent.appendChild(descriptionElement);
      infoContent.appendChild(hrElement);
      infoContent.appendChild(publicationDateElement);
      infoContent.appendChild(buttonElement);
  }
}

afficherAllContent();









