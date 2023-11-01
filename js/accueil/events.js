function hover(){
    this.style.backgroundSize = '100%';
    this.style.fontSize = "250%";
}

function unhover(){
    this.style.backgroundSize = '95%';
    this.style.fontSize = "200%";
}

function hoverMap(){
    this.setAttribute("fill", "#ffffff");
}

function unhoverMap(){
    this.setAttribute("fill", "#002a2c");
}

var vignettes = $("div.vignette");
vignettes.mouseover(hover);
vignettes.mouseout(unhover);

var path = $("path");
path.mouseover(hoverMap);
path.mouseout(unhoverMap);
