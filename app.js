const inputAmigo = document.getElementById ("amigo");
const listaAmigos = []
const ulListaAmigos = document.getElementById ("listaAmigos");

function adicionarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

};