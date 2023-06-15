//Impede o envio padrão do formulário

// Obtendo os valores dos campos do form


function enviarFomulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;

    const sobrenome = document.getElementById('sobrenome').value;

    const email = document.getElementById('email').value;

    const valor = document.getElementById('valor').value;

    const instituicao = document.getElementById('instituicao').value;

    //Cria um objeto com os dados do formulário
    const dadosFormulario = {
        nome,
        sobrenome,
        email,
        valor,
        instituicao

    };

    const options = {
        method: 'POST', // Metodo HTTP
        headers: {
            'Content-Type' : 'application/json' // Tipo de conteúdo
        },
        body: JSON.stringify(dadosFormulario) // Convertendo o objeto em uma strubg 
    };

    // Envia a requisição para o servidor

    fetch ('http://localhost:3333/', options)

    .then(response => response.json())//Converte a resposta em JSON
    .then(data => {
        console.log('Dados adicionados com sucesso', data);
    })

    .catch(error =>{
        console.error('Erro ao adicionado os dados:', error);
    });// Lida com erros, se necessário
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', enviarFomulario);