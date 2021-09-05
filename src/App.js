const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input")
const estado = document.querySelector("#estado-input")
const form = document.querySelector("#totalizador-form");

var impuesto = 0.0825; //california
var descuento = 0.05 //5% predeterminado

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

form.addEventListener("submit", event =>{
    event.preventDefault();
    impuesto = impuestoPorEstado();
    alert("Cantidad ingresada: "+ cantidad.value+ 
    "\nPrecio del item: "+precio.value+
    "\n Impuesto: "+impuesto*100+"%"+
    "\n Estado ingresado: "+estado.value+
    "\n Descuento: "+descuento*100+"%");
    var precioTotal = cantidad.value * precio.value;
    var precioTotalConImpuesto = precioTotal + impuesto*precioTotal; 
    var precioTotalConDescuento = precioTotal - descuento*precioTotal; 
    var precioTotalConImpuestoyDescuento = precioTotalConDescuento + impuesto*precioTotalConDescuento;
    alert("Precio total: "+precioTotal+
    "\nPrecio total con impuesto: "+precioTotalConImpuesto+
    "\nPrecio total con descuento: "+precioTotalConDescuento+
    "\nPrecio total con impuesto y descuento: "+precioTotalConImpuestoyDescuento);
})
