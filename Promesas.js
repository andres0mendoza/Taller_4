//Promesas

let miPromesa = new Promise( (resolver, rechazar) => {

    let expresion = true;
   // let expresion = false;

    if(expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');
    
});

miPromesa.then(
    valor => console.log(valor),  //Primer argumento de funcion (resolver)
    error => console.log(error)   //Segundo argumento de funcion (rechazar)
);


miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error))

