//Copyright by Maxim
import {Module} from '../core/module'
import {setToDefaultDOM, getRandomPosition} from '../utils';

let score = 0;
let finish = 0;
const matchCheck = [];

export class GameMemoryModule extends Module {
  #divContainer
  #container
  #titleInfo
  #boardContainer

  constructor() {
    super('type-gameMemoryModule', 'Игра Memory')
    //Контейнер модуля (единый для всех модулей)
  }

  init () {
    this.#divContainer = document.createElement('div');
    this.#divContainer.className = 'div-container';

    this.#container = document.createElement('div')
    this.#container.className = 'screen'

    this.#titleInfo = document.createElement('h3')
    this.#titleInfo.className = 'info'
    this.#titleInfo.textContent = 'Счёт : 0'

    this.#boardContainer = document.createElement('div')
    this.#boardContainer.className = 'board'
    this.#boardContainer.id = 'board'

    this.screens = document.querySelectorAll('.screen');

    score = 0;
    finish = 0;
  }

  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();
    this.init ()
    //Старт игры
    this.startGame();
  }

  startGame() {
    this.#container.append(this.#titleInfo, this.#boardContainer)
    this.#divContainer.append(this.#container)
    document.body.append(this.#divContainer)
    setTimeout(this.createRandomPictures, 500);
  }

  // функция когда кортинки не совпали картинки

  restart() {
    const elementSecond = document.querySelectorAll('.hover');
    elementSecond.forEach((value) => {
      value.classList.remove('hover');
      value.style.background = `url(../assets/imgMemoryGame/result.jpg) center / 100% no-repeat`;
    });
    matchCheck.length = 0;
  }

  // создаёт картинки с разным id

  createRandomPictures() {
    const amount = getRandomPosition(16);
    const asd = document.querySelector('#board')
    this.screens = document.querySelectorAll('.screen');
    for (let i = 0; i <= amount.length - 1; ++i) {
      const pictur = document.createElement('div');
      pictur.classList.add('pictur');
      pictur.dataset.items = amount[i];
      pictur.style.width = '150px';
      pictur.style.height = '150px';
      asd.append(pictur);
    }
  }

  // окончание игры с заниснием в таблицу рекордов(localStorage)

  finishGame() {
    const board = document.querySelector('#board');
    console.log(score)
    localStorage.setItem(`${Math.random()}`, `${score}`);
    board.classList.add('finish');
    board.innerHTML = `<h1 class="title-game" >Ваш счет: <span class="primary">${
      score - 1
    }</span></br>Таблица рекордов</h1> `;
    let recordsSort = Object.values(localStorage)
      .map((value) => Number(value))
      .sort((a, b) => a - b);
    recordsSort.forEach((value, index) => {
      if (index < 10) {
        const valueRecord = document.createElement('h2');
        valueRecord.className = 'record'
        valueRecord.innerHTML = `Место ${index + 1}: Количество ходов ${value}`;
        board.append(valueRecord);
      }
    });
  }

}

const starPlay = new GameMemoryModule

// слушатель для нажатия (не уверен что правильно, мб с чем нибудь будет конфликтовать)

document.addEventListener('click', (event) => {
  const getElement = event.target;
  const isPictur = getElement.closest('.pictur');
  const infoElement = document.querySelector('.info');
  if (isPictur && matchCheck.length < 2) {
    infoElement.textContent = `Счёт : ${++score}`;
    getElement.classList.add('hover');
    getElement.style.background = `url(../assets/imgMemoryGame/${getElement.dataset.items}.jpg) center / 100%  no-repeat`;
    matchCheck.push(getElement.dataset.items);
    if (matchCheck.length === 2 && matchCheck[0] === matchCheck[1]) {
      const element = document.querySelectorAll('.hover');
      element.forEach((value) => {
        value.classList.remove('hover');
        value.classList.add('end');
        value.style.background = `url(../assets/imgMemoryGame/${getElement.dataset.items}.jpg) center / 100% no-repeat`;
      });
      finish++;
      matchCheck.length = 0;
      if (finish === 8) {
        starPlay.finishGame();
      }
    } else if (matchCheck.length === 2 && matchCheck[0] !== matchCheck[1]) {
      setTimeout(() => {
        starPlay.restart();
      }, 700);
    }
  }
});