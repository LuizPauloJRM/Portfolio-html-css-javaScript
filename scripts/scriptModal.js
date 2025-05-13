
  // Função para abrir o modal
  function abrirModal(imagemSrc) {
    const modal = document.querySelector('.modal');
    const modalImagem = modal.querySelector('img');
    modalImagem.src = imagemSrc;
    modal.style.display = 'flex';
  }

  // Função para fechar o modal
  function fecharModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }

  // Evento de clique na imagem para abrir o modal
  const projetosCards = document.querySelectorAll('.projetos-cards');

  projetosCards.forEach(card => {
    const imagem = card.querySelector('img');
    const lupa = card.querySelector('.zoom-icone');

    // Exibir ícone de lupa ao passar o mouse sobre o card
    card.addEventListener('mouseenter', () => {
      lupa.style.display = 'block';
    });

    // Esconder o ícone de lupa quando o mouse sair
    card.addEventListener('mouseleave', () => {
      lupa.style.display = 'none';
    });

    // Abrir o modal quando clicar na imagem
    imagem.addEventListener('click', () => {
      abrirModal(imagem.src);
    });
  });

  // Evento de clique no botão de fechar do modal (X)
  const modalFechar = document.querySelector('.modal-fechar');
  modalFechar.addEventListener('click', fecharModal);

  // Fechar o modal quando clicar fora da área da imagem
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });
