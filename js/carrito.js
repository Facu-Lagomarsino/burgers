     //MODAL CARRITO
const open = document.getElementById("openCarrito");
const modalContainer = document.getElementById("modalCarrito");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});

function cerrarCart() {
    var element = document.getElementById("modalCarrito");
    if(element.classList.contains("show")){
    element.classList.remove("show");
    }else{
        element.classList.add("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".openCarrito").forEach(trigger => {
    trigger.addEventListener("click", function() {
        document.querySelectorAll("body").forEach(target => target.classList.add("no-scroll"));
        });                
    }); 
    
document.querySelectorAll(".closeCarrito").forEach(trigger => {
    trigger.addEventListener("click", function() {
        document.querySelectorAll("body").forEach(target => target.classList.remove("no-scroll"));
        });                
    });                
});     
        

const clickButton = document.querySelectorAll(".button");
const tbody = document.querySelector(".tbody");

let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem);
}); 

function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest(".card");  
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrecio = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector(".card-img").src;

    const newItem = {
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem); 
    add();
}

function addItemCarrito(newItem) {

    const alert = document.querySelector(".alert");

    setTimeout(function() {
        alert.classList.add("hide");
    }, 2000);
        alert.classList.remove("hide");

const inputElemento = tbody.getElementsByClassName("input__elemento");
    for(let i = 0; i < carrito.length; i++) {
        if(carrito[i].title.trim() === newItem.title.trim()) {
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i];
            inputValue.value++;
            carritoTotal();
            return null;
        }
    }
    
    carrito.push(newItem);
    renderCarrito();
}

function renderCarrito() {

    tbody.innerHTML = "";
    carrito.map(item => {
        const tr = document.createElement("tr");
        tr.classList.add("itemCarrito");
        const content = `                                  
                        <td class="table__productos">
                            <img src=${item.img} alt="foto">
                            <h6 class="title">${item.title}</h6>
                            <button id="botonQuitar" class="delete">X</button>
                        </td>   
                        <td class="table__cantidad">
                            <input type="number" min="1" value=${item.cantidad} class="input__elemento"> 
                        </td>
                    `
        tr.innerHTML = content;
        tbody.append(tr);

        tr.querySelector(".delete").addEventListener("click", removeItemCarrito);
        tr.querySelector(".input__elemento").addEventListener("change", sumaCantidad);
       
    });
    
    carritoTotal(); 
}

function carritoTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector(".itemCartTotal");
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''));
        total = total + precio*item.cantidad;
    });

    itemCartTotal.innerHTML = `Total $${total}`
}

function removeItemCarrito(e) {
    const buttonDelete = e.target;
    const tr = buttonDelete.closest(".itemCarrito");
    const title = tr.querySelector(".title").textContent;
    for(let i = 0; i < carrito.length; i++) {
        if(carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1);    
        }
    }

    const alert = document.querySelector(".remove");

    setTimeout(function() {
        alert.classList.add("remove");
    }, 2000);
        alert.classList.remove("remove");
    
    tr.remove();
    sub();
    carritoTotal();
}

function sumaCantidad(e) {
    const sumaInput = e.target;
    const tr = sumaInput.closest(".itemCarrito");
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item => {
        if(item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value =1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal();
        }
    });
}

    //NOTIFICACIÓN DEL CARRITO
const carritoNoti = [];

// document.getElementById("openCarrito").innerHTML = carritoNoti.reduce(myFunc);

// function myFunc(totals, nums) {
//   return totals - nums;
// } 

if (carritoNoti.length < 1) {
    document.getElementById("conteoCarrito").style.display = "none";
}

function actualizarCantidad() {
    const cartCount = document.getElementById("conteoCarrito");
    cartCount.style.display = "inline-block"; 
    cartCount.innerHTML = carritoNoti.length;    
}

// const reducer = (carritoNoti, currentValue) => carritoNoti + currentValue;
// console.log(carritoNoti.reduce(reducer));


function add() {
    carritoNoti.push("producto");
    actualizarCantidad();    
}


function sub() {
    carritoNoti.splice(-1);
    actualizarCantidad();
}
  
const botonQuitar = document.getElementById("botonQuitar");
botonQuitar.addEventListener("click", sub);


    // BOTON CONFIRMACIÓN/PEDIDO
function confirmacion2() {
    alert("Tenemos tu pedido y lo estamos preparando! GRACIAS");
    location.href = "pedido.html";  
}

    //GUARDA EN LOCALSTORAGE/QUEDA CARRITO AL ACTUALIZAR SITIO
function addLocalStorage() {
    localStorage.setItem("pedido", JSON.stringify(carrito));
}

window.onload = function() {
    const storage = JSON.parse(localStorage.getItem("pedido"));
    if(storage) {
        carrito = storage;
        renderCarrito();
    }
}

