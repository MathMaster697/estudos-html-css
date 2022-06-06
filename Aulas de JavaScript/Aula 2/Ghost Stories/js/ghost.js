function converterDuracaodofilme(){
    // Aqui a gente cria uma referencia aos elementos do site
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");
    
    // Aqui a gente pega o conteúdo dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);
    
    // Aqui vai arredondar pra baixo o resultado da divisao
    var horas = Math.floor(duracao / 60);
    // Aqui pegar o resto da divisao  entre os números
    var minutos = duracao % 60;
    
    // Aqui altera o conteúdo do parágrafo da resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " Horas e " + minutos + " minutos";
}
// Aqui a gente criou uma referencia ao elemento btConverter (botao)
var btConverter = document.getElementById("btConverter");
// Aqui a gente registrou um evento que é associado ao botao, pra carregar a funçao
btConverter.addEventListener("click", converterDuracaodofilme);