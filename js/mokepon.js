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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

const anchoMaximoMapa = 550

let mokepones = []
let opcionMokepones
let ataqueJugador = []
let ataqueEnemigo = []
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis 
let inputPydos 
let inputTucapalma 
let mascotaJugador
let mascotaAleatorio
let mascotaJugadorObjeto
let mascotaEnemigoObjeto
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
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './css/Assets/mokemap.png'
let alturaQueBuscamos
let anchoMapa = window.innerWidth - 40

if (anchoMapa > anchoMaximoMapa) {
    anchoMapa = anchoMaximoMapa - 20
}

alturaQueBuscamos = anchoMapa * 600 / 800

mapa.width = anchoMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, tipo,
         x = aleatorio(0,mapa.width-25),
          y = aleatorio(0, mapa.height-25)) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = x
        this.y = y
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintaMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x, 
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', 
'./css/Assets/mokepons_mokepon_hipodoge_attack.png', 5, 'Agua', 10, 10)

let capipepo = new Mokepon('Capipepo', 
'./css/Assets/mokepons_mokepon_capipepo_attack.png', 5, 'Planta', 10, 10)

let ratigueya = new Mokepon('Ratigueya', 
'./css/Assets/mokepons_mokepon_ratigueya_attack.png', 5, 'Fuego', 10, 10)

let langostelvis = new Mokepon('Langostelvis', 
'./css/Assets/mokepons_mokepon_langostelvis_attack.png', 5, 'Fuego', 10, 10)

let pydos = new Mokepon('Pydos', 
'./css/Assets/mokepons_mokepon_pydos_attack.png', 5, 'Agua', 10, 10)

let tucapalma = new Mokepon('Tucapalma', 
'./css/Assets/mokepons_mokepon_tucapalma_attack.png', 5, 'Planta', 10, 10)

let hipodogeEnemigo = new Mokepon('Hipodoge', 
'./css/Assets/mokepons_mokepon_hipodoge_attack.png', 5, 'Agua')

let capipepoEnemigo = new Mokepon('Capipepo', 
'./css/Assets/mokepons_mokepon_capipepo_attack.png', 5, 'Planta')

let ratigueyaEnemigo = new Mokepon('Ratigueya', 
'./css/Assets/mokepons_mokepon_ratigueya_attack.png', 5, 'Fuego')

let langostelvisEnemigo = new Mokepon('Langostelvis', 
'./css/Assets/mokepons_mokepon_langostelvis_attack.png', 5, 'Fuego')

let pydosEnemigo = new Mokepon('Pydos', 
'./css/Assets/mokepons_mokepon_pydos_attack.png', 5, 'Agua')

let tucapalmaEnemigo = new Mokepon('Tucapalma', 
'./css/Assets/mokepons_mokepon_tucapalma_attack.png', 5, 'Planta')

hipodoge.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🌱', Id: 'boton-planta'},
)

hipodogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
)

langostelvis.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
)

langostelvisEnemigo.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
    { nombre: '🔥', Id: 'boton-fuego'},
)

pydos.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
)

pydosEnemigo.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
)

tucapalma.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
)

tucapalmaEnemigo.ataques.push(
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '💧', Id: 'boton-agua'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
    { nombre: '🌱', Id: 'boton-planta'},
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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
        inputLangostelvis = document.getElementById('Langostelvis')
        inputPydos = document.getElementById('Pydos')
        inputTucapalma = document.getElementById('Tucapalma')
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
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else {
        jugar = 0
        alert('Tienes que seleccionar un MOKEPON!')      
    }
    if (jugar == 1){

        extraerAtaques(mascotaJugador)
        sectionVerMapa.style.display = 'flex'
        iniciarMapa()

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
    botones = document.querySelectorAll('.BAtaque')
    
}

function seleccionarMascotaEnemigo(enemigo){
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques

    if ((mascotaJugador.tipo == 'Fuego' && mascotaAleatorio.tipo == 'Planta') || 
    (mascotaJugador.tipo == 'Agua' && mascotaAleatorio.tipo == 'Fuego') || 
    (mascotaJugador.tipo == 'Planta' && mascotaAleatorio.tipo == 'Agua')) {
        victoriasJugador++
    } else
        victoriasEnemigo++  

    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == '🔥 ') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent == '💧 ') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true    
            } else if (e.target.textContent == '🌱 ') {
                ataqueJugador.push('Planta')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled = true
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

function pintarCanvas() {

    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x +
     mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y +
     mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
        mascotaJugadorObjeto.pintaMokepon()
        capipepoEnemigo.pintaMokepon()
        hipodogeEnemigo.pintaMokepon()
        ratigueyaEnemigo.pintaMokepon()
        langostelvisEnemigo.pintaMokepon()
        pydosEnemigo.pintaMokepon()
        tucapalmaEnemigo.pintaMokepon()
        if (mascotaJugadorObjeto !== 0 || mascotaJugadorObjeto !== 0) {
            revisarColision(hipodogeEnemigo)
            revisarColision(capipepoEnemigo)
            revisarColision(ratigueyaEnemigo)
            revisarColision(langostelvisEnemigo)
            revisarColision(pydosEnemigo)
            revisarColision(tucapalmaEnemigo)
        }
}

function iniciarMapa() {
    mapa.width = anchoMapa
    mapa.height = alturaQueBuscamos
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval( pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoTecla)
    window.addEventListener('keyup', detenerMovimimiento)

    sectionSeleccionarMascota.style.display = 'none'
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
        return mokepones[i]
        }
    }
}

function moverMokeponRight() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = 5
}

function moverMokeponLeft() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = -5
}

function moverMokeponUp() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadY = -5
}

function moverMokeponDown() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimimiento() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverMokeponUp()
            break;
        case 'ArrowDown' :
            moverMokeponDown()
            break;
        case 'ArrowRight' :
            moverMokeponRight()
            break;
        case 'ArrowLeft' :
            moverMokeponLeft()
            break
        default:
            break;
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x    

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }

    detenerMovimimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener('load', iniciarJuego)