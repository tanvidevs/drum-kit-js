var soundButtons =document.querySelectorAll(".drum").length;

for(var i=0; i<soundButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       

        this.style.color="white";
        var audio= new Audio("./sound.mp3");
audio.play();

var audio= new Audio("./sound.mp3");
audio.pause();
    });
}
