const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input")
const estado = document.querySelector("#estado-input")
const form = document.querySelector("#totalizador-form");

var impuesto = 0.0825; //california

form.addEventListener("submit", event =>{
    event.preventDefault();
    alert("Cantidad ingresada: "+ cantidad.value+ 
    "\nPrecio del item: "+precio.value+
    "\n Impuesto(predeterminado): "+impuesto*100+"%"+
    "\n Estado ingresado: "+Impuesto.value);
    var precioTotal = cantidad.value * precio.value;
    var precioTotalConImpuesto = precioTotal + impuesto*precioTotal; 
    alert("Precio total: "+precioTotal+"\nPrecio total con impuesto: "+precioTotalConImpuesto);
})
