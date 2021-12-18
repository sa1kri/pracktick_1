function clickCube(){
    var red = getRandomIng (255);
    var green = getRandomIng (255);
    var blue = getRandomIng (255);

    console.log("#clickCube", red, green, blue);
    
    document.getElementById("cube").style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
}

function getRandomIng(max) {
    return Math.floor(Math.random() * max)
} 