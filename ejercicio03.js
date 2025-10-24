let suma = 0;

for (let i=1; i<=5; i++) {
  let nota;
  do {
    nota = parseFloat(prompt(`Ingresa la nota ${i} (0–20):`));
  } while (nota<0 || nota>20);
  suma += nota;
}

let promedio = suma/5;
alert(`El promedio es ${promedio.toFixed(2)}`);