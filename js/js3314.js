function filtrarTabela(colunaIndex, termo) {
    const tabela = document.getElementById("tabela")
    const linhas = tabela.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
    termo = termo.toLowerCase()

    for (let i=0; i<linhas.length; i++) {
        const celula = linhas[i].getElementsByTagName("td")[colunaIndex]

        if (celula) {
            const texto = celula.textContent.toLowerCase()
            const exibe = texto.includes(termo)

            linhas[i].style.display = exibe ? "" : "none"
        }
    }
}