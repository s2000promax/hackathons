import {Module} from '../core/module'
import {setToDefaultDOM} from '../utils';
import { random } from '../utils'

export class ShapeModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    //Размещаем код модуля тут
    document.body.addEventListener('click', () => {
      let arr = ['circle', 'square', 'rectangle', 'oval', 'triangle' , 'parallelogram', 'trapezoid'];
      const pageWidth = document.documentElement.scrollWidth;
      const pageHeight = document.documentElement.scrollHeight;
      let height = random(0, pageHeight);
      let width = random(0, pageWidth);
      let size = random(10, 400);
      if (height + size > pageHeight) {
        height -= size;
      }
      if (width + size > pageWidth) {
        let number = pageWidth - width + size;
        width -= number;
      }
      let div = document.createElement('div');
      div.style.top = height + 'px';
      div.style.left = width + 'px';
      div.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)}`;
      div.className = arr[random(0, arr.length - 1)];
      switch (div.className) {
        case 'circle':
          div.style.width = size + 'px';
          div.style.height = size + 'px';
          break;
        case 'oval':
          div.style.width = size / 2 + 'px';
          div.style.height = size  + 'px';
          break;
        case 'square':
          div.style.width = size + 'px';
          div.style.height = size + 'px';
          break;
        case 'rectangle':
          div.style.width = size + 'px';
          div.style.height = size / 2 + 'px';
          break;
        case 'triangle':
          div.style.backgroundColor = 'transparent'
          div.style.borderBottom = `${size + 'px'} solid ${'#' + random(1, 999999)}`;
          div.style.borderRight = `${size / 2 + 'px'} solid transparent`;
          div.style.borderLeft = `${size / 2 + 'px'} solid transparent`;
          break
        case 'parallelogram':
          div.style.width = size + 'px';
          div.style.height = size / 1.5 + 'px';
          div.style.left = random(size * 1.5, pageWidth - size * 1.5) + 'px' // width + 'px';
          break;
        default:
          div.style.backgroundColor = 'transparent'
          div.style.borderBottom = `${size + 'px'} solid ${'#' + random(1, 999999)}`;
          div.style.borderRight = `${size / 4 + 'px'} solid transparent`;
          div.style.borderLeft = `${size / 4 + 'px'} solid transparent`;
          div.style.width = size + 'px';
          div.style.height = size / 2 + 'px';
          break;
      }
      divContainer.appendChild(div);
    })


    document.body.append(divContainer);
  }
}