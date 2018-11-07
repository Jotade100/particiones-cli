

module.exports = (args) =>{
    //var numero = args.lista || args.l;
    //particion(numero);
    particion(args, function(){
    });



}





// la función principal 

function particion(numero){
    // lista con una solución parcial
    var parcial = [];
    // respuesta con todas las particiones
    var particiones = [];
    // entrada al método :)    
    particionar(numero, parcial, particiones);
    // impresión de prueba
    //console.log(particiones);
    var text = "                    ";
    for(k = 0; k<particiones.length; k++){
        var text = "                    ";
        for(h = 0; h<22-1.5*numero; h++){
            text = text+ "  "
        }
        for(l = 0; l<particiones[k].length; l++){
            if (l== 0){
                text = text + particiones[k][l];
            } else {
                text = text + ", " + particiones[k][l];
            }
            
        }
        console.log(text);
    }
}
    
function crearCopia(arreglo){
    // ineficiencia al mil, culpa de la relación asíncrona de javascript 
    var copia = [];
    for(var j = 0; j < arreglo.length; j++){
        copia[j] = arreglo[j]
    }
    return copia;
}

// una función que no retorna, así se ahorra memoria XD {algo de eficiencia por lo menos ;)}
function particionar(numero, parcial, particiones) {
    if(numero == 0){
        // Terminó de hacer un ciclo y contiene una solución
        var copia = crearCopia(parcial);
        particiones.push(copia);
    } else {
        // la parte interesante ^^
        for(var i = numero; i > 0; i--){
            // Si la lista está vacía o se obtiene el último elemento de la lista para compararlo con el iterador
            if(parcial.length == 0 || parcial[parcial.length-1] >= i){
                // guardamos parte de una solución
                parcial.push(i);
                // encontramos otras posibles soluciones con lo restante
                particionar(numero-i, parcial, particiones);
                // eliminar el último elemento del arreglo (solución inválida o repetida)
                parcial.pop();
            }
        }
    }
}



