//Copyright by Vera
import {Module} from '../core/module'
import {setToDefaultDOM} from '../utils';

export class PianoModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    function getPiano() {
      const section1 = document.createElement('section'),
        header = document.createElement('header'),
        h1 = document.createElement('h1'),
        h2 = document.createElement('h2'),
        section2 = document.createElement('section'),
        div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div'),
        div4 = document.createElement('div'),
        div5 = document.createElement('div'),
        div6 = document.createElement('div'),
        div7 = document.createElement('div'),
        div8 = document.createElement('div'),
        div9 = document.createElement('div'),
        div10 = document.createElement('div'),
        div11 = document.createElement('div'),
        div12 = document.createElement('div'),
        div13 = document.createElement('div'),
        div14 = document.createElement('div'),
        div15 = document.createElement('div'),
        div16 = document.createElement('div'),
        div17 = document.createElement('div'),
        div18 = document.createElement('div'),
        div19 = document.createElement('div'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        span3 = document.createElement('span'),
        span4 = document.createElement('span'),
        span5 = document.createElement('span'),
        span6 = document.createElement('span'),
        span7 = document.createElement('span'),
        span8 = document.createElement('span'),
        span9 = document.createElement('span'),
        span10 = document.createElement('span'),
        span11 = document.createElement('span'),
        span12 = document.createElement('span'),
        span13 = document.createElement('span'),
        span14 = document.createElement('span'),
        span15 = document.createElement('span'),
        span16 = document.createElement('span'),
        span17 = document.createElement('span'),
        audio1 = document.createElement('audio'),
        audio2 = document.createElement('audio'),
        audio3 = document.createElement('audio'),
        audio4 = document.createElement('audio'),
        audio5 = document.createElement('audio'),
        audio6 = document.createElement('audio'),
        audio7 = document.createElement('audio'),
        audio8 = document.createElement('audio'),
        audio9 = document.createElement('audio'),
        audio10 = document.createElement('audio'),
        audio11 = document.createElement('audio'),
        audio12 = document.createElement('audio'),
        audio13 = document.createElement('audio'),
        audio14 = document.createElement('audio'),
        audio15 = document.createElement('audio'),
        audio16 = document.createElement('audio'),
        audio17 = document.createElement('audio');

      section1.id = 'wrap';
      section2.id = 'main';
      header.className = 'header';
      h1.innerText = 'JS Piano';
      h1.className = 'title';
      h2.innerText = 'Use your keyboard. Hover for hints.';
      h2.className = 'subtitle';
      div1.className = 'keys';

      div19.className = 'nowplaying';

      div2.dataset.key = '65';
      div2.dataset.note = 'C';
      div2.className = 'key';
      span1.className = 'hints';
      span1.innerText = 'A';

      div3.dataset.key = '87';
      div3.className = 'key sharp';
      div3.dataset.note = 'C#';
      span2.className = 'hints';
      span2.innerText = 'W';

      div4.dataset.key = '83';
      div4.dataset.note = 'D';
      div4.className = 'key';
      span3.className = 'hints';
      span3.innerText = 'S';

      div5.dataset.key = '69';
      div5.className = 'key sharp';
      div5.dataset.note = 'D#';
      span4.className = 'hints';
      span4.innerText = 'E';

      div6.dataset.key = '68';
      div6.dataset.note = 'E';
      div6.className = 'key';
      span5.className = 'hints';
      span5.innerText = 'D';

      div7.dataset.key = '70';
      div7.dataset.note = 'F';
      div7.className = 'key';
      span6.className = 'hints';
      span6.innerText = 'F';

      div8.dataset.key = '84';
      div8.className = 'key sharp';
      div8.dataset.note = 'F#';
      span7.className = 'hints';
      span7.innerText = 'T';

      div9.dataset.key = '71';
      div9.dataset.note = 'G';
      div9.className = 'key';
      span8.className = 'hints';
      span8.innerText = 'G';

      div10.dataset.key = '89';
      div10.className = 'key sharp';
      div10.dataset.note = 'G#';
      span9.className = 'hints';
      span9.innerText = 'Y';

      div11.dataset.key = '72';
      div11.dataset.note = 'A';
      div11.className = 'key';
      span10.className = 'hints';
      span10.innerText = 'H';

      div12.dataset.key = '85';
      div12.className = 'key sharp';
      div12.dataset.note = 'A#';
      span11.className = 'hints';
      span11.innerText = 'U';

      div13.dataset.key = '74';
      div13.dataset.note = 'B';
      div13.className = 'key';
      span12.className = 'hints';
      span12.innerText = 'J';

      div14.dataset.key = '75';
      div14.dataset.note = 'C';
      div14.className = 'key';
      span13.className = 'hints';
      span13.innerText = 'K';

      div15.dataset.key = '79';
      div15.className = 'key sharp';
      div15.dataset.note = 'C#';
      span14.className = 'hints';
      span14.innerText = 'O';

      div16.dataset.key = '76';
      div16.dataset.note = 'D';
      div16.className = 'key';
      span15.className = 'hints';
      span15.innerText = 'L';

      div17.dataset.key = '80';
      div17.className = 'key sharp';
      div17.dataset.note = 'D#';
      span16.className = 'hints';
      span16.innerText = 'P';

      div18.dataset.key = '186';
      div18.dataset.note = 'E';
      div18.className = 'key';
      span17.className = 'hints';
      span17.innerText = ';';

      audio1.dataset.key = '65';
      audio1.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav';

      audio2.dataset.key = '87';
      audio2.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav';

      audio3.dataset.key = '83';
      audio3.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav';

      audio4.dataset.key = '69';
      audio4.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav';

      audio5.dataset.key = '68';
      audio5.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav';

      audio6.dataset.key = '70';
      audio6.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav';

      audio7.dataset.key = '84';
      audio7.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav';

      audio8.dataset.key = '71';
      audio8.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav';

      audio9.dataset.key = '89';
      audio9.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav';

      audio10.dataset.key = '72';
      audio10.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav';

      audio11.dataset.key = '85';
      audio11.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav';

      audio12.dataset.key = '74';
      audio12.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav';

      audio13.dataset.key = '75';
      audio13.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav';

      audio14.dataset.key = '79';
      audio14.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav';

      audio15.dataset.key = '76';
      audio15.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav';

      audio16.dataset.key = '80';
      audio16.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav';

      audio17.dataset.key = '186';
      audio17.src = 'http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav';

      const htmlStyle = document.querySelector('.div-container');
      htmlStyle.style.background = '#000';
      htmlStyle.style.fontFamily = '\'Dancing Script\', cursive';
      htmlStyle.style.textAlign = 'center';

      if (document.querySelector('#wrap')) {
        document.querySelector('#wrap').remove();
      }

      divContainer.append(section1);
      section1.append(header);
      header.append(h1, h2);
      section1.append(section2)
      section2.append(div19, div1);
      div1.append(div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, div14, div15, div16, div17, div18);

      div2.append(span1);
      div3.append(span2);
      div4.append(span3);
      div5.append(span4);
      div6.append(span5);
      div7.append(span6);
      div8.append(span7);
      div9.append(span8);
      div10.append(span9);
      div11.append(span10);
      div12.append(span11);
      div13.append(span12);
      div14.append(span13);
      div15.append(span14);
      div16.append(span15);
      div17.append(span16);
      div18.append(span17);

      section2.append(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15, audio16, audio17);
    }

    divContainer.addEventListener('click', function () {
      getPiano();

      const keys = document.querySelectorAll(".key"),
        note = document.querySelector(".nowplaying"),
        hints = document.querySelectorAll(".hints");

      function playNote(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!key) return;
        const keyNote = key.getAttribute("data-note");
        key.classList.add("playing");
        note.innerHTML = keyNote;
        audio.currentTime = 0;
        audio.play();
      }

      function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
      }

      function hintsOn(e, index) {
        e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
      }

      hints.forEach(hintsOn);
      keys.forEach(key => key.addEventListener("transitionend", removeTransition));
      window.addEventListener("keydown", playNote);
    })

    document.body.append(divContainer);
  }
}