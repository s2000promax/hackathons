//Copyright by Bogdan
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class ClicksModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    let singleCounter = 0;
    let dbCounter = 0;
    let adjustInterval = 400;

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

    const radioGroupDiv = document.createElement('div');
    radioGroupDiv.className = 'radioGroup';
    const input1 = document.createElement('input');
    input1.type = 'radio';
    input1.name = 'speed'
    input1.id = 'fast';
    input1.value = String(200);
    const label1 = document.createElement('label');
    label1.innerText = 'fast';
    label1.htmlFor = 'fast';

    const input2 = document.createElement('input');
    input2.type = 'radio';
    input2.name = 'speed'
    input2.id = 'middle';
    input2.checked = true;
    input2.value = String(400);
    const label2 = document.createElement('label');
    label2.innerText = 'middle';
    label2.htmlFor = 'middle';

    const input3 = document.createElement('input');
    input3.type = 'radio';
    input3.name = 'speed'
    input3.id = 'slow';
    input3.value = String(600);
    const label3 = document.createElement('label');
    label3.innerText = 'slow';
    label3.htmlFor = 'slow';

    radioGroupDiv.append(input1, label1, input2, label2, input3, label3);

    divContainer.append(radioGroupDiv);

    const buttonDiv = document.createElement('div');
    const button = document.createElement('button');
    button.style.width = '80px';
    button.style.height = '30px';
    button.innerText = 'Старт!'

    let timeCounter = input.value;
    let tempClick = 0;
    button.onclick = function () {
      divContainer.addEventListener('click', event => {

        //Уточняем подстройку под длительность двойного клика
        const radioGroup = document.querySelector('.radioGroup')
        radioGroup.childNodes.forEach(item => {
          if (item.checked) {
            adjustInterval = item.value;
          }
        })

        tempClick += 1;
        if (tempClick >= 2) {
          dbCounter += 1;
          document.querySelector('.spanDoubleCounter').textContent = String(dbCounter);
        } else {
          singleCounter += 1;
          document.querySelector('.spanSingleCounter').textContent = String(singleCounter);

        }

        const timerToClicks = setInterval( () => {
          tempClick = 0;
          console.log('TimeInterval')
        }, adjustInterval)

        const timerTotal = setInterval( () => {
          if (timeCounter > 0 ) {
            timeCounter -= 1;
            button.innerText = String(timeCounter)
            if (timeCounter === 0) {
              clearInterval(timerToClicks);
              console.log('dbCounter:', dbCounter);
            }
          }

        }, 1000)

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