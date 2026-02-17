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

    // 🔥 aquí está el cambio
    if(promedio >= 8){
        document.getElementById("estatus").value = "Aprobado";
        document.getElementById("estatus").style.color = "green";
    }else{
        document.getElementById("estatus").value = "Reprobado";
        document.getElementById("estatus").style.color = "red";
    }

});




