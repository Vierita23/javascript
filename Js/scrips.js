/*Programa para calcular el promedio de 5 notas y determinar el estado del estudiante*/

let notas = [];
let suma = 0;
let cantidadNotas = 5;

/*Ingresar las 5 notas*/
for (let i = 1; i <= cantidadNotas; i++) {
  let nota = parseFloat(prompt(`Ingrese la nota ${i} (de 0 a 10):`));

  // Validar que la nota esté en el rango correcto
  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Error: La nota debe estar entre 0 y 10.");
    i--; // Repetir esta iteración
  } else {
    notas.push(nota);
    suma += nota;
  }
}

/*Calcular el promedio*/
let promedio = suma / cantidadNotas;

/*Verificar el estado*/
if (promedio >= 7) {
  alert(`Promedio: ${promedio.toFixed(2)}. ¡Felicidades! Pasaste el semestre.`);
} else if (promedio >= 3.5) {
  alert(`Promedio: ${promedio.toFixed(2)}. Estás en supletorio.`);
} else {
  alert(`Promedio: ${promedio.toFixed(2)}. Lo siento perdiste el semestre.`);
}
