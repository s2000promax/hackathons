import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class ClicksModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    const div = document.createElement('div');
    div.textContent = 'Hello'

    divContainer.append(div)

    document.body.append(divContainer);
  }
}