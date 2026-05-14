function alterarTexto() {
    // 1. Seleciona o parágrafo pelo ID
    const paragrafo = document.getElementById('texto-para-alterar');
    
    // 2. Altera o conteúdo do texto
    paragrafo.innerText = "O texto foi alterado pelo Javascript";
    
    // 3. Remove a restrição de altura do CSS original para o novo texto encaixar perfeitamente
    paragrafo.style.height = "auto";
}