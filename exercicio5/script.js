/* Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_" */

let nome = window.prompt("Insira o nome do aluno: ");
if (!nome) {
    document.write(" Nome nao valido");
}
let nota1 = Number(prompt("insira primeira nota"));

if (!nota1) {
    document.write(" nota invalida");
} else {
    let nota2 = Number(prompt("insira segunda nota"));

    if (!nota2) {
        document.write(" nota invalida");
    } else {
        let nota3 = Number(prompt("insira terceira nota"));

        if (!nota3) {
            document.write(" nota invalida");
        } else {
            let somanotas = nota1 + nota2 + nota3;
            let notafinal = somanotas / 3;
            document.write(
                `O aluno ${nome} ficou com a media ${notafinal.toFixed(2)}. `
            );
        }
    }
}
