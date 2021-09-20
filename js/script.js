console.log("%c 😑 Holis! 🙌 ", "font-family:Roboto Condensed");

$(window).on("load", function() {
    console.log("SE CARGO TODO!" + new Date());
});

//AGREGAR MENU
class menu {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
    
    const opc1 = new menu ("Clásica", "$320");
    const opc2 = new menu ("Mega Cheese", "$340");
    const opc3 = new menu ("Doble D", "$340");
    const opc4 = new menu ("Killer", "$340");
    const opc5 = new menu ("Viggie", "$340");
    const opc6 = new menu ("Rusticas", "$120");
    const opc7 = new menu ("Diegos", "$340");
    const opc8 = new menu ("4cheddadr", "$360");
    const opc9 = new menu ("Big ST", "$340");
    const opc10 = new menu ("Burger", "$320");
    const opc11 = new menu ("Coca-Cola", "$120");
    const opc12 = new menu ("Cerveza", "$180");
    const opc13 = new menu ("Jugos", "$90");
    const opc14 = new menu ("Agua", "$70");
    
    let elMenu = [];
    elMenu.push(opc1,opc2,opc3,opc4,opc5,opc6,opc7,opc8,opc9,opc10,opc11,opc12,opc13,opc14);
    
    const guardarMenu = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarMenu("Menu", JSON.stringify(elMenu));
    
    function agregarPedido(nombreItem) {
        console.log("Agregado " + elMenu[nombreItem].nombre + " " + elMenu[nombreItem].precio);
        console.log(typeof agregarPedido);
    }
    



//MENU HAMBURGUESA
function myClick() {
    var element = document.getElementById("menuNav");
    if(element.classList.contains("visible")){
    element.classList.remove("visible");
    }else{
        element.classList.add("visible");
    }
}

//BOTONES MENUNAV/PEDIDO
function agregarBurger() {
    let tuPedido = document.getElementsByTagName("a");
    console.log(agregarBurger.innerText);
    tuPedido[1].innerText = "Buscá tu burger!";
    tuPedido[1].style.color = "yellow";
}

function agregarBebida() {
    let tuPedido = document.getElementsByTagName("a");
    console.log(agregarBebida.innerText);
    tuPedido[2].innerText = "Buscá tu bebida!";
    tuPedido[2].style.color = "yellow";
}


//ANIMACIONES
$("#open").animate( {
    opacity: 0.85,
    width: 200,
    padding: 10
    },4000, function(){
        console.log("Fin de animación!");
    });      

$("#diegos-item").append('<section id="fila3"></section>');
$("#fila3").css("background", "#e12727")
    .delay(4000)
    .slideUp(3000)
    .slideDown(3000);



//JSON
const URLJSON = "users.json";
$(".misRedes").prepend('<button id="creador" class="btn-creador">CREADOR DEL SITIO</button>');
$("#creador").click(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado == "success") {
            let misDatos = respuesta.creador;
            for (const dato of misDatos) {
                $("#miFooter").prepend(`
                                            <p>${dato.nombre}</p>
                                            <p> ${dato.redes}</p>
                                        `);
            } 
        }
    });
});
 




