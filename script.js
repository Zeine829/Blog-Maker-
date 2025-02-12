// Referência ao input de arquivo e à área de saída
const fileInput = document.getElementById('fileInput');
const outputDiv = document.getElementById('output');

// Evento que dispara quando o usuário escolhe um arquivo
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // O primeiro arquivo selecionado

    if (file && file.type === "text/html") {
        const reader = new FileReader(); // Cria um leitor de arquivos

        // Quando o arquivo for carregado, exibe o conteúdo no div
        reader.onload = function(e) {
            const content = e.target.result;

            // Limpa o conteúdo anterior e insere o conteúdo do arquivo HTML
            outputDiv.innerHTML = content;
        };

        // Lê o conteúdo do arquivo
        reader.readAsText(file);
    } else {
        alert("Por favor, selecione um arquivo HTML.");
    }
});
  