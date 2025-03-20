/*
MONTAGEM COM AJAX
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

// MONTAGEM AJAX COM JQUERY
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
            }, 1000);
        })
    })
})

/*
MONTAGEM E TRATAMENTO DE ERRO COM JAVASCRIPT PURO
$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/resultado`;
        const botao = $(this); 
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');
        fetch(endpoint).then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })

        .catch(function(erro){
            alert('Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde');
        })
        .finally(function(){
            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    })
})
*/

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