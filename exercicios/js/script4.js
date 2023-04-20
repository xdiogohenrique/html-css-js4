function pegaValor(valor){
    campoTexto = document.getElementById("txtnumero");
    campoTexto.value = campoTexto.value + valor;
  }
  
  function calcular() {
    campoTexto = document.getElementById("txtnumero");
    if(campoTexto.value != "") {
      campoTexto.value = eval(campoTexto.value);
    }
  }
  
  function potencia() {
    campoTexto = document.getElementById("txtnumero");
    if(campoTexto.value != "") {
      campoTexto.value =  Math.pow(campoTexto.value,2);
    }
  }
  
  function raizQuadrada() {
    campoTexto = document.getElementById("txtnumero");
    if(campoTexto.value != "") {
      campoTexto.value = Math.sqrt(campoTexto.value);
    }
  }
  
  function arredonda() {
    campoTexto = document.getElementById("txtnumero");
    if(campoTexto.value != "") {
      campoTexto.value =  Math.round(campoTexto.value);
    }
  }