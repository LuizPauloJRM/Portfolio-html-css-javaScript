 function enviarWhatsApp(event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Obtém os dados do formulário
        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;

        // Formata a mensagem para o WhatsApp
        const texto = encodeURIComponent(`*Nome:* ${nome}%0A*Mensagem:* ${mensagem}`);

        // Link para enviar ao WhatsApp
        const url = `https://wa.me/5561992105813?text=${texto}`; // Substitua "SeuNumero" pelo seu número de WhatsApp

        // Redireciona para o WhatsApp
        window.open(url, "_blank");
    }