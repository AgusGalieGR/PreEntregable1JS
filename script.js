
const Jigo1 = {nombre: 'JIGOKURAKU', volumen:1, editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500};
const Dandadan1 = {nombre: 'DANDADAN', volumen:1,editorial:'IVREA', demografia:'SHONEN', existencias:20, precio:500};
const catalogo = [Jigo1,Dandadan1];
let catalogoVisible = [];
const contenidoCatalogo = document.getElementById("cajaProductos");

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
console.log(catalogo);
let palabraPrueba = catalogo[1].nombre.toLowerCase();
console.log(palabraPrueba[0].toUpperCase());