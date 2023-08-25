$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn_buscar_cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this)
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function (resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} -${estado}`;
            $('#endereco').val(endereco)

            setTimeout(function () {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000)
        })
    })

    $("#formulario_pedido").submit(function (evento) {
        evento.preventDefault();

        if ($("#nome").val().length == 0) {
            throw new Error('Digite o nome');
        }
    })
})