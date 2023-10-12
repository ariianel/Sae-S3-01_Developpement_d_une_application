var leftButton = document.getElementById("left-button");
var rightButton = document.getElementById("right-button");
var videos = document.getElementsByClassName("video");
var idVideos = ["lleft-video", "left-video", "active-video", "right-video", "rright-video"];
var buttonVideos = document.getElementsByClassName("play-button");

rightButton.onclick = function () {
    var i = 0;
    for (;i<5;++i){
        var j = idVideos.indexOf(videos[i].id)-1;
        videos[i].id = idVideos[(j < 0) ? 4 : j];
    }
}

leftButton.onclick = function () {
    var i = 0;
    for (;i<5;++i){
        var j = idVideos.indexOf(videos[i].id)+1;
        videos[i].id = idVideos[(j > 4) ? 0 : j];
    }
}

function growButton(){
    this.style.width='60px';
    this.style.height='60px';
    this.style.fontSize = '150%';
}

function reduceButton(){
    this.style.width='50px';
    this.style.height='50px';
    this.style.fontSize = '125%';
}

function dropShadow(){
    this.style.boxShadow = 'none';
}

function getShadow(){
    this.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.25)';
}

function playVideo(){
    this.removeChild(this.getElementsByClassName('play-button')[0]);
    this.style.backgroundImage = 'none';
    this.innerHTML = "<iframe src='https://www.youtube.com/embed/wutdecDrFEs?si=PSXxeuENyXdZsuDF' title='YouTube video player' autoplay='true' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>";
}

for (var i = 0;i<buttonVideos.length;++i){
    buttonVideos[i].addEventListener('mouseover', growButton);
    buttonVideos[i].addEventListener('mouseout', reduceButton);
    videos[i].addEventListener('mouseover', dropShadow);
    videos[i].addEventListener('mouseout', getShadow);
    videos[i].addEventListener('click', playVideo);
}