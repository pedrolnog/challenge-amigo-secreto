//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value; 
    // "querySelector()" retorna o primeiro elemento que é igual ao seletor CSS especificado; 
    // Caso existisse outro input, seria melhor utilizar "getElementById()".

    if (nome == '') {
        alert("Por favor, insira um nome.")
    } else {
        nomeAmigos.push(' ' + nome);
        console.log(nomeAmigos);
        document.querySelector('input').value = '';

        let li = `<li id="itemListaAmigos">${nomeAmigos[nomeAmigos.length-1]}<input id="botaoNome${nomeAmigos.length-1}" type="button" value="X" onclick=apagarNome()></li>`;
        document.getElementById('listaAmigos').insertAdjacentHTML('beforeend', li);
    }
}

function sortearAmigo() {
    let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
    document.getElementById('resultado').innerHTML = 'O nome sorteado é: ' + sorteado;
}

function apagarNome() {
    
}