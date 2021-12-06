//Diseño Modular

// resolver (4-2)+(5-3)-(4*2)


function sumar(){
    return (4-2);
}

function restar(){
    return (5-3);
}

function multiplicar(){
    return (4*2);
}

var resultado = `El resultado es ${sumar() + restar() - multiplicar()}`

console.log(resultado)