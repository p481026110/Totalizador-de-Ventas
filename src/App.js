const nombre = document.querySelector("#nombre-input")
const descripcion = document.querySelector("#descripcion-input")
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input")
const estado = document.querySelector("#estado-input")
const form = document.querySelector("#totalizador-form");

var impuesto = 0.0825; //california
var descuento = 0;

function impuestoPorEstado(){
    var impuestoEstado = impuesto;
    switch (estado.value){
        case "UT":
            impuestoEstado = 0.0665;
            break;
        case "NV":
            impuestoEstado = 0.08;
            break;
        case "TX":
            impuestoEstado = 0.0625;
            break;
        case "AL":
            impuestoEstado = 0.04;
            break;
        default :
            break;
    }
    return impuestoEstado;
}

function descuentoPorPrecioTotal(precioTotal){
    var descuentoPrecio = descuento;
    if (precioTotal >= 1000){
        descuentoPrecio = 0.03;
    }else if(precioTotal >= 3000){
        descuentoPrecio = 0.05;
    }else if(precioTotal >= 7000){
        descuentoPrecio = 0.07;
    }else if(precioTotal >= 10000){
        descuentoPrecio = 0.1;
    }else if(precioTotal >= 30000){
        descuentoPrecio = 0.15;
    }
    return descuentoPrecio;
}

form.addEventListener("submit", event =>{
    event.preventDefault();
    impuesto = impuestoPorEstado();
    alert("\nNombre del producto: "+nombre.value+
    "\nDescripcion del producto: "+descripcion.value+
    "\nCantidad ingresada: "+ cantidad.value+ 
    "\nPrecio del item: "+precio.value+
    "\n Impuesto: "+impuesto*100+"%"+
    "\n Estado ingresado: "+estado.value);   
    var precioTotal = cantidad.value * precio.value;
    descuento = descuentoPorPrecioTotal(precioTotal);
    var precioTotalConImpuesto = precioTotal + impuesto*precioTotal; 
    var precioTotalConDescuento = precioTotal - descuento*precioTotal; 
    var precioTotalConImpuestoyDescuento = precioTotalConDescuento + impuesto*precioTotalConDescuento;
    alert("Precio total: "+precioTotal+
    "\n Descuento: "+descuento*100+"%"+
    "\nPrecio total con impuesto: "+precioTotalConImpuesto+
    "\nPrecio total con descuento: "+precioTotalConDescuento+
    "\nPrecio total con impuesto y descuento: "+precioTotalConImpuestoyDescuento);
})
