/* Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_" */

let totalCompra = window.prompt("insira o valor total da compra: ");
if (totalCompra !== null) {
    totalCompra = Number(totalCompra.replace(",", "").replace(",", "."));
}
if (!totalCompra) {
    document.write("valor total invalido");
} else {
    let parcelas = window.prompt("Insira as parcelas");

    if (parcelas !== null) {
        parcelas = Number(parcelas.replace(",", "").replace(",", "."));
    }

    if (!parcelas) {
        document.write("parcelas invalidas");
    } else {
        let valorParcela = totalCompra / parcelas;
        document.write(`<p>o valor total da compra é ${totalCompra}</p>`);
        document.write(
            `<p>Forma de pagamento: ${parcelas}x de R$${valorParcela}</p>`
        );
    }
}
