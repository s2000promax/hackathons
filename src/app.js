import './styles.css';
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {ClicksModule} from './modules/clicks.module';
import {GameModule} from './modules/game.module';
import {PianoModule} from './modules/piano.module';
import {QuoteModule} from './modules/quote.module';
import {ReverseTimerModule} from './modules/reversetimer.module';
import {ShapeModule} from './modules/shape.module';
import {VoicesModule} from './modules/voices.module';

class App {
  constructor() {
    //Регистрация модулей
    this.type_1 = 'type-backgroundModule';
    this.type_2 = 'type-clicksModule';
    this.type_3 = 'type-gameModule';
    this.type_4 = 'type-pianoModule';
    this.type_5 = 'type-quoteModule';
    this.type_6 = 'type-reverseTimerModule';
    this.type_7 = 'type-shapeModule';
    this.type_8 = 'type-voicesModule';

    //instanse of ContextMenu. Передаем селектор корневого элемента контекстного меню
    this.contextMenu = new ContextMenu('ul');

    //instanses of Modules (в порядке их регистрации)
    this.backgroundModule = new BackgroundModule(this.type_1, 'Сменить фон');
    this.clicksModule = new ClicksModule(this.type_2, 'Подсчёт кликов');
    this.gameModule = new GameModule(this.type_3, 'Игра');
    this.pianoModule = new PianoModule(this.type_4, 'Пианино');
    this.quoteModule = new QuoteModule(this.type_5, 'Сборник цитат');
    this.reverseTimerModule = new ReverseTimerModule(this.type_6, 'Обратный таймер');
    this.shapeModule = new ShapeModule(this.type_7, 'Случайные фигуры');
    this.voicesModule = new VoicesModule(this.type_8, 'Случайные звуки');

    //Добавляем слушатель событий на body - реагирование на правую кнопку мыши
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault();

      // Открываем контекстное меню
      this.contextMenu.open();

      //Подстройка позиции контекстного меню
      const pageWidth = document.documentElement.scrollWidth;
      const pageHeight = document.documentElement.scrollHeight;
      this.contextMenu.el.style.left = (event.clientX + this.contextMenu.el.scrollWidth) <= pageWidth
                                          ? `${event.clientX}px`
                                          : `${event.clientX - this.contextMenu.el.scrollWidth}px`;

      this.contextMenu.el.style.top = (event.clientY + this.contextMenu.el.scrollHeight) <= pageHeight
                                          ? `${event.clientY}px`
                                          : `${event.clientY - this.contextMenu.el.scrollHeight}px`;
    });

    //Добавляем слушатель событий на body - реагирование на 'click' мыши
    document.body.addEventListener('click', event => {

      // Определяем какой пункт контекстного меню был выбран (модули идут в порядке их регистрации)
      switch (event.target.dataset.type) {
        case this.type_1: this.backgroundModule.trigger();
          break;
        case this.type_2: this.clicksModule.trigger();
          break;
        case this.type_3: this.gameModule.trigger();
          break;
        case this.type_4: this.pianoModule.trigger();
          break;
        case this.type_5: this.quoteModule.trigger();
          break;
        case this.type_6: this.reverseTimerModule.trigger();
          break;
        case this.type_7: this.shapeModule.trigger();
          break;
        case this.type_8: this.voicesModule.trigger();
          break;

      }

      //Закрываем контекстное меню после выбора
      this.contextMenu.close();

    })
  }

  //Метод добавляет пункты контестного меню (Добавляем в порядке их регистрации)
  createContextMenu() {
    this.contextMenu.add(this.backgroundModule);
    this.contextMenu.add(this.clicksModule);
    this.contextMenu.add(this.gameModule);
    this.contextMenu.add(this.pianoModule);
    this.contextMenu.add(this.quoteModule);
    this.contextMenu.add(this.reverseTimerModule);
    this.contextMenu.add(this.shapeModule);
    this.contextMenu.add(this.voicesModule);
  }

  //Инициализация приложения
  init() {
    //Создаем контекстное меню
    this.createContextMenu();
  }
}

const app = new App();
app.init();