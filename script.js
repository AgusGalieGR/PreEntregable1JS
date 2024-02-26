
const Jigo1 = {nombre: 'JIGOKURAKU 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/jigokuraku011.webp"};
const Dandadan1 = {nombre: 'DANDADAN 1', editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500, img:"./Images/dandadan011.webp"};
const VinlandSaga1 = {nombre: 'VINLAND SAGA 1', editorial:'OVNI', demografia:'SEINEN', existencias:50, precio:1000, img:"./Images/vinland_saga1.webp"};
const NANA1 = {nombre: 'NANA', editorial:'IVREA', demografia:'SHOJO', existencias:50, precio:2000, img:"./Images/Nana1.webp"};
const catalogo = [Jigo1,Dandadan1,VinlandSaga1,NANA1];
let catalogoVisible = [];
const contenidoCatalogo = document.getElementById("cajaProductos");
clean();
function mostrarCatalogo(){
        catalogo.forEach((manga) => {
        const content = document.createElement("div");
        content.className+= "tarjeta";
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
        catalogoVisible.push(content);
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
    /*let pusheado = false;
    let i = 0;
    while(!pusheado){
        if(catalogo[i]==null){
            catalogo[i]=mangaNuevo;
        }
        pusheado = true; 
        
    }
    if(!pusheado){
        catalogo.push(mangaNuevo);
    }*/
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
            const content = document.createElement("div");
            content.className+= "tarjeta";
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
            catalogoVisible.push(content);
        };
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
    catalogo.forEach((manga) => {
        if(manga.demografia=='SEINEN'){
            const content = document.createElement("div");
            content.className+= "tarjeta";
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
            catalogoVisible.push(content);
        };
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
            const content = document.createElement("div");
            content.className+= "tarjeta";
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
            catalogoVisible.push(content);
        };
    });
    if(cant==0){
        alert("No hay ningun producto disponible");
        mostrarCatalogo();
    }
}
function buscador() {
    clean();
    let encontrado = false;
    var buscar = document.getElementById("inputSearch").value;
    console.log(buscar);
    manga = catalogo.find(mangaBuscado => {
    return manga = mangaBuscado.nombre === buscar.toUpperCase()});

    if(manga!=null){
        encontrado = true;
        const content = document.createElement("div");
        content.className+= "tarjeta";
        content.innerHTML = `   
        <img src="${manga.img}">
        <h3>${manga.nombre}</h3>
        <h4>Demografia:${manga.demografia}</h4>
        <h3>Editorial:${manga.editorial}</h4>
        <h5>Existencias:${manga.existencias}</h5>
        <h4>Precio:${manga.precio}</h4>
        <div><button>Comprar</button></div>
        `;
        contenidoCatalogo.append(content);  
        catalogoVisible.push(content);
    }else{
        alert("El producto solicitado no esta disponible");
        mostrarCatalogo();
    }
}

console.log(catalogoVisible);
