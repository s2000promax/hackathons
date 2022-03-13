//Copyright by Vera
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class VoicesModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    function getAudio() {
      const audio = document.createElement('audio');
      audio.src = 'http://www.noiseaddicts.com/samples_1w72b820/37' + random(20, 40) + '.mp3';
      if (document.querySelector('audio')) {
        document.querySelector('audio').remove();
      }
      divContainer.append(audio);
    }

    divContainer.addEventListener('click', function () {
      getAudio();
      document.querySelector('audio').play();
    })

    document.body.append(divContainer);
  }




}