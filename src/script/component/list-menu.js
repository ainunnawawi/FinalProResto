import './item-menu.js';

class ListMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Menu</h1>
            <div class="content"></div>
        `;
    }

    set menus(menus) {
        this._menus = menus;
        this.render();
    }

    render() {
        const contentContainer = this.querySelector('.content');
        contentContainer.innerHTML = '';

        this._menus.forEach(menu => {
            const menuItemElement = document.createElement('item-menu');
            menuItemElement.menu = menu;
            contentContainer.appendChild(menuItemElement);
        });
    }

    renderError(message) {
        const contentContainer = this.querySelector('.content');
        contentContainer.innerHTML = `
            <h2 class="placeholder">${message}</h2>
        `;
    }
}

customElements.define('list-menu', ListMenu);
