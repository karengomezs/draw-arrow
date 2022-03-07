var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);



// var mouseXInitial;
// var mouseYInitial;

// cuadrito.addEventListener("mousedown", function (event) {
//   mouseXInitial = event.clientX;
//   mouseYInitial = event.clientY;
// });

// cuadrito.addEventListener("mouseup", function (event) {
//   var colorcito = "red";
//   var mouseXFinal = event.clientX;
//   var mouseYFinal = event.clientY;
//   newline(
//     colorcito,
//     mouseXInitial,
//     mouseYInitial,
//     mouseXFinal,
//     mouseYFinal,
//     papel
//   );
// });

document.addEventListener("keyup", drawKeyboard);
var cuadrito = document.getElementById("draw");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
newline("red", 149, 149, 151, 151, papel);

function newline(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function drawKeyboard(evento) {
  var colorcito = "blue";
  var movimiento = 10;
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
