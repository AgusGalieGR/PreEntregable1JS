
const Jigo1 = {nombre: 'Jigokuraku', volumen:1, editorial:'IVREA', demografia:'shonen', existencias:20, precio:500, img:"./Images/jigokuraku011.webp"};
const Dandadan1 = {nombre: 'Dandadan', volumen:1,editorial:'IVREA', demografia:'shonen', existencias:20, precio:500, img:"./Images/dandadan011.webp"};
const Vinland1 = {nombre: 'Vinland Saga', volumen:1,editorial:'OVNI', demografia:'seinen', existencias:20, precio:1000, img:"./Images/Vinland_Saga1.webp"};

const catalogo = [Jigo1,Dandadan1,Vinland1];
let catalogoVisible = [];
const contenidoCatalogo = document.getElementById("cajaProductos");
/*catalogo.forEach(manga => {
    const content = document.createElement("div");
    content.innerHTML = `   
    <img src="${manga.img}">
    <h3>${manga.nombre}</h3>
    <h4>Demografia:${manga.demografia}</h4>
    <h4>Editorial:${manga.editorial}</h4>
    <h5>Existencias:${manga.existencias}</h5>
    <h3>Precio:${manga.precio}</h4>
    <button>Comprar</button>
    `;
    contenidoCatalogo.append(content);
});*/
function mostrarProductosShonen(){
    catalogoVisible.forEach(contenido => {
        contenidoCatalogo.prepend(contenido);
        catalogoVisible.pop();
    });
    let cant = 0;
    catalogo.forEach((manga) => {
        if(manga.demografia=='shonen'){
            const content = document.createElement("div");
            content.innerHTML = `   
            <img src="${manga.img}">
            <h3>${manga.nombre}</h3>
            <h4>Demografia:${manga.demografia}</h4>
            <h4>Editorial:${manga.editorial}</h4>
            <h5>Existencias:${manga.existencias}</h5>
            <h3>Precio:${manga.precio}</h4>
            <button>Comprar</button>
            `;
            contenidoCatalogo.append(content);
           // catalogoVisible.push(content);
            cant++;  
        };
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
    }
    console.log(catalogoVisible);
}
function mostrarProductosSeinen(){
    let cant = 0;
    catalogo.forEach((manga) => {
        if(manga.demografia=='seinen'){
            const content = document.createElement("div");
            content.innerHTML = `   
            <img src="${manga.img}">
            <h3>${manga.nombre}</h3>
            <h4>Demografia:${manga.demografia}</h4>
            <h3>Editorial:${manga.editorial}</h4>
            <h5>Existencias:${manga.existencias}</h5>
            <h4>Precio:${manga.precio}</h4>
            <button>Comprar</button>
            `;
            contenidoCatalogo.append(content);  
            cant++;
        };
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
    }
}
function mostrarProductosShojo(){
    let cant = 0;
    catalogo.forEach((manga) => {
        if(manga.demografia=='shojo'){
            const content = document.createElement("div");
            content.innerHTML = `   
            <img src="${manga.img}">
            <h3>${manga.nombre}</h3>
            <h4>Demografia:${manga.demografia}</h4>
            <h3>Editorial:${manga.editorial}</h4>
            <h5>Existencias:${manga.existencias}</h5>
            <h4>Precio:${manga.precio}</h4>
            <button>Comprar</button>
            `;
            contenidoCatalogo.append(content);  
            cant++;
        };
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
    }
}
//Rever una forma en la que se vean todos los productos al abrir la pagina y que el filtro aplique hide a los productos que no cumplan con la condicion de filtrado