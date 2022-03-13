import {Module} from '../core/module'
import {setToDefaultDOM} from '../utils';

export class QuoteModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    //Размещаем код модуля тут

    document.body.append(divContainer);
  }
}