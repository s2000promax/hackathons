import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class GameMemoryModule extends Module {
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