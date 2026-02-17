// la funcion principal del main es:

//  1. Obtiene los valores del formulario 
//  2. Valida que los campos tengan información
//  3. La funcion fetch hace las peticiones al servidor
//  4. /calcular-promedio es la ruta a donde se estan enviando la petición
//  5. method: 'POST' → Vamos a enviar datos
//  6. headers → Estamos enviando JSON
//  7. body → Aquí van los datos convertidos a texto JSON

document.getElementById("btnCalcular").addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value;
    let u1 = parseFloat(document.getElementById("unidad1").value);
    let u2 = parseFloat(document.getElementById("unidad2").value);
    let u3 = parseFloat(document.getElementById("unidad3").value);

    if(nombre === "" || isNaN(u1) || isNaN(u2) || isNaN(u3)){
        alert("Completa todos los campos");
        return;
    }

    let promedio = (u1 + u2 + u3) / 3;
    document.getElementById("promedio").value = promedio.toFixed(1);

    if(promedio >= 70){
        document.getElementById("estatus").value = "APROBADO";
        document.getElementById("estatus").style.color = "green";
    }else{
        document.getElementById("estatus").value = "REPROBADO";
        document.getElementById("estatus").style.color = "red";
    }

});
