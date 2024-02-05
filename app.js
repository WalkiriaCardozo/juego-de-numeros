let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsusario = document.getElementById("valorUsuario").value;

    console.log(intentos);
    if(numeroDeUsusario == numeroSecreto) {
        asignarTextoElemento("p", `Acetaste el número en ${intentos} ${(intentos === 1)? "vez" : "veces"} veces`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto
        if( numeroDeUsusario > numeroSecreto){
            asignarTextoElemento("p", "el numero es menor");
        } else {
            asignarTextoElemento("p", "el numero es mayor");  
        }
        intentos++;
        limpiarCaja();
        }
        return;
    }

function limpiarCaja() {
    document.querySelector("#valorUsuario").value= "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){

    }else{
        
    }
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto;
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);  
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indica mensaje de intervalo de nuemero 
    //generar ek numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disable","true");

}

condicionesIniciales();