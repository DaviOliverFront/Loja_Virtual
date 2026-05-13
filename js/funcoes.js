
function alterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao =='-' && qtd.innerHTML == 0){

    } else {
        acao =='+' ? qtd.innerHTML++ : qtd.innerHTML--
        

    // Captura o texto, remove o "R$" (se houver) e troca a vírgula por ponto
    let valorNumerico = parseFloat(valor.innerHTML.replace('R$', '').replace(',', '.').trim());

    // Agora realiza o cálculo com segurança
    let resultado = Number(qtd.innerHTML) * valorNumerico;

    // Formata de volta para o padrão de moeda antes de exibir
    total.innerHTML = resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
       soma() 
    }
}

function soma(){
    let soma = 0

    for (let i = 1; i < 4; i++) {
    let elementoTotal = document.getElementById('total_' + i).innerHTML;
    
    // Remove "R$", espaços e troca a vírgula decimal por ponto
    let valorLimpo = elementoTotal.replace(/[^\d,.-]/g, '').replace(',', '.');
    
    // Converte para número e soma (garantindo que se estiver vazio, seja 0)
    soma += parseFloat(valorLimpo) || 0;
}

    document.getElementById('subtotal').innerHTML = soma

}
