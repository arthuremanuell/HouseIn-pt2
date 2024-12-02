const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const addButton = document.querySelector("#adicionar");
const deleteButton = document.querySelector("#excluir");
const localInput = document.querySelector("#local");
const moradorInput = document.querySelector("#morador");
const blocoInput = document.querySelector("#bloco");
const apartamentoInput = document.querySelector("#apartamento");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// Funcionalidade de adicionar
addButton.addEventListener("click", () => {
    const localValue = localInput.value;
    const moradorValue = moradorInput.value;
    const blocoValue = blocoInput.value;
    const apartamentoValue = apartamentoInput.value;

    if (localValue && moradorValue && blocoValue && apartamentoValue) {
        const item = document.createElement("div");
        item.classList.add("card");
        item.innerHTML = `
            <div class="info">
                <p><strong>Local:</strong> ${localValue}</p>
                <p><strong>Morador:</strong> ${moradorValue}</p>
                <p><strong>Bloco:</strong> ${blocoValue}</p>
                <p><strong>Apartamento:</strong> ${apartamentoValue}</p>
            </div>
            <button class="delete-btn">Excluir</button>
        `;
        
        // Adiciona ao conteúdo
        document.querySelector(".content .main").appendChild(item);

        // Limpa os campos
        localInput.value = "";
        moradorInput.value = "";
        blocoInput.value = "";
        apartamentoInput.value = "";

        // Fecha o modal
        toggleModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Funcionalidade de excluir
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
