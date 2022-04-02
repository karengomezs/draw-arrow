const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

console.log(teclas);


document.addEventListener("keyup", drawKeyboard);
const cuadrito = document.getElementById("draw");
const papel = cuadrito.getContext("2d");


const width = cuadrito.getClientRects()[0].width;
const height = cuadrito.getClientRects()[0].height;
const centerX = Math.floor(width / 4);
const centerY = Math.floor(height / 4);
const canvasPosition = cuadrito.getClientRects()[0]
    //let x = Math.floor(width / 2);
    //let y = Math.floor(width / 2);

let x = 145;
let y = 71;


console.log(centerX, centerY, height, cuadrito.getClientRects());
newline("red", 145, 70, 146, 71, papel);


function newline(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawKeyboard(evento) {
    const colorcito = "blue";
    const movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            newline(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;

        case teclas.DOWN:
            newline(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;

        case teclas.LEFT:
            newline(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;

        case teclas.RIGHT:
            newline(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;

        default:
            console.log("otra letra");
            break;
    }
}




// const mouseXInitial;
// const mouseYInitial;

// cuadrito.addEventListener("mousedown", function (event) {
//   mouseXInitial = event.clientX;
//   mouseYInitial = event.clientY;
// });

// cuadrito.addEventListener("mouseup", function (event) {
//   const colorcito = "red";
//   const mouseXFinal = event.clientX;
//   const mouseYFinal = event.clientY;
//   newline(
//     colorcito,
//     mouseXInitial,
//     mouseYInitial,
//     mouseXFinal,
//     mouseYFinal,
//     papel
//   );
// });