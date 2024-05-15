// Exemplo de livros (pode ser substituído por uma lista real de livros)
const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 }
];

// Função para exibir os livros na página
function exibirLivros() {
    const livrosSection = document.getElementById("livros");
    livros.forEach(livro => {
        const divLivro = document.createElement("div");
        divLivro.classList.add("livro");
        divLivro.innerHTML = `
            <h2>${livro.titulo}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>Ano: ${livro.ano}</p>
        `;
        livrosSection.appendChild(divLivro);
    });
}

// Chama a função para exibir os livros quando a página carregar
window.onload = exibirLivros;