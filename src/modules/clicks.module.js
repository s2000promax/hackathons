//Copyright by Bogdan
import {Module} from '../core/module'
import {setToDefaultDOM} from '../utils';

export class ClicksModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    let singleCounter = 0;
    let dbCounter = 0;

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    const label = document.createElement('label');
    label.innerText = 'Введите время'
    const input = document.createElement('input');
    input.type = 'text'
    input.value = String(10);
    input.style.width = '30px';
    const labelAfter = document.createElement('label');
    labelAfter.innerText = ', сек';
    label.append(input, labelAfter);
    divContainer.append(label)

    const buttonDiv = document.createElement('div');
    const button = document.createElement('button');
    button.style.width = '80px';
    button.style.height = '30px';
    button.innerText = 'Старт!'

    let timeCounter = input.value;
    let isStart = true;

    button.onclick = function () {
      divContainer.addEventListener('click', event => {

        singleCounter += 1;

        if (isStart) {
          singleCounter = 0; //Клик на кнопку не всчёт

          const timerTotal = setInterval(() => {
            if (timeCounter > 0) {
              timeCounter -= 1;
              button.innerText = String(timeCounter)
              if (timeCounter === 0) {
                document.querySelector('.spanSingleCounter').textContent = String(singleCounter);
                document.querySelector('.spanDoubleCounter').textContent = String(dbCounter);
                clearInterval(timerTotal)
              }
            }

          }, 1000);
        }
        isStart = false;
      });
      divContainer.addEventListener('dblclick', event => {
        dbCounter += 1;
        singleCounter -= 2;
      });
    }

    buttonDiv.append(button)

    const resultBlock = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText = 'Одинарные клики: ';
    const p2 = document.createElement('p');
    p2.innerText = 'Двойные клики: ';

    const spanSingleCounter = document.createElement('span');
    spanSingleCounter.className = 'spanSingleCounter';
    const spanDoubleCounter = document.createElement('span');
    spanDoubleCounter.className = 'spanDoubleCounter';

    p1.append(spanSingleCounter);
    p2.append(spanDoubleCounter);
    resultBlock.append(p1, p2);


    divContainer.append(buttonDiv)
    divContainer.append(resultBlock);

    document.body.append(divContainer);
  }
}