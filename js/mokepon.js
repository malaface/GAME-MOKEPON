// Las variables glogales de crean sin ningun valor preasignado
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEmemigo = document.getElementById('vida-enemigo')

const seccionMensaje = document.getElementById('resultado') 
const divAtaquesDelJugador = document.getElementById('ataques-del-jugador') 
const divAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo') 
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let opcionMokepones
let ataqueJugador = []
let ataqueEnemigo = []
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let botonAtaque
let botonFuego
let botonAgua
let botonPlanta 
let ataquesMokeponEnemigo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidaJugador = 5
let vidaEnemigo = 5

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', 
'./css/Assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', 
'./css/Assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', 
'./css/Assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🌱', Id: 'boton-planta'},
)

capipepo.ataques.push(
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🔥', Id: 'boton-fuego'},
)

ratigueya.ataques.push(
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciar)

    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
           <p>${mokepon.nombre}</p>
           <img src=${mokepon.foto} alt=${mokepon.nombre}>
       </label>
        `
        contenedorTarjetas.innerHTML += opcionMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

}

function seleccionarMascotaJugador(){
    let jugar = 1

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked) { 
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        jugar = 0
        alert('Tienes que seleccionar un MOKEPON!')      
    }
    if (jugar == 1){

        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()
    }
}

function extraerAtaques(mascotaJugador) {
    let ataque
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            ataque = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataque)
}

function mostrarAtaques(ataque) {
    ataque.forEach( (ataques) => {
        botonAtaque = `
        <button id=${ataques.Id}
        class="boton-ataque BAtaque">${ataques.nombre} </button>
        `
        contenedorAtaques.innerHTML += botonAtaque

    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonPlanta = document.getElementById('boton-planta')
    botones = document.querySelectorAll('.BAtaque')
    
}

function seleccionarMascotaEnemigo(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == '🔥 ') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent == '💧 ') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'    
            } else if (e.target.textContent == '🌱 ') {
                ataqueJugador.push('Planta')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
            }
            seleccionarAtaqueEnemigo()
        })
    })
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)

    if (ataquesMokeponEnemigo[ataqueAleatorio].nombre == '🔥'){
        ataqueEnemigo.push('Fuego') 
    } else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre == '💧'){
        ataqueEnemigo.push('Agua')
    } else {
        ataqueEnemigo.push('Planta')
    }
    console.log(ataqueEnemigo)
        iniciarPelea() 
}

function iniciarPelea() {
    if (ataqueJugador.length == 5) {
        combate()
    }
}

function indexAmbosAtaques(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] == ataqueEnemigo[i]) {
            indexAmbosAtaques(i, i)
            crearMensaje('EMPATE!')
        }else if ((ataqueJugador[i] == 'Fuego' && ataqueEnemigo[i] == 'Planta') ||
        (ataqueJugador[i] == 'Planta' && ataqueEnemigo[i] == 'Agua') ||
        (ataqueJugador[i] == 'Agua' && ataqueEnemigo[i] == 'Fuego')) {
            indexAmbosAtaques(i, i)
            crearMensaje('GANASTE!') 
            victoriasJugador++
            spanVidaJugador.innerHTML = victoriasJugador
        } else if ((ataqueJugador[i] == 'Fuego' && ataqueEnemigo[i] == 'Agua') ||
        (ataqueJugador[i] == 'Planta' && ataqueEnemigo[i] == 'Fuego') ||
        (ataqueJugador[i] == 'Agua' && ataqueEnemigo[i] == 'Planta')) {
            indexAmbosAtaques(i, i)
            crearMensaje('PERDISTE!')    
            victoriasEnemigo++
            spanVidaEmemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador == victoriasEnemigo) {
        mensajeFinal('Que reñido, esto fue un Empate!')
    } else if(victoriasJugador > victoriasEnemigo){
        mensajeFinal('FELICIDADES! Ganaste la batalla😄, si quieres volver a jugar da Click en reiniciar')
    } else 
    mensajeFinal('Lo siento Perdiste!😓')
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
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    divAtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    divAtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function reiniciar(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)