document.getElementById('productionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe a mensagem de sucesso
    document.getElementById('successMessage').style.display = 'block';

    // Opcional: Limpa o formulário
    this.reset();
});