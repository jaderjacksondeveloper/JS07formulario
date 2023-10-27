document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtenha os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const genero = document.querySelector('input[name="genero"]:checked');

        // Valide os campos (adapte as validações conforme necessário)
        if (nome === "" || sobrenome === "" || email === "" || telefone === "" || dataNascimento === "" || !genero) {
            mensagem.textContent = "Por favor, preencha todos os campos.";
        } else {
            mensagem.textContent = "Cadastro bem-sucedido!";
            // Você pode enviar os dados para um servidor aqui ou realizar outras ações.
        }
    });
});