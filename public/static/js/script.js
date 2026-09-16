const elementosReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05
});

elementosReveal.forEach((elemento) => {
    observer.observe(elemento);
});


const botoesAgendar = document.querySelectorAll('.botao-agendar');

botoesAgendar.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        const servico = botao.dataset.servico;
        const numero = '5532999156165';

        const mensagem = `Oii! Vim pelo site e queria agendar ${servico}.` +
            `\nQuais horários você tem disponíveis?`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });
});


const contatoWhatsapp = document.querySelector('#contato-whatsapp');

contatoWhatsapp.addEventListener('click', (event) => {
    event.preventDefault();

    const numero = '5532999156165';

    const mensagem = `Oii! Vim pelo seu site e queria saber mais sobre os atendimentos.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});