//Copyright by Maxim
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class QuoteModule extends Module {
  #divContainer
  #container
  #imgAuthor
  #titleQuote
  #titleAuthor

  constructor() {
    // тут передаю тип, и название к родительскому классу
    super('type-quoteModule', 'Цитата')
    //Контейнер модуля (единый для всех модулей)
    this.#divContainer = document.createElement('div');
    this.#divContainer.className = 'div-container';

    this.#container = document.createElement('div')
    this.#container.className = 'quote-block'

    this.#imgAuthor = document.createElement('div')
    this.#imgAuthor.className = 'img-author'

    this.#titleQuote = document.createElement('h2')
    this.#titleQuote.className = 'quote-text'

    this.#titleAuthor = document.createElement('p')
    this.#titleAuthor.className = 'author-text'
  }

  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Запрос на добавление цитаты
    this.addRandomQuote();
  }

  //Отрисовка случайной цитаты
  render(quoteText, quoteAuthor) {
    let authorImg = ''
    if(quoteAuthor !== null){
      authorImg = quoteAuthor.toLowerCase().split(' ').join('')
    } else {
      authorImg = 'randomimg'
    }

    this.#imgAuthor.style.backgroundImage = `url(../../assets/img/${authorImg}.jpg)`

    this.#titleQuote.textContent = quoteText

    this.#titleAuthor.textContent = quoteAuthor

    this.#container.append(this.#imgAuthor, this.#titleQuote, this.#titleAuthor)

    this.#divContainer.append(this.#container)

    document.body.append( this.#divContainer);
  }

  //Получение с сервера массива цитат
  addRandomQuote(){
    const result = fetch('https://type.fit/api/quotes');

    result
      .then((response) =>{
        if(!response.ok){
          throw new Error('Ошибка запроса')
        }
        return response.json()
      })
      .then((quotesAll)=>{
        let randomNumber = random(0, 50)
        const randomQuoteText = quotesAll[randomNumber].text
        const randomQuoteAuthor = quotesAll[randomNumber].author
        return this.render(randomQuoteText, randomQuoteAuthor)
      })
      .catch((error)=> {
        console.log(error)
      })
  }
}