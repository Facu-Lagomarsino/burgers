    //MODAL FORMULARIO
const open = document.getElementById("open");
const modalContainer = document.getElementById("modalContainer");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});

function cerrarForm() {
    var element = document.getElementById("modalContainer");
    if(element.classList.contains("show")){
    element.classList.remove("show");
    }else{
        element.classList.add("show");
    }
}

    // FORMULARIO
const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usuarioValue === " ") {
        setErrorFor(usuario, "Completar espacio");
    }else{
        setSuccessFor(usuario);
    }

    if(emailValue === '') {
        setErrorFor(email, 'No puede dejar el email en blanco');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password no debe quedar en blanco.');
    } else {
        setSuccessFor(password);
    }
    
    if(password2Value === '') {
        setErrorFor(password2, 'Completar espacios.');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Password no coinciden');
    } else{
        setSuccessFor(password2);
    }
}

const inputs = document.getElementsByTagName("input")
    for (i=0; inputs.length; i++){
        inputs[i].value = "";
    }

function setErrorFor(input, message) {
    const form = input.parentElement;
    const small = form.querySelector("small");
    form.className = "form error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const form = input.parentElement;
    form.className = "form success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


    // BOTON IR AL PEDIDO
function irAlMenu() {
    alert("Si completaste correctamente busca lo que mas te guste y arma tu pedido!");
    location.href = "pedido.html";
}


