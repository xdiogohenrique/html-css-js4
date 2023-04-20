function maiusculo(event){
    event.preventDefault()

    let valorTexto = document.getElementById("txt").value;
    let txtMaiusculo = valorTexto.toUpperCase();
    document.getElementById("id_div").innerHTML = txtMaiusculo;
}

function separa(event){
    event.preventDefault()

    let valorTexto = document.getElementById("txt").value;
    let txtSepara = valorTexto.replaceAll(" ", "<br>")
    document.getElementById("id_div").innerHTML = txtSepara;
}