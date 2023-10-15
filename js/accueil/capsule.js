var leftButton = document.getElementById("left-button");
var rightButton = document.getElementById("right-button");
var videos = document.getElementsByClassName("video");
var idVideos = ["lleft-video", "left-video", "active-video", "right-video", "rright-video"];
var buttonVideos = document.getElementsByClassName("play-button");



function removeEvent(){
    var playButton = document.createElement('div');
    playButton.className = 'play-button';
    playButton.innerHTML = "<i class='fa-solid fa-play'></i>"
    playButton.addEventListener('mouseover', growButton);
    playButton.addEventListener('mouseout', reduceButton);

    var active = document.getElementById('active-video');
    active.innerHTML = "";
    active.appendChild(playButton);
    active.removeEventListener('click', playVideo);

    document.getElementById('left-video').removeEventListener('click', turnLeft);
    document.getElementById('right-video').removeEventListener('click', turnRight);
}

function addEvent(){
    document.getElementById('active-video').addEventListener('click', playVideo);
    document.getElementById('left-video').addEventListener('click', turnLeft);
    document.getElementById('right-video').addEventListener('click', turnRight);
}

function turnRight(){
    removeEvent();
    var i = 0;
    for (;i<5;++i){
        var j = idVideos.indexOf(videos[i].id)-1;
        videos[i].id = idVideos[(j < 0) ? 4 : j];
    }
    addEvent();
}

function turnLeft(){
    removeEvent();
    var i = 0;
    for (;i<5;++i){
        var j = idVideos.indexOf(videos[i].id)+1;
        videos[i].id = idVideos[(j > 4) ? 0 : j];
    }
    addEvent();
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
    this.innerHTML = "<iframe src='https://www.youtube.com/embed/" + this.getAttribute('value') + "?&autoplay=1' frameborder='0' allowfullscreen></iframe>";
}

addEvent();
leftButton.addEventListener('click', turnLeft);
rightButton.addEventListener('click', turnRight);

for (var i = 0;i<buttonVideos.length;++i){
    buttonVideos[i].addEventListener('mouseover', growButton);
    buttonVideos[i].addEventListener('mouseout', reduceButton);
    videos[i].addEventListener('mouseover', dropShadow);
    videos[i].addEventListener('mouseout', getShadow);
}

