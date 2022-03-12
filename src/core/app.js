import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";
import {ClicksModule} from '@/modules/clicks.module';
import {ShapeModule} from '@/modules/shape.module'

export class App {
  constructor() {
    //Регистрация модулей
    this.type_1 = 'type-BackgroundModule';
    this.type_2 = 'type-ClicksModule';
    this.type_3 = 'type-ShapeModule';

    //instanse of ContextMenu. Передаем селектор корневого элемента контекстного меню
    this.contextMenu = new ContextMenu('ul');

    //instanses of Modules (в порядке их регистрации)
    this.backgroundModule = new BackgroundModule(this.type_1, 'Сменить фон')
    this.clicksModule = new ClicksModule(this.type_2, 'Подсчет кликов за 10с')
    this.shapeModule = new ShapeModule(this.type_3, 'Случайная фигура')

    //Добавляем слушатель событий на body - реагирование на правую кнопку мыши
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault();

      // Открываем контекстное меню
      this.contextMenu.open();
    })

    //Добавляем слушатель событий на body - реагирование на 'click' мыши
      document.body.addEventListener('click', event => {

      // Определяем каком пункт контекстного меню был выбран (модули идут в порядке их регистрации)
      switch (event.target.dataset.type) {
        case this.type_1: this.backgroundModule.trigger()
          break;
        case this.type_2: this.clicksModule.trigger()
          break;
        case this.type_3: this.shapeModule.trigger()
          break;
      }

      //Закрываем контестное меню после выбора
      // console.log('#this', )
      this.contextMenu.close()
    })
  }

  //Метод добавляет пункты контестного меню (Добавляем в порядке их регистрации)
  createContextMenu() {
    this.contextMenu.add(this.backgroundModule);
    this.contextMenu.add(this.clicksModule);
    this.contextMenu.add(this.shapeModule);
  }

  //Инициализация приложения
  init() {
    //Создаем контекстное меню
    this.createContextMenu();
  }
}