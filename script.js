
const Jigo1 = {id: 1, nombre: 'JIGOKURAKU 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/jigokuraku011.webp"};
const Dandadan1 = {id: 2, nombre: 'DANDADAN 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/dandadan011.webp"};
const VinlandSaga1 = {id: 3,nombre: 'VINLAND SAGA 1', editorial:'OVNI', demografia:'SEINEN', existencias:50, precio:1000, img:"./Images/vinland_saga1.webp"};
const NANA1 = {id: 4, nombre: 'NANA', editorial:'IVREA', demografia:'SHOJO', existencias:50, precio:2000, img:"./Images/Nana1.webp"};
const catalogo = [Jigo1,Dandadan1,VinlandSaga1,NANA1];
const catalogoVisible = [];
let carritoActual = [];
const contenidoCatalogo = document.getElementById("cajaProductos");
const carrito = document.getElementById("carrito");
let carritoActivo = false;
let valorCompra = 0;
function mostrarCatalogo(){ 
        clean();
        catalogo.forEach((manga) => {
        crearCard(manga);
        addToCardButton();
    });
}
function mostrarCarrito(){
    let carritoAMostrar = JSON.parse(localStorage.getItem("cartProductos"));
    console.log(carritoActual);
    console.log(carritoAMostrar);
    carritoAMostrar.forEach(prod =>{
     carritoActual.push(prod);
     localStorage.setItem("cartProductos",JSON.stringify(carritoActual))
     if(carritoActivo==false){
         agregarProductosCarritoInicial(prod);
     }else{
         agregarProductosCarrito(prod);
     }
    })
 }
window.onload = function renderProductos(){
    mostrarCatalogo();
    mostrarCarrito();
}
const addElement = () =>{

    const nombre = prompt("Ingresar nombre del manga");
    const editorial = prompt("Ingresar nombre de la editorial");
    const demografia = prompt("Ingresar demografia");
    const existencias= prompt("Ingresar existencias");
    const precio = prompt("Ingresar precio");

    const mangaNuevo = {
        nombre: nombre.toUpperCase(),
        editorial: editorial.toUpperCase(),
        demografia: demografia.toUpperCase(),
        existencias: existencias,
        precio: precio 
    }
    catalogo.push(mangaNuevo);
}
const deleteElement = () =>{
    const buscar = prompt("Ingrese el nombre del manga a eliminar");
    buscar.toUpperCase();
    console.log(buscar);
    let encontre = false;
    let i = 0;
    while(encontre==false && i<catalogo.length){
        if(buscar == catalogo[i].nombre){
            catalogo.splice(i,1);
            encontre = true;
            alert("El manga solicitado se ha eliminado correctamente")
        }else{
            i++;
        }
        
    }
    if(encontre==false){
        alert("No se ha encontrado el manga solicitado");
    }
    const pregunta = confirm("Desea realizar otra busqueda para eliminar");
    if(pregunta){
        deleteElement();
    }
}
let shonen = document.getElementById("shonen");
shonen.addEventListener("click", function mostrarProductosShonen(){
    let cant = 0;
    clean();
    catalogo.forEach((manga) => {
        if(manga.demografia=='SHONEN'){
            cant = crearCardDemografias(manga,cant);
        };
        addToCardButton();
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
        mostrarCatalogo();
    }
});

function clean(){
    catalogoVisible.forEach((mangaV)=>{
        mangaV.remove();
    })
}
let seinen = document.getElementById("seinen");
seinen.addEventListener("click", function mostrarProductosSeinen(){
    let cant = 0;
    clean();
    console.log(catalogo);
    catalogo.forEach((manga) => {
        if(manga.demografia=='SEINEN'){
            cant = crearCardDemografias(manga,cant);
        };
        addToCardButton();
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
        mostrarCatalogo();
    }
});

let shojo = document.getElementById("shojo");
shojo.addEventListener("click", function mostrarProductosShojo(){
    let cant = 0;
    clean();
    catalogo.forEach((manga) => {
        if(manga.demografia=='SHOJO'){
            cant = crearCardDemografias(manga,cant);
        };
        addToCardButton();
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
        mostrarCatalogo();
    }
});


const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    buscador();
});
function buscador() {
    clean();
    var buscar = document.getElementById("inputSearch").value;
    console.log(buscar);
    manga = catalogo.find(mangaBuscado => {
    return manga = mangaBuscado.nombre === buscar.toUpperCase()});

    if(manga!=null){
        encontrado = true;
        crearCard(manga);
    }else{
        alert("El producto solicitado no esta disponible");
        mostrarCatalogo();
    }
}
function crearCardDemografias(manga,cant){
    const content = document.createElement("div");
            content.className+= "tarjeta";
            content.innerHTML = `   
            <img src="${manga.img}">
            <h3>${manga.nombre}</h3>
            <h5>Demografia:${manga.demografia}</h4>
            <h6>Editorial:${manga.editorial}</h4>
            <h4>Precio:${manga.precio}</h4>
            <button id="${manga.id}" class="agregarProducto">Comprar</button>
            `;
            contenidoCatalogo.append(content);  
            cant++;
            catalogoVisible.push(content);
            console.log(catalogoVisible);
            return cant;
}
function crearCard(manga){
    const content = document.createElement("div");
        content.className+= "tarjeta";
        content.innerHTML = `   
        <img src="${manga.img}">
        <h3>${manga.nombre}</h3>
        <h5>Demografia:${manga.demografia}</h4>
        <h6>Editorial:${manga.editorial}</h4>
        <h4>Precio:${manga.precio}</h4>
        <button id="${manga.id}" class="agregarProducto">Comprar</button>
        `;
        contenidoCatalogo.append(content);  
        catalogoVisible.push(content);

}
function agregarProductosCarritoInicial(producto){
    if(carritoActivo==false){
        let filaAtributos = document.createElement("tr");
        let fila = document.createElement("tr");
        fila.classList.add("filaProducto");
        filaAtributos.innerHTML= `
        <th>
            Id
        </th>
        <th>
            Nombre
        </th>
        <th>
            Demografia
        </th>
        <th>
            Editorial
        </th>
        <th >
            Cantidad
        </th>
        <th>
            Precio
        </th>
        <th>
            <button onclick=cleanCarrito()>Limpiar</button>
        </th>
        `
        fila.innerHTML = `
        <td>
            ${producto.id}
        </td>
        <td>
            ${producto.nombre}
        </td>
        <td>
            ${producto.demografia}
        </td>
        <td>
            ${producto.editorial}
        </td>
        <td id ="cantidad">
            ${cant = 1}
        </td>
        <td>
            ${producto.precio}
        </td>
        <td>
            <button onclick=eliminarItem() class="eliminarItem">Eliminar producto</button>
        </td>
        `
        carrito.appendChild(filaAtributos);
        carrito.appendChild(fila);

    }
    carritoActivo = true;
    calcularValor(producto);
}
function agregarProductosCarrito(producto){
        const fila = document.createElement("tr");
        fila.classList.add("filaProducto");
        fila.innerHTML = `
        <td id="idProducto">
            ${producto.id}
        </td>
        <td>
            ${producto.nombre}
        </td>
        <td>
            ${producto.demografia}
        </td>
        <td>
            ${producto.editorial}
        </td>
        <td id ="cantidad">
            ${cant = 1}
        </td>
        <td>
            ${producto.precio}
        </td>
        <td>
            <button onclick=eliminarItem() class="eliminarItem">Eliminar producto</button>
        </td>
        `
        carrito.appendChild(fila);
        calcularValor(producto);
}
function addToCardButton(){
    addButton = document.querySelectorAll(".agregarProducto");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id;
            const selectedProduct = catalogo.find(producto => producto.id == productId);
            carritoActual.push(selectedProduct);
            localStorage.setItem("cartProductos",JSON.stringify(carritoActual))
            if(carritoActivo==false){
                agregarProductosCarritoInicial(selectedProduct);
            }else{
                agregarProductosCarrito(selectedProduct);
            }
    };
    })
    
}
function agregarUnidad(producto){
    console.log(carrito.hasChildNodes());
    var filas = carrito.childNodes;
    console.log(filas);
    var encontrado = false;
    var idActual;
    var cantidadMod;
    filas.forEach(fila => {
        while(encontrado == false){
            idActual = fila.getElementById("idProducto");
            if(idActual==producto.id){
                encontrado=true;
                cantidadMod = fila.getElementById("cantidad");
                cantidadMod.innerHTML = cant++;
            }
        }   
    })
}
function cleanCarrito(){
    localStorage.clear();
    var filas = carrito.childNodes;
    console.log()
    filas.forEach(fila => {
        fila.innerText=` `;
    })
    carritoActivo = false;
    carritoActual = [];
    valorCompra = 0;
    document.getElementById("valor").innerHTML = valorCompra;
}
function eliminarItem(){
    deleteButton = document.querySelectorAll(".eliminarItem");
    deleteButton.forEach(button => {
        button.onclick = (e) => {
        const productId = e.currentTarget.id;
        let carritoActual = carritoActual.filter(carritoId => carritoId!==productId);
        }
    })
}
function calcularValor(producto){
    valorCompra = valorCompra + producto.precio;
    document.getElementById("valor").innerHTML = valorCompra;
}
let finalizar = document.getElementById("finalizar");
finalizar.addEventListener("click", function finalizarCompra(){
    if(valorCompra>0){
        alert("Su pedido ha sido tomado con exito, gracias por su compra!");
        location.href ="index.html";
        localStorage.clear();
    }else{
        alert("No se ha ingresado ningun producto!")
    }
})
