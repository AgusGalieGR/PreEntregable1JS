
const Jigo1 = {nombre: 'Jigokuraku', volumen:1, editorial:'IVREA', demografia:'shonen', existencias:20, precio:500};
const Dandadan1 = {nombre: 'Dandadan', volumen:1,editorial:'IVREA', demografia:'shonen', existencias:20, precio:500};
const catalogo = [Jigo1,Dandadan1];
let catalogoVisible = [];
const contenidoCatalogo = document.getElementById("cajaProductos");

const addElement = () =>{

    const nombre = prompt("Ingresar nombre del manga");
    estandar(nombre);
    const editorial = prompt("Ingresar nombre de la editorial");
    estandar(editorial);
    const demografia = prompt("Ingresar demografia");
    estandar(demografia);
    const existencias= prompt("Ingresar existencias");
    const precio = prompt("Ingresar precio");

    const mangaNuevo = {
        nombre: nombre,
        editorial: editorial,
        demografia: demografia,
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

const estandar = (x) =>{
    if(x!=null){
        x.toLowerCase(); 
        x[0].toUpperCase();
    }
}

const deleteElement = ()=> {
    const buscar = prompt("Ingrese el nombre del manga a eliminar");
    estandar(buscar);
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
console.log(catalogo);