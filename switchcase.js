

function acaoBotao(params) {
    var valor01, valor02, resultado, operacao;
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação ex: +, -, *, / ")
    valor02 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;

    }



}