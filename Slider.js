var index = 1;
var Box1 = document.getElementById("Box1");
var Box2 = document.getElementById("Box2");
var ButtonL = document.getElementById("Left");
var ButtonR = document.getElementById("Right");
ButtonL.onclick = function ClickedL(){
    index = 1;
    if(index == 1){
        Box2.style = "Display: none;";
        Box1.style = "Display: initial;";
        console.log(index);
    }
    
    
}

ButtonR.onclick = function ClickedR(){
    index = 2;
    if(index == 2){
        Box1.style = "Display: none;";
        Box2.style = "Display: initial;";
        console.log(index);
    }
    
    
}