let par = 0;
let impar = 0;

for (let i=1; i<=10; i++) {
  let num;
  num = parseInt(prompt(`Ingresa el ${i}º número :`));
  if (num%2){
    par++;
  } else {
    impar++;
  }
}

alert(`Hay ${par} números pares y ${impar} números impares`)