// Las variables glogales de crean sin ningun valor preasignado
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya') 
const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonPlanta = document.getElementById('boton-planta')

const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEmemigo = document.getElementById('vida-enemigo')

const seccionMensaje = document.getElementById('resultado') 
const divAtaquesDelJugador = document.getElementById('ataques-del-jugador') 
const divAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo') 

let ataqueJugador
let ataqueEnemigo 
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascotaJugador(){
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
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    let mascotaAleatorio = aleatorio(1,3)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua) 
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

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje('EMPATE!')
    }
    else if ((ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Planta 🌱')||(ataqueJugador == 'Agua 🌊' && ataqueEnemigo == 'Fuego 🔥')||(ataqueJugador == 'Planta 🌱' && ataqueEnemigo == 'Agua 🌊')) {
        vidaEnemigo--
        crearMensaje('GANASTE!')
        spanVidaEmemigo.innerHTML = vidaEnemigo
    } else {
        vidaJugador--
        crearMensaje('PERDISTE!')
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
    sectionReiniciar.style.display = 'block'
    seccionMensaje.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonPlanta.disabled = true
    botonAgua.disabled = true 
}

// creatElement nos permite crear cualquier tipo de texto HTML desde Javascript.
// appendChield nos permite agregar ese texto en una seccion especifica de nuestra pagina
function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    divAtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    divAtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)
