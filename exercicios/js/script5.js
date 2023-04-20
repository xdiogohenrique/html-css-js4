let botao1 = document.getElementById("btn1");
let botao2 = document.getElementById("btn2");
let botao3 = document.getElementById("btn3");

let inicial = 0;
let timer = 0;
let contImagem = 1;

botao1.addEventListener("click",function(){
  exibirDiv("divCronometro");
  startCronometro();
});

botao2.addEventListener("click", function(){
  exibirDiv("divSlide");
});

botao3.addEventListener("click", function(){
  exibirDiv("divTabuada");
});

function exibirDiv(div) {
  let tagsdiv = document.querySelectorAll("div"); //todas as divs//
  console.log(tagsdiv);
  for (let i=0; i <tagsdiv.length; i++) {
    if(tagsdiv[i].id.indexOf("div") >= 0){
      if (tagsdiv[i].id == div){
        tagsdiv[i].style.display ="block";
      } else {
        tagsdiv[i].style.display = "none";
      }
    }
  } 
}

function startCronometro() {
  let div = document.getElementById("txtNum")
  div.innerText = 0
  let numero = parseInt(div.innerText)

  setInterval(function() {
    numero ++
    div.innerHTML = numero
  }, 1000);

}


let btntab = document.getElementById("btntab");
btntab.addEventListener("click", function(){
  tabuada()
});

function tabuada(){
  let num = parseInt(document.getElementById("txtNumTab").value);
  let resposta = document.getElementById("restab");
  if(!isNaN(num)){
    let tabuada='';
    for(let count=1; count<=10 ; count++) {
      tabuada += num +" x "+ count +" = "+ num*count +"<br />";
    }
  
    resposta.innerHTML = tabuada;
  }
  
}


let prox = document.getElementById("prox");
prox.addEventListener("click", function(){
  trocaImagem("proximo")
});

let ant = document.getElementById("ant");
ant.addEventListener("click", function(){
  trocaImagem("ant")
});

function trocaImagem(tipo) {
  let img = document.querySelector("#imagens")
  let numero = parseInt(img.src.substr(-5)[0])
  if(tipo=="proximo" && numero < 5) {
    numero = numero + 1
  }else if(tipo=="ant" && numero > 1) {
    numero = numero - 1
  }

  img.setAttribute('src', `imagens/img${numero}.jpg`)
}
