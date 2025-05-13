
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-imagem');
        const fechar = document.getElementById('modal-fechar');
        const imagensProjetos = document.querySelectorAll('.projetos-imagem');

        imagensProjetos.forEach((img) => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.style.display = 'flex';
            });
        });

        fechar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
