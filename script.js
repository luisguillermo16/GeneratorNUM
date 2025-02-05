
const historialList = document.getElementById("historial");


let historial = [];

function Random() {
  var num1 = Math.floor(Math.random() * 80);
  var num2 = Math.floor(Math.random() * 80);
  var num3 = Math.floor(Math.random() * 80);

  
  mostrarEnHistorial(num1,num2,num3);


  numero1.innerHTML = num1;
  numero2.innerHTML = num2;
  numero3.innerHTML = num3;
}

function mostrarEnHistorial(numero1,numero2,numero3) {

  historial.push(numero1,numero2,numero3);

  
  const li = document.createElement("li");
  li.textContent = numero1 + " - " + numero2  + " - " + numero3;
  
  
  historialList.appendChild(li);
}




