//             DEBUT CODE NAVBAR                //

var header = document.getElementById('main-header');
var inputSearchBar = document.getElementById('searchbar');
var searchBar = document.getElementsByClassName('mox')[0];

searchBar.onmouseout = function(){
  if (document.activeElement != inputSearchBar){
    unploySearchBar();
  }
};


function deploySearchBar(){
  searchBar.style.width = '20%';
}

function unploySearchBar(){
  searchBar.style.width = '0';
}

searchBar.addEventListener('mouseover', deploySearchBar);
inputSearchBar.addEventListener('focus', deploySearchBar);
inputSearchBar.addEventListener('focusout', unploySearchBar);

// Permet d'ouvrir/fermer navbar de l'hamburger
$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});


// Quand on descend sur la page
// Modifie le background de la navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
//              FIN CODE NAVBAR                 //