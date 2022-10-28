// Las variables glogales de crean sin ningun valor preasignado
let ataqueJugador
let ataqueEnemigo 

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

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
    ataqueJugador = 'Fuego'
    alert(ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    alert(ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function ataquePlanta(){
    ataqueJugador = 'Planta'
    alert(ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1 ){
        ataqueEnemigo = 'Fuego'
        alert('Tu enemigo usa un ataque tipo '+ ataqueEnemigo)
    } else if(ataqueAleatorio == 2 ){
        ataqueEnemigo = 'Agua'
        alert('Tu enemigo usa un ataque tipo '+ ataqueEnemigo)
    } else {
        ataqueEnemigo = 'Planta'
        alert('Tu enemigo usa un ataque tipo '+ ataqueEnemigo)
    }
}

window.addEventListener('load', iniciarJuego)
