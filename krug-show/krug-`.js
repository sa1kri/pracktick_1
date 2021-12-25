function clickKrug () {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

   console.log("#clickKrug", red);
   
   


   document.getElementById("krug").style.height = "rgb(" + red + ", " + red + ")";
   document.getElementById("krug").style.width = "rgb(" + red + ", " + red + ")";
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}