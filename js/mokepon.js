// Las variables glogales de crean sin ningun valor preasignado
let ataqueJugador
let ataqueEnemigo 
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya') 
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let jugar = 1

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) { 
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        jugar = 0
        alert('Tienes que seleccionar un MOKEPON!')
       
    }
    if (jugar == 1){
        seleccionarMascotaEnemigo()
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua) 
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)
    
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego 🔥'
    seleccionarAtaqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua 🌊'
    seleccionarAtaqueEnemigo()
}

function ataquePlanta(){
    ataqueJugador = 'Planta 🌱'
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1 ){
        ataqueEnemigo = 'Fuego 🔥'
    } else if(ataqueAleatorio == 2 ){
        ataqueEnemigo = 'Agua 🌊'
    } else {
        ataqueEnemigo = 'Planta 🌱'
    }
        combate()  
}

function combate(){
    
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEmemigo = document.getElementById('vida-enemigo')

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje(', EMPATE!')
    }
    else if ((ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Planta 🌱')||(ataqueJugador == 'Agua 🌊' && ataqueEnemigo == 'Fuego 🔥')||(ataqueJugador == 'Planta 🌱' && ataqueEnemigo == 'Agua 🌊')) {
        vidaEnemigo--
        crearMensaje(', GANASTE!')
        spanVidaEmemigo.innerHTML = vidaEnemigo
    } else {
        vidaJugador--
        crearMensaje(', PERDISTE!')
        spanVidaJugador.innerHTML =  vidaJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidaJugador == 0) {
        mensajeFinal('Perdiste la batalla😢, si quieres volver a jugar da Click en reiniciar')
    } else if(vidaEnemigo == 0){
        mensajeFinal('FELICIDADES! Ganaste la batalla😄, si quieres volver a jugar da Click en reiniciar')
    }
}

function mensajeFinal(resultadoFinal){
    let seccionMensaje = document.getElementById('mensajes') 

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    seccionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true 
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.disabled = true

}

// creatElement nos permite crear cualquier tipo de texto HTML desde Javascript.
// appendChield nos permite agregar ese texto en una seccion especifica de nuestra pagina
function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes') 

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + 
    ', Tu contrincante ataco con ' + ataqueEnemigo + resultado

    seccionMensaje.appendChild(parrafo)
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)
