function tipoProfe(notas, instrucciones){
    for(let i = 0; i < notas.length; i++){
        notas[i] = instrucciones(notas[i]);
    }
    return notas;
}

function suma2(num1){
    return num1 + 2;
}

let guardar = tipoProfe([6,7,8], suma2);