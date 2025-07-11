//Main Component

class Main extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/stylegeral.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <header class="cabecalho">
            <div class="cabecalho-left">
              <div class="btn-sidebar" id="abrirsidebar" onclick="togglesidebar(event)"><i class="fa fa-bars"></i></div>
              <a>DIA Sistemas</a>
            </div>
            <div class="cabecalho-right">
              <span class="cabecalho-user">
                <i class="fa fa-user"></i> Username <?php echo $usuario; ?>
              </span>
              <div class="temabtn" id="toggletemabtn" onclick="trocaricon()"><i id="temaicon" class="fa fa-moon"></i></div>
            </div>

        </header>

        <div id="sidebar" class="sidebar">
            <a href="#" class="closebtn" onclick="togglesidebar()">&times;</a>
            <a href="dashboard.html">Dashboard</a>
            <a href="#" class="dropdown-btn" onclick="toggleDropdown1(event)">Relatórios &#9662;</a>
            <div class="dropdownsidebar dropdown-container1">
              <a href="1464.html">1464 - Apuração Faturamento</a>
              <a href="322.html">322 - Venda por Departamento</a>
              <a href="111.html">111 - Resumo do Faturamento</a>
              <a href="3314.html">3314 - Tabela de Clientes</a>
              <a href="8055.html">8055 - Base de Clientes</a>
            </div>
            <a href="#" class="dropdown-btn" onclick="toggleDropdown2(event)">Paineis De Venda &#9662;</a>
            <div class="dropdownsidebar dropdown-container2">
              <a href="diadist_pasta1norte.html">Pasta 1 Norte</a>
              <a href="diadist_pasta1sul.html">Pasta 1 Sul</a>
              <a href="diadist_pasta2norte.html">Pasta 2 Norte</a>
              <a href="diadist_pasta2sul.html">Pasta 2 Sul</a>
              <a href="diadist_pasta3norte.html">Pasta 3 Norte</a>
              <a href="diadist_pasta3sul.html">Pasta 3 Sul</a>
            </div>
            <a href="config.html">Configurações</a>
            <a href="ajuda.html">Ajuda</a>
            <a href="#">Logout</a>
        </div>

        <footer class="footer">
          <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
        </footer>
        `
        const toggleTemaBtn = document.getElementById('toggletemabtn')
        const icone = document.getElementById('temaicon')

        //Atualiza o icone ao abrir ou atualizar a página
        function atualizariconetema() {
            if (document.body.classList.contains('dark-mode')) {
                icone.classList.remove('fa-moon')
                icone.classList.add('fa-sun')
            } else {
                icone.classList.remove('fa-sun')
                icone.classList.add('fa-moon')
            }
        }

        //Atualiza o tema ao abrir ou atualizar a página
        if (localStorage.getItem('tema') === 'dark') {
            document.body.classList.add('dark-mode')
        }
        atualizariconetema()

        //Muda o tema ao apertar no botão
        toggleTemaBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark')
        } else {
            localStorage.setItem('tema', 'light')
        }
        })
        }

        //

    }

customElements.define('main-component', Main)
//Fim Main Component

//Abre a Sidebar
const sidebar = document.getElementById("sidebar");
const openButton = document.getElementById("abrirsidebar");

function togglesidebar(event) {
  if (event) event.stopPropagation();
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Fecha a sidebar ao clicar fora
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const openButton = document.getElementById("abrirsidebar");

  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedOnOpenButton = openButton.contains(event.target);

  if (sidebar.classList.contains("open") && !clickedInsideSidebar && !clickedOnOpenButton) {
    sidebar.classList.remove("open");
  }
});

//Muda o icone do tema ao clicar
function trocaricon() {
    const icone = document.getElementById('temaicon')

    if (icone.classList.contains('fa-moon')) {
        icone.classList.remove('fa-moon')
        icone.classList.add('fa-sun')
    } else {
        icone.classList.remove('fa-sun')
        icone.classList.add('fa-moon')
    }
}

//Abre o Dropdown 1 e fecha o 2 caso esteja aberto
function toggleDropdown1(event) {
  event.stopPropagation();
  const dropdown1 = document.querySelector('.dropdown-container1');
  const dropdown2 = document.querySelector('.dropdown-container2');

  if (dropdown1.style.display === "block") {
    dropdown1.style.display = "none";
  } else {
    dropdown1.style.display = "block";
    dropdown2.style.display = "none";
  }
}

//Abre o Dropdown 2 e fecha o 1 caso esteja aberto
function toggleDropdown2(event) {
  event.stopPropagation();
  const dropdown1 = document.querySelector('.dropdown-container1');
  const dropdown2 = document.querySelector('.dropdown-container2');

  if (dropdown2.style.display === "block") {
    dropdown2.style.display = "none";
  } else {
    dropdown2.style.display = "block";
    dropdown1.style.display = "none";
  }
}

//Fecha os Dropdowns caso clique fora
document.addEventListener("click", function(event) {
  const dropdown1 = document.querySelector('.dropdown-container1');
  const dropdown2 = document.querySelector('.dropdown-container2');

  if (dropdown1.style.display === "block") {
    dropdown1.style.display = "none";
  }
  if (dropdown2.style.display === "block") {
    dropdown2.style.display = "none";
  }
});