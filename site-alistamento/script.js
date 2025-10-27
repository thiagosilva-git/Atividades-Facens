// Espera todo o HTML da página carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos do HTML pelos IDs corretos
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Garante que o código só rode se os elementos existirem na página
    if (mobileMenuBtn && mobileMenu) {
        // Função para abrir/fechar o menu ao clicar no ícone
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
});

// Função para fechar o menu ao clicar em um link
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        // Apenas remove a classe 'active' para que o menu se esconda
        mobileMenu.classList.remove('active');
    }
}