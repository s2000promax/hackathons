//Copyright by Maxim
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class QuoteModule extends Module {
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

    //Контейнер модуля (единый для всех модулей)
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    const container = document.createElement('div')
    container.className = 'quote-block'

    const imgAuthor = document.createElement('div')
    imgAuthor.className = 'img-author'

    const titleQuote = document.createElement('h2')
    titleQuote.className = 'quote-text'

    const titleAuthor = document.createElement('p')
    titleAuthor.className = 'author-text'

   imgAuthor.style.backgroundImage = `url(../../assets/img/${authorImg}.jpg)`

    titleQuote.textContent = quoteText

    titleAuthor.textContent = quoteAuthor

    container.append(imgAuthor, titleQuote, titleAuthor)

    divContainer.append(container)

    document.body.append(divContainer);
  }

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