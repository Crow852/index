function responder(resposta) {
    if (resposta === 'sim') {
        alert('Ótima escolha! Você escolheu o melhor namorado. Iremos nos casar em 6 meses.');
        enviarEmail();
    } else if (resposta === 'nao') {
        mudarPosicao(); // Chame a função para mudar a posição quando "Não" for selecionado
    }
}

function mudarPosicao(event) {
    const botaoNao = document.getElementById('nao');
    const screenWidth = window.innerWidth - botaoNao.clientWidth;
    const screenHeight = window.innerHeight - botaoNao.clientHeight;

    const newPositionX = Math.random() * screenWidth;
    const newPositionY = Math.random() * screenHeight;

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${newPositionX}px`;
    botaoNao.style.top = `${newPositionY}px`;
}

function enviarEmail(){
    const templateParams = {
        to_email: 'rafaanjos852@hotmail.com',
        message: "Alguém quer namorar com você! Ótima escolha!"
    };

    emailjs.init('gEPlfYAyAnNgyHS0j');
    emailjs.send('service_eu95rkq', 'template_o31lgiu', templateParams)
    .then(function (response) {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
    }, function (error){
        console.error('Erro ao enviar o e-mail',error);
    });
}