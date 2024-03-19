//Solicitamos al DOM que seleccione el formulario del login
//Esto lo usamos para mostrar los inputs al entrar y ocultarlos al salir mediante un evento


const inputs = document.getElementById ('formulario')

inputs.addEventListener ('mouseenter', ()=>{
    inputs.innerHTML=
    `<input placeholder='Ingrese su usuario'></input>
    <input placeholder='Ingrese su contraseña'></input>
    <button id='botonLogin'>Iniciar Sesion</button>`
})

inputs.addEventListener ('mouseleave', ()=>{
    inputs.innerHTML= "<h3 id='subtitulo1'>Bienvenido a nuestra Tienda de bebidas </h3>"
})


//Para el login vamos a igualar las credenciales guardadas al local storage

const user = {nombre: 'fulanito', password: 12345};



// Funcion para recorrer el array

function buscarArray (arr, filtro){
    const encontrado = arr.find((el)=>{
        return el.nombre.includes(filtro)
    })
    return encontrado;
}

//seleccionamos el boton de agregar al carrito y el ingreso
const btnCarrito = document.querySelector('#btnCarrito'),
inputIngreso = document.querySelector('#ingreso')






//Array con los productos que el usuario puede seleccionar

const bebidas = [
    {id: 1, nombre: 'Cerveza patagonia', precio: 5000, img: "./img/logoPatagonia.jpg"},
    {id: 2, nombre: 'Cerveza quilmes', precio: 4000, img: "./img/logoQuilmes.png"},
    {id: 3, nombre: 'cerveza andes', precio: 4500, img: "./img/logoAndes.png"},
    {id: 4, nombre: 'vino catena', precio: 10000, img: "./img/logoCatena.jpg"},
    {id: 5, nombre: 'vino rutini', precio: 7000, img: "./img/logoRutini.jpg"},
    {id: 6, nombre: 'vino cobos', precio: 15000, img: "./img/logoCobos.png"}
]

//Funcion para crear un elemento del carrito 


function crearHtml (arr){
    contenedor.innerHTML =''
    let html;
    for (const el of arr) {
        html = `<div class ="card">
                    <img src=" ${el.img}" alt="${el.nombre}">
                    <hr>
                    <h3>${el.nombre}</h3>
                    <p>Precio: $${el.precio} </p>
                        <div class ="card-action">
                            <button id="btn btn-success" id="${el.id}">Agregar</button>
                        </div>
                    </div>`;

        
        contenedor.innerHTML = contenedor.innerHTML + html;
                    
    }
}

//Array para el carrito en si

const carrito = []

//Agregamos el evento al Boton de compra y al input para el carrito
//Estos elementos son incluidos al local storage y a JSONded

btnCarrito.addEventListener('click', ()=>{
    const encontrado = buscarArray (bebidas, inputIngreso.value)
    console.log(encontrado);
    carrito.push(encontrado)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
console.log(carritoLS);
})

//Agregamos un evento nuevamente para mostrar en forma simple los elementos del carrito

btnMostrar.addEventListener('click', ()=>{
    crearHtml(carrito)
})