const nombre = "sergio";
const apellido = "merino";
let datos = document.querySelector('#datos');



function muestra(dato){
    dato.innerHTML=`<h1> soy la caja  de datos desde la funcion muestra</h1>
    <h2> nombre es : ${nombre} ${apellido}</h2>
    
    `;
}

muestra(datos);