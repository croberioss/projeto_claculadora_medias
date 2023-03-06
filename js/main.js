const form = document.getElementById('form-atividade');
const emojiAprovado = '<img src ="./imagens/aprovado.png" alt="emoji celebrando"> ';
const emojiReprovado = '<img src ="./imagens/reprovado.png" alt="emoji triste"> ';
const atividades = [];
const notas = [];
const spanAprovado = '<span class=" resultado aprovado">aprovado</span>';
const spanReprovado = '<span class=" resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota Mínima'))

let linhas = ' ';

form.addEventListener('submit' ,function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMeidaFinal();
});

function adicionaLinha() {

    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)) {
        alert(`A atividade já foi inserida`)
    }

    atividades.push(nomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= 7 ? emojiAprovado : emojiReprovado}</td>`;
    linha += '</tr>';

    linhas += linha

    nomeAtividade = ' ';
    notaAtividade = ' ';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMeidaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('meida-final-valor').innerHTML = mediaFinal
    document.getElementById('meida-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}