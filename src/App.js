const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input")
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", event =>{
    event.preventDefault();
    alert("Cantidad ingresada: "+ cantidad.value+ "\nPrecio del item: "+precio.value);
    alert("Precio total: "+cantidad.value * precio.value)
})
