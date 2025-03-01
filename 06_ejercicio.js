/Un programa que pida al usuario usar una letra del alfabeto y determine si es una vocal o una consonante./


let letra = prompt("Introduce una letra del alfabeto:");

if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {

    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(letra + " es una vocal.");
    } else {
        console.log(letra + " es una consonante.");
    }
} else {
    console.log("Por favor, ingresa una sola letra válida.");
}