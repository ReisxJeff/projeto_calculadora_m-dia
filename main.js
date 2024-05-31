const form =document.getElementById('fomr-atividade');
const imgAprovado = '<img src = "./imagens/aprovado.png" alt="Emoji Festa"/>';
const imgReprovado = '<img src = "./imagens/reprovado.png" alt="Emoji chorando"/>';
const atividade = [];
const notas =[];
const spanAprovado = '<spam class="resultado aprovado">Aprovado!</spam>';
const spanReprovado = '<spam class="resultado reprovado">Reprovado!</spam>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = ``;

form.addEventListener('submit',function(e){
    e.preventDefault()

    adicionarLinha();
    atualizarTabela();
    atualizaNotaFinal();

});

function adicionarLinha() {
    const imputNomeAtividade = document.getElementById('nome-atividade');
    const imputNotaAtividade = document.getElementById('nota-ativida');

    if (atividade.includes(imputNomeAtividade.value)){
        alert(`A atividade: ${imputNomeAtividade.value} já foi incluida`);
    } else {
        atividade.push(imputNomeAtividade.value);
        notas.push(parseFloat(imputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${imputNomeAtividade.value}</td>`;
        linha += `<td>${imputNotaAtividade.value}</td>`;
        linha += `<td>${imputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    imputNomeAtividade.value ='';
    imputNotaAtividade.value ='';
}

function atualizarTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;

}

function atualizaNotaFinal() {
    const mediFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediFinal >= notaMinima ? spanAprovado : spanReprovado;


    console.log(media);
}       

function calculaMediaFinal (){
    let somaDasNotas = 0;
    for (let i = 0; i< notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}