  import {Module} from '../core/module'
  import {setToDefaultDOM} from '../utils';

  import src_button_on from '../../assets/ui/Button-type_1-On.png'
  import src_button_off from '../../assets/ui/Button-type_1-Off.png'

  export class ReverseTimerModule extends Module {
    trigger() {
      //Очистка DOM-дерева от предыдущего модуля
      setToDefaultDOM();

      //Контейнер модуля
      const divContainer = document.createElement('div');
      divContainer.className = 'div-container';

      //Размещаем код модуля тут
      const div = document.createElement('div');
      div.className = 'reverse-container';
      const image = document.createElement('img');
      image.src = src_button_off;
      image.height = 30
      const input = document.createElement('input');
      input.value = String(10);
      const span1 = document.createElement('span');
      span1.innerText = 'сек';
      const span2 = document.createElement('span');
      span2.innerText = 'осталось:';
      const span3 = document.createElement('span');
      span3.innerText = input.value;
      const span4 = document.createElement('span');
      span4.innerText = 'сек';


      div.append(image, input, span1, span2, span3, span4)
      divContainer.append(div)

      let isClick = false;
      let isPause = false;

      image.addEventListener('click', event => {
      if (isClick) {
        image.src = src_button_off;

      } else {
        image.src = src_button_on;
        let counter = input.value;
        console.log('counter:', counter)

          setInterval(() => {
            if (counter > 0) {
              counter -= 1;
            }

          span3.innerText = counter.toString();
        }, 1000)
      }

      isClick = !isClick;
      });

      document.body.append(divContainer);
    }
  }