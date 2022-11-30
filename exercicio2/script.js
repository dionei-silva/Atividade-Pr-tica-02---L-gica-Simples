/* Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da divisao das duas primeiras
variáveis. Apresente valor da divisao no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável */

let valor1 = Number(prompt("Insira um numero: "));
if (!valor1) {
    document.write("invalido");
} else {
    let valor2 = Number(
        prompt("Insira outro numero: ").replace(".", "").replace(",", "")
    );
    if (!valor2) {
        document.write("invalido");
    } else {
        let valor3 = valor1 / valor2;
        document.write(`O resultado da divisao é ${valor3}`);
    }
}

/*if(valor1 !== null) {
      valor1 = Number(x.replace(',' , '').replace(',' , '.'))

      if(valor2 !== null) {
      valor2 = Number(x.replace(',' , '').replace(',' , '.'))
} */
