class ItemMenu extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#" data-menu-id="${this._menu.idMeal}">
        <div class="card">
          <img src="${this._menu.strMealThumb}" alt="gambar makanan">
          <h2>${this._menu.strMeal}</h2>
          <p>Kategori: ${this._menu.strCategory}</p>
          <p>Negara: ${this._menu.strArea}</p>
          </br>
        </div>
      </a>
    `;
  }
}

customElements.define('item-menu', ItemMenu);
