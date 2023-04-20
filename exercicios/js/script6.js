const inputNome = document.getElementById("nome");
const inputRgm = document.getElementById("rgm");
const inputParc = document.getElementById("nota_parc");
const inputEx = document.getElementById("nota_exer");
const inputPro = document.getElementById("nota_proj");
const inputReg = document.getElementById("nota_regi");

const vtNomes = []
const vtRgms = []
const vtParc = []
const vtEx = []
const vtPro = []
const vtReg = []
const vtFinal = []

document.getElementById("btn1").addEventListener("click", function(){
let nome = inputNome.value;
let rgm = inputRgm.value;
let parc = inputParc.value;
let ex = inputEx.value;
let pro = inputPro.value;
let reg = inputReg.value;

if(nome == '' || rgm == '' || parc =='' || ex=='' || pro=='' || reg==''){
    alert("não tem campo preenchido")
}else{
    let final = calcularFinal(parseFloat(parc), parseFloat(ex), parseFloat(pro), parseFloat(reg))

    vtNomes.push(nome);
    vtRgms.push(rgm);
    vtParc.push(parseFloat(parc));
    vtEx.push(parseFloat(ex));
    vtPro.push(parseFloat(pro));
    vtReg.push(parseFloat(reg));
    vtFinal.push(final)

    inputNome.value = '';
    inputRgm.value = '';
    inputParc.value = '';
    inputEx.value = '';
    inputPro.value = '';
    inputReg.value = '';
    }
})

document.getElementById("btn2").addEventListener("click", function(){
    tabela = "<table>";
    tabela += `<tr>
        <th>Nome</th>
        <th>Rgm</th>
        <th>Parcial</th>
        <th> Exercicio</th>
        <th> Projeto</th>
        <th> Regimental</th>
        <th>Final</th>
        <th>Situação</th>
</tr>`;

let situacao;

for(let i=0; i < vtNomes.length; i++){
    tabela +=`<tr>
    <th>${vtNomes[i]}</th>
    <td>${vtRgms[i]}</td>
    <td>${vtParc[i]}</td>
    <td>${vtEx[i]}</td>
    <td>${vtPro[i]}</td>
    <td>${vtReg[i]}</td>`;

    if(vtFinal[i] < 1){
        situacao ='<td><p class="rep">Reprovado</p></td>'
    }else if(vtFinal[i] < 5.75){
        situacao ='<td><p class="prov">Fazer prova</p></td>'
    }else{
        situacao ='<td><p class="prov">Aprovado</p></td>'
    }

    tabela += situacao;
    tabela += '</tr>'
}
tabela +="</table>"
document.getElementById("resposta").innerHTML = tabela;
})

function calcularFinal(n1, n2, n3 , n4){
    return(n1 + n2 + n3 + n4)
}
