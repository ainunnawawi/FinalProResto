import '../component/app-bar.js';
import '../component/list-menu.js';
import '../component/pop-up.js';
import DataSource from '../data/data-source.js';

const onInputChange = async (appBarElement, menuListElement) => {
  const inputKeyword = appBarElement.querySelector('input').value;

  try {
    let result;

    if (inputKeyword.trim() !== '') {
      result = await DataSource.searchMenu(inputKeyword);
    } else {
      result = await DataSource.searchMenu('Beef');
    }

    renderResult(result, menuListElement);
  } catch (message) {
    fallbackResult(message, menuListElement);
  }
};

const renderResult = (results, menuListElement) => {
  menuListElement.menus = results;

  const menuItemElements = menuListElement.querySelectorAll('item-menu');
  menuItemElements.forEach(item => {
    item.addEventListener('click', (event) => onMenuItemClick(event, item));
  });
};

const fallbackResult = (message, menuListElement) => {
  menuListElement.renderError(message);
};

const onMenuItemClick = async (event, menuItem) => {
  event.preventDefault();

  const idMeal = menuItem.querySelector('a').getAttribute('data-menu-id');

  try {
    const menuData = await DataSource.getMenuById(idMeal);

    const popupElement = document.querySelector('pop-up');
    popupElement.show(menuData);

    const closeButton = popupElement.querySelector('#close-popup');
    closeButton.addEventListener('click', () => {
      popupElement.classList.add('closing');
      setTimeout(() => {
        popupElement.hide();
        popupElement.classList.remove('closing');
      }, 300);
    });
  } catch (message) {
    console.error(message);
  }
};

const main = () => {
  const appBarElement = document.querySelector('app-bar');
  const menuListElement = document.querySelector('list-menu');

  onInputChange(appBarElement, menuListElement);

  appBarElement.addEventListener('input', () => onInputChange(appBarElement, menuListElement));
};

export default main;
