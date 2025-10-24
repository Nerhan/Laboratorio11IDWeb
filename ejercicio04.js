let edad = parseInt(prompt("Ingrese su edad"));
if (edad>=0 && edad<12) {
    alert("Niño");
} else if (edad>=12 && edad<=17) {
    alert("Adolescente");
} else if (edad>=18 && edad<=59) {
    alert("Adulto");
} else if (edad>=60) {
    alert("Adulto mayor");
} else {
    alert("Ingrese una edad correcta");
}