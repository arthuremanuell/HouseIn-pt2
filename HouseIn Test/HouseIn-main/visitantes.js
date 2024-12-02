// Abrir o modal ao clicar no botão "Adicionar Visitante"
document.getElementById('add-visitor-btn').addEventListener('click', function() {
    document.getElementById('visitor-modal').style.display = 'flex';
});

// Fechar o modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('visitor-modal').style.display = 'none';
});

// Adicionar visitante
document.getElementById('add-visitor-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('visitor-name').value;
    const apartment = document.getElementById('visitor-apartment').value;
    const block = document.getElementById('visitor-block').value;

    if (name && apartment && block) {
        const visitorCard = document.createElement('div');
        visitorCard.classList.add('visitor-card');
        
        visitorCard.innerHTML = `
            <div class="info">
                <p><strong>${name}</strong></p>
                <p>Apartamento: ${apartment}</p>
                <p>Bloco: ${block}</p>
            </div>
            <div class="delete-visitor">
                <button class="delete-button">Excluir</button>
            </div>
        `;

        // Adicionar o cartão à lista de visitantes
        document.querySelector('.visitor-cards-container').appendChild(visitorCard);

        // Limpar os campos do formulário
        document.getElementById('visitor-name').value = '';
        document.getElementById('visitor-apartment').value = '';
        document.getElementById('visitor-block').value = '';

        // Fechar o modal
        document.getElementById('visitor-modal').style.display = 'none';
    }
});

// Excluir visitante
document.querySelector('.visitor-cards-container').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete-button')) {
        e.target.closest('.visitor-card').remove();
    }
});
