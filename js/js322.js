    document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade da lista de checkboxes
    function toggleCheckboxes() {
        const checkboxes = document.getElementById('checkboxes');
        checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
    }

    // Atualiza o botão dropdown com as filiais selecionadas
    function updateSelectedFiliais() {
        const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');
        const dropdownBtn = document.getElementById('dropdown-filialbtn');
        let selected = [];

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selected.push(checkbox.nextSibling.textContent.trim()); // Adiciona o texto da filial
            }
        });

        if (selected.length > 0) {
            dropdownBtn.textContent = selected.join(', '); // Mostra as filiais selecionadas
        } else {
            dropdownBtn.textContent = 'Selecione as filiais'; // Texto padrão se nenhuma estiver selecionada
        }
    }

    // Adicionar evento de clique ao botão de dropdown
    document.getElementById('dropdown-filialbtn').addEventListener('click', function(event) {
        event.stopPropagation(); // Impede a propagação do clique
        toggleCheckboxes();
    });

    // Adiciona eventos de mudança nos checkboxes para atualizar o botão
    const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateSelectedFiliais);
    });

    // Fechar a lista de checkboxes se o usuário clicar fora dela
    document.addEventListener('click', function(event) {
        const checkboxes = document.getElementById('checkboxes');
        if (checkboxes.style.display === 'block') {
            if (!checkboxes.contains(event.target) && event.target.id !== 'dropdown-filialbtn') {
                checkboxes.style.display = 'none';
            }
        }
    });
});