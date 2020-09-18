// console.log("hola mundo desde una pagina externa");
// objeto document es la representacion de el DOM
//DOM
//metodo querySelector para busquedas - solo retorna un elemnto
//el metodo recorera el DOM y lo retorna para su uso
/*
const c = console.log;
let container = document.querySelector(".container");
let links = document.querySelectorAll("a");

c(links);
*/
// let celdas = document.querySelectorAll("td");

// celdas.forEach((td) => {
//     td.addEventListener("click", () =>  console.log(this))
// })

let cerrar = document.querySelectorAll(".close")
// console.log(cerrar)
cerrar.forEach(function(close) {
    close.addEventListener('click', function(ev) {
        // ev.preventDefault();
        let content = document.querySelector(".content")
        //quitar las animaciones 
        content.classList.remove("animate__animated")
        content.classList.remove("animate__fadeInDownBig")
        //agregar nueva animacion
        content.classList.add("animate__animated")
        content.classList.add("animate__fadeOutDownBig")
        /*retrasar la ejecucion de funciones con setTimeout y setInterval*/
        // setTimeout(function() {
        //     location.href = "/"
        // }, 600)

    })
})

let open = document.querySelectorAll("a")
open.forEach((link) => {
    link.addEventListener('click', (event) => {
        // event.preventDefault();
        let content = document.querySelector(".content")
        //quitar las animaciones 
        content.classList.remove("animate__fadeInDownBig")
        //agregar nueva animacion
        content.classList.add("animate__fadeOutDownBig")
    })
})


// animate__fadeOutDownBig

// let iconos = document.querySelectorAll("i")
// // console.log(iconos);
// iconos.forEach(function(icon) {
//     icon.classList.add("animate__animated");
//     icon.classList.add("animate__heartBeat");
//     // icon.classList.remove("fas");
    
// })