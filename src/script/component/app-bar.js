import logoWarna from '../img/logo-warna.png';
import iconLogo from '../img/icon-logo.png';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();

        window.addEventListener('resize', () => this.setLogo());

        const searchInput = this.querySelector('input[type="text"]');

        window.addEventListener('scroll', () => {
            const navContent = document.querySelector('header app-bar');
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > 0) {
                navContent.classList.add('scrolled');
            } else {
                navContent.classList.remove('scrolled');
            }
        });

        searchInput.addEventListener('input', () => {
            console.log('Search input changed:', searchInput.value);
        });

        this.setLogo();
    }

    setLogo() {
        const logoApp = this.querySelector('#logo-app');

        if (window.innerWidth >= 500) {
            logoApp.src = logoWarna;
        } else {
            logoApp.src = iconLogo;
        }
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <img src="" id="logo-app" alt="logo">
            </div>
            <input type="text" placeholder="Cari Makanan">
        `;
    }
}

customElements.define('app-bar', AppBar);
