function hover(){
    this.style.backgroundSize = '100%';
    this.style.fontSize = "250%";
}

function unhover(){
    this.style.backgroundSize = '95%';
    this.style.fontSize = "200%";
}

var vignettes = document.getElementsByClassName('vignette');

for (var i = 0;i<vignettes.length;++i){
    vignettes[i].addEventListener('mouseover', hover);
    vignettes[i].addEventListener('mouseout', unhover);
}