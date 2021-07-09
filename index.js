const button = document.getElementById ('change-color');
const body = document.body;

function randomColor (){

    return Math.floor (Math.random()*256);
}

button.addEventListener ('click', change);

function change(){
    const color1 = randomColor();
    const color2 = randomColor(); 
    const color3 = randomColor();


    const  colorChange= `rgb(${color1},${color2},${color3} )`;

    body.style.backgroundColor = colorChange;
    
   


}



