
/*1
//Gustavo Sosa

//Jose Quispe
//En otra rama

//Nuevos Movimientos en esta RAMA QUE SOLO ESTA EN MI COMPUTADORA


const auto01 = {
    patente: 1,
    marca: "ford",
    precio: 2.2
}

const auto02 = {
    patente: 2,
    marca: "chevrolet",
    precio: 23.2
}

const auto03 = {
    id: 3,
    marca: "audi",
    precio: 200.2
}

const almacenDeAutomoviles = [];

almacenDeAutomoviles.push(auto01);
almacenDeAutomoviles.push(auto02);
almacenDeAutomoviles.push(auto03);

document.getElementById("sp01").innerHTML = almacenDeAutomoviles[0].marca;
document.getElementById("sp02").innerHTML = almacenDeAutomoviles[1].marca;
document.getElementById("sp03").innerHTML = almacenDeAutomoviles[2].marca;

document.getElementById("p01").innerHTML = almacenDeAutomoviles[0].precio;
document.getElementById("p02").innerHTML = almacenDeAutomoviles[1].precio;
document.getElementById("p03").innerHTML = almacenDeAutomoviles[2].precio;

console.log(almacenDeAutomoviles);
*/

/* 2
let automovil = {
    patente: 0,
    marca: "",
    precio: 0.0
}

let automoviles = [];

document.getElementById("b01").onclick = ()=>{
    
    automovil.marca = document.getElementById("i01").value;
    automovil.precio = Number(document.getElementById("i02").value);

    guardarAutomovil(automovil);
    
    document.getElementById("i01").value = "";
    document.getElementById("i02").value = "";
    document.getElementById("i01").focus = "";
        
};

function guardarAutomovil(automovil) {
    automovil.patente = generarId();
    automoviles.push(automovil);
    console.log(automoviles);    
};  

function generarId(){
    return automoviles.length + 1;
};
*/

//3

let automoviles = [];

document.getElementById("b01").onclick = ()=>{

    let objetoUno = new Automovil(
        document.getElementById("i01").value,
        Number(document.getElementById("i02").value));
    
    guardarAutomovil(objetoUno);
    
    document.getElementById("i01").value = "";
    document.getElementById("i02").value = "";
    document.getElementById("i01").focus = "";
  
    //automoviles.forEach( (cadaAuto) =>{
    //});

    //automoviles.map( (cadaAuto) =>{
    //});

    automoviles.filter

    document.getElementById("sp01").innerHTML = automoviles[0].marca;
    document.getElementById("p01").innerHTML = automoviles[0].precio;
    document.getElementById("sp02").innerHTML = automoviles[1].marca;
    document.getElementById("p02").innerHTML = automoviles[1].precio;
    document.getElementById("sp03").innerHTML = automoviles[2].marca;
    document.getElementById("p03").innerHTML = automoviles[2].precio;





};

function guardarAutomovil(automovil) {
    automovil.patente = generarId();
    automoviles.push(automovil);
    console.log(automoviles);    
};  

function generarId(){
    return automoviles.length + 1;
};

class Automovil{
    constructor(marca,precio){
        this.marca=marca;
        this.precio=precio;
        this.patente="0";
    };

    miMetodoUno(){
        return this.uno ;
    };

    miMetodoDos(parametroUno,parametroDos){
        document.write("<br> el parametro uno es: " + parametroUno + "<br> el parametro dos es: "+ parametroDos );
    };
    
};
