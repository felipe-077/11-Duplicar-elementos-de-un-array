var numeros = [1, 2, 3, 4, 5];

var numerosDuplicados = numeros.map(function(numero) {
    return numero * 2;
});


document.getElementById("originalArray").textContent += numeros.join(", ");
document.getElementById("duplicatedArray").textContent += numerosDuplicados.join(", ");