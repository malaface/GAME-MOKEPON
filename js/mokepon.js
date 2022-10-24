function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya') 

    if (inputHipodoge.checked) {
        alert('SELECCIONASTE UN HIPODOGE')
    } else if(inputCapipepo.checked) {
        alert('SELECCIONASTE UN CAPIPEPO')
    } else if(inputRatigueya.checked) {
        alert('SELECCIONASTE UN RATIGUEYA')
    } else {
        alert('Tienes que seleccionar un MOKEPON!')
    }
}


window.addEventListener('load', iniciarJuego)
