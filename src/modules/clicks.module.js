//Copyright by Bogdan
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class ClicksModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    const label = document.createElement('label');
    label.innerText = 'Введите время'
    const input = document.createElement('input');
    input.type = 'text'
    input.style.width = '50px';
    const labelAfter = document.createElement('label');
    labelAfter.innerText = ', сек';
    label.append(input, labelAfter);
    divContainer.append(label)

    divContainer.addEventListener('click', event => {
      console.log('event-single', event.type);

    });

    divContainer.addEventListener('dblclick', event => {
      console.log('event-double', event.type);

    });

    document.body.append(divContainer);
  }
}