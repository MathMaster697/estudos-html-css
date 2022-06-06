// Declara a funçao mostrarOla
function mostrarOla() {
    // Obtém o conteúdo do campo (com o id(identificador)) nome
    var nome = document.getElementById("nome").value;
    // Mostra no parágrafo (com id=) "resposta": "Olá " e o nome que foi digitado
    document.getElementById("resposta").innerHTML = "Olá, " + nome;
}
// Cria uma referencia para o botao (com id=) mostrar
var mostrar = document.getElementById("mostrar");
// registra para o botao mostrar um "ouvinte" para o evento click, que quando foi clicado vai chamar a funçao mostrarOla
mostrar.addEventListener("click", mostrarOla);