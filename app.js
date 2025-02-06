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

        let li = `<li id="${nomeAmigos[nomeAmigos.length-1]}">${nomeAmigos[nomeAmigos.length-1]} <input class="button-remove" type="button" value=" X " onclick=apagarNome(this)></li>`;
        // apagarNome(this), 'this' passa o próprio botão como referência.

        document.getElementById('listaAmigos').insertAdjacentHTML('beforeend', li);
    }
}

function sortearAmigo() {
    if (nomeAmigos.length > 0) {
        let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
        document.getElementById('resultado').innerHTML = 'O nome sorteado é: ' + sorteado;
    } else {
        alert("Por favor, insira um nome.")
    }
}

function apagarNome(botao) {
    nome = botao.parentElement.id;

    indice = nomeAmigos.indexOf(nome);

    if (indice != -1) {
        nomeAmigos.splice(indice, 1);
    }

    console.log(nomeAmigos);
    botao.parentElement.remove();
}