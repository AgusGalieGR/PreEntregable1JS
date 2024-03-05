
const Jigo1 = {id: 1, nombre: 'JIGOKURAKU 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/jigokuraku011.webp"};
const Dandadan1 = {id: 2, nombre: 'DANDADAN 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/dandadan011.webp"};
const VinlandSaga1 = {id: 3,nombre: 'VINLAND SAGA 1', editorial:'OVNI', demografia:'SEINEN', existencias:50, precio:1000, img:"./Images/vinland_saga1.webp"};
const NANA1 = {id: 4, nombre: 'NANA', editorial:'IVREA', demografia:'SHOJO', existencias:50, precio:2000, img:"./Images/Nana1.webp"};
const catalogo = [Jigo1,Dandadan1,VinlandSaga1,NANA1];
const catalogoVisible = [];
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
function mostrarProductosShonen(){
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
}
function clean(){
    catalogoVisible.forEach((mangaV)=>{
        mangaV.remove();
    })
}
function mostrarProductosSeinen(){
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
}
function mostrarProductosShojo(){
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
}
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
let cartProductosActivo = [];
let cartProductosNuevo = [];
function agregarProductosCarritoInicial(){
    if(carritoActivo==false){
        cartProductosNuevo.forEach(producto => {
            const fila = document.createElement("tr");
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
                <td>
                    ${producto.precio}
                </td>
                <td>
                    <button onclick= eliminarItem()>Eliminar producto</button>
                </td>
                `
                carrito.appendChild(fila);

        })
    carritoActivo = true;
    }else{
        agregarProductosCarrito();
    }
    cartProductosActivo = cartProductosNuevo.slice();
    calcularValor();
}
function agregarProductosCarrito(){
    if(cartProductosActivo.length<cartProductosNuevo.length){
            for(i=cartProductosActivo.length-1;i<cartProductosNuevo.length-1;i++){
                let producto = cartProductosNuevo[i];
                const fila = document.createElement("tr");
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
                <td>
                    ${producto.precio}
                </td>
                `
                carrito.appendChild(fila);
            }
        }
        calcularValor();
}
function addToCardButton(){
    addButton = document.querySelectorAll(".agregarProducto");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id;
            const selectedProduct = catalogo.find(producto => producto.id == productId);
            cartProductosNuevo.push(selectedProduct);
            localStorage.setItem("cartProductos",JSON.stringify(cartProductosNuevo))
    };
})
}
function cleanCarrito(){
    cartProductosActivo.forEach((producto) => {
        
    })
    cartProductosActivo = [];
    localStorage.clear();
    carritoActivo = false;
}
function calcularValor(){
    cartProductosActivo.forEach(producto =>{
        valorCompra = valorCompra + producto.precio;
        
    })
    document.getElementById("valor").innerHTML = valorCompra;
}
function finalizarCompra(){
    if(valorCompra>0){
        alert("Su pedido ha sido tomado con exito, gracias por su compra!");
        location.href ="index.html";
        localStorage.clear();
    }else{
        alert("No se ha ingresado ningun producto!")
    }
}