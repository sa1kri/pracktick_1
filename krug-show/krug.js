function clickKrug () {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

   console.log("#clickKrug", red, green, blue);
   
   


   document.getElementById("krug").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}