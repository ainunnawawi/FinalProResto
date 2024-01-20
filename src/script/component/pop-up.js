class PopUp extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupCloseButton();
    }

    render() {
        this.innerHTML = `
            <div id="popup-container" class="popup-container">
                <div id="background-overlay" class="background-overlay">
                    <span id="close-popup" class="close-popup">&times;</span>
                </div>
                <div class="popup-content">
                    <img id="popup-image" src="" alt="gambar makanan">
                    <h2 id="popup-title"></h2>
                    <h3>Category</h3>
                    <p id="popup-category"></p>
                    <h3>Country</h3>
                    <p id="popup-country"></p>
                    <h3>Description</h3>
                    <div id="popup-description"></div>
                </div>
            </div>
        `;
    }

    setupCloseButton() {
        const closeButton = this.querySelector('#close-popup');
        closeButton.addEventListener('click', () => {
            this.hide();
        });
    }

    show(menuData) {
        const popupContainer = this.querySelector('#popup-container');
        const popupImage = this.querySelector('#popup-image');
        const popupTitle = this.querySelector('#popup-title');
        const popupCategory = this.querySelector('#popup-category');
        const popupCountry = this.querySelector('#popup-country');
        const popupDescription = this.querySelector('#popup-description');

        popupImage.src = menuData.strMealThumb;
        popupTitle.textContent = menuData.strMeal;
        popupCategory.textContent = menuData.strCategory;
        popupCountry.textContent = menuData.strArea;

        const formattedInstructions = menuData.strInstructions.split('\r\n');
        const instructionsList = formattedInstructions.map((instruction, index) => `<p><strong>${index + 1}.</strong> ${instruction}</p>`).join('');

        popupDescription.innerHTML = instructionsList;

        const backgroundOverlay = this.querySelector('#background-overlay');

        document.body.style.overflow = 'hidden';

        popupContainer.style.display = 'block';
    }

    hide() {
        const popupContainer = this.querySelector('#popup-container');

        document.body.style.overflow = 'auto';

        popupContainer.style.display = 'none';
    }
}

customElements.define('pop-up', PopUp);
