class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Belajar Front and Developer Web &copy; 2023, Ainun Nawawi x Dicoding Academy</p>
        `;
    }
}

customElements.define('app-footer', AppFooter);
