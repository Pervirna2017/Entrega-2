
let nombre = "invitado"

console.log("Bienvenido:", nombre)


function Saludar(Saludar) {
    console.log( "Hola.Como estás?")
}

function Identificarusuario() {
    nombre =prompt ("Ingresa tu nombre")
    if( nombre !== null && nombre !== ""){
        console.log ("Bienvenido"+ nombre)
         }
         else { 
         console.warn("Debes ingresar un nombre de usuario válido");
         }

 }
Saludar ()
Identificarusuario ()



function sumar (primerNumero,segundoNumero){
return primerNumero + segundoNumero;

 }
let resultado = sumar (9,6)
console.log (resultado)


//OBJETOS//

let saco= "saco"
let imagen="D:\Datos\Documents\Fotos de Pagina Estrella\PaginaEstrella-20241121T000605Z-001\PaginaEstrella\Saco_beaje.jpg"
let material= "Lana"
let color="beage"
let avios="Botones carey"
let precio="$70000"

const sacoBeage = {
    imagen:"D:\Datos\Documents\Fotos de Pagina Estrella\PaginaEstrella-20241121T000605Z-001\PaginaEstrella\Saco_beaje.jpg",
    material:"Lana",
    color:"Beage",
    avios:"Botones carey"
    precio: "$70.000",
    
    console.log (sacoBeage.material)
    
 }
 const sacoLeticia = {
    imagen:"D:\Datos\Documents\Fotos de Pagina Estrella\PaginaEstrella-20241121T000605Z-001\PaginaEstrella\Saco Leticia.jpg.jpg",
    material:"Lana",
    color:"Gris perla",
    avios:"Botones carey"
    precio: "$80000",
    
    console.log (sacoLeticia.material)
    
 }
 const Chal = {
    imagen:"D:\Datos\Documents\Fotos de Pagina Estrella\PaginaEstrella-20241121T000605Z-001\PaginaEstrella\Chal azul.jpg",
    material:"Lana",
    color:"azul",
    avios:"broche cuero"
    precio: "$50000",
    
    console.log (Chal.material)
    
 }
 const sacoCuelloRedondo = {
    imagen:"D:\Datos\Documents\Fotos de Pagina Estrella\PaginaEstrella-20241121T000605Z-001\PaginaEstrella\Ssacocuelloredondo.jpg",
    material:"Lana",
    color:"coral",
    avios:"botones carey"
    precio: "$70000",
    
    console.log (sacoCuelloRedondo.material)
}

function calcularImporteConIva(importe,iva){
    if (importe !== null && importe >0){
        console.log ("Precio final:"),importe * iva
    }
    else{
        console.warn("Ingresa un importe mayor a 0");
        
    } //Preguntar//
}

