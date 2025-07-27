let numeroSecreto = 0;
let intentos = 0;
let listataNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p' , `Hacertastes el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p' , 'El número secreto es menor');
        }else{
            asignarTextoElemento('p' , 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
} 

function generarNumeroSecreto() {
    let numeroGenerado=  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listataNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if(listataNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , 'Ya se sortearon todos los números posibles');
    }else{
        
        // si el numero generado esta incluido en la lista
        if(listataNumerosSorteados.includes(numeroGenerado)){
            //recursividd
            return generarNumeroSecreto();
        }else{
            listataNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1' , 'Juego del número secreto!');
    asignarTextoElemento('P' , `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número de intentos 
    condicionesIniciales();
    // //Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true' )
}

condicionesIniciales();




