var forward1 = 0, forward2 = 0;

function abc(event) {
    console.log(event.keyCode)

    var character = document.getElementById("character");
    var characterWidth = character.offsetWidth;
    var screenWidth = window.innerWidth;

    if(event.keyCode === 39){ //move right right arrow
        if (forward1 + characterWidth +10 <=screenWidth){
            forward1 += 10;
            character.style.left =forward1 + "px";
        }
    }
    if(event.keyCode === 37){//move left left arrow
        if (forward1 -10 >= 0){
            forward1 -= 10;
            character.style.left =forward1 + "px";
        }
    }
if(event.keyCode === 40){
    character.style.width = " 300px"
    character.style.height = "500px"
    character.src = "./images/bob-wilson-realbout2-flip-kick-special.gif"
}
if(event.keyCode === 38 ){
    character.style.width = "300px"
    character.style.height = "500px"
    character.src ="./images/goe-hurricane.gif"
}
}
window.onkeyup = abc;


function xyz(event) {
    console.log(event.keyCode)

    var character1 = document.getElementById("character1")
    var character1Width = character1.offsetWidth;
    var screenWidth = window.innerWidth;

    if(event.keyCode === 39){ //move right right arrow
        if (forward2 + character1Width +10 <= screenWidth){
            forward2 += 10;
            character1.style.right =forward2 + "px";
        }
    }
    if(event.keyCode === 37){//move left left arrow
        if (forward2 -10 >= 0){
            forward2 -= 10;
            character1.style.right =forward2 + "px";

        }
    }
if(event.keyCode === 40){ //move down
    character1.style.width = " 300px"
    character1.style.height = "600px"
    character1.src = "./images/bob-wilson-realbout2-flip-kick-special.gif"
}
if(event.keyCode === 38 ){ //move up
    character1.style.width = "300px"
    character1.style.height = "500px"
    character1.src ="./images/goe-hurricane.gif"
}
}
window.onkeydown = xyz;