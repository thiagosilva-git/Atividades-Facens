// Espera todo o HTML da página carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos do HTML pelos IDs corretos
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        // Função para abrir/fechar o menu ao clicar no ícone
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
});

// =========================================================
// NOVA FUNÇÃO PARA FECHAR O MENU AO CLICAR EM UM LINK
// =========================================================
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        // Apenas remove a classe 'active' para que o menu se esconda
        mobileMenu.classList.remove('active');
    }
}