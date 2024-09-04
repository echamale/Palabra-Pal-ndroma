function esPalindroma() {
    event.preventDefault();
    var palabra = document.getElementById('palabra').value;
    
    // Convertir la palabra a minúsculas y quitar los espacios que tenga la palabra o oración
    var palabra = palabra.toLowerCase().replace(/\s+/g, '');
    // Quitar los acentos para que la palabra coincida con su inversa
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    var palabraInvertida = palabra.split('').reverse().join('').toLowerCase();
    palabraInvertida = palabraInvertida.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    console.log(palabra);
    console.log(palabraInvertida);

    if (palabra === palabraInvertida) {
        window.alert('La palabra es palíndroma');
        document.getElementById('palabra').value = '';
    } else {
        window.alert('La palabra no es palíndroma');
        document.getElementById('palabra').value = '';
    }
}