function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    if (document.getElementById('hipodoge').checked)
    alert("SELECCIONASTE UN HIPODOGE")
    else if(document.getElementById('capipepo').checked)
    alert("SELECCIONASTE UN CAPIPEPO")
    else if(document.getElementById('ratigueya').checked)
    alert("SELECCIONASTE UN RATIGUEYA")
}


window.addEventListener('load', iniciarJuego)
