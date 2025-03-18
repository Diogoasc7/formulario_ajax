/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // AJAX - Asyncronous JavaScript and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})
*/

$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this); 
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 3000);
        })
    })
})

/*
O código em JavaScript puro

Utiliza XMLHttpRequest para fazer a requisição.
Apenas envia a requisição, mas não trata a resposta.
Não possui efeitos visuais, como carregamento do botão.
O código em jQuery

Usa jQuery Mask Plugin para formatar o CEP automaticamente.
Faz a requisição AJAX de forma mais simplificada com $.ajax().
Atualiza o campo de endereço com os dados retornados pela API.
Modifica a interface do botão enquanto os dados são carregados.
*/