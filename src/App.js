const cantidad = document.querySelector("#cantidad-input");

const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", event =>{
    //event.preventDefault();
    alert("Cantidad ingresada:"+ cantidad.value);
})
