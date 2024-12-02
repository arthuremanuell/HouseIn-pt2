// Abrir o modal ao clicar no botão de adicionar
document.querySelector(".add-button").addEventListener("click", function () {
    document.querySelector("#modal").classList.add("show");
});

// Fechar o modal
document.querySelector("#close-modal").addEventListener("click", function () {
    document.querySelector("#modal").classList.remove("show");
});

// Adicionar um morador
document.querySelector("#add-resident").addEventListener("click", function () {
    const name = document.querySelector("#resident-name").value;
    const apartmentNumber = document.querySelector("#apartment-number").value;
    const block = document.querySelector("#block").value;

    if (name && apartmentNumber && block) {
        // Criar um novo cartão de morador
        const residentCard = document.createElement("div");
        residentCard.classList.add("resident-card");

        residentCard.innerHTML = `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Apartamento:</strong> ${apartmentNumber}</p>
            <p><strong>Bloco:</strong> ${block}</p>
            <button class="delete-button">Excluir</button>
        `;

        // Adicionar o cartão na lista de moradores
        document.querySelector(".residents").appendChild(residentCard);

        // Limpar o formulário
        document.querySelector("#resident-name").value = "";
        document.querySelector("#apartment-number").value = "";
        document.querySelector("#block").value = "";

        // Fechar o modal
        document.querySelector("#modal").classList.remove("show");
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});

// Excluir um morador
document.querySelector(".residents").addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("delete-button")) {
        // Remover o cartão do morador
        event.target.closest(".resident-card").remove();
    }
});
