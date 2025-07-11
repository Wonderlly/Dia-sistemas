class LoginCad extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="temabtn" id="toggletemabtn" onclick="trocaricon()"><i id="temaicon" class="fa fa-moon"></i></div>
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

customElements.define('logincad-component', LoginCad)